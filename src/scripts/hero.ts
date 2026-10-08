import { OrbitCamera } from "./tracer/camera";
import { moveLightToPoint } from "./tracer/pointer-light";
import { Renderer } from "./tracer/renderer";
import { SCENES, cloneScene } from "./tracer/scene";

/** Converged enough for a hero: beyond this the image no longer changes visibly. */
const MAX_SAMPLES = 2048;
/** Below this throughput the traced resolution is lowered to keep the page responsive. */
const MIN_SAMPLES_PER_SECOND = 24;

const formatSamples = (n: number): string => `${n.toLocaleString("fr-FR")} ${n > 1 ? "échantillons" : "échantillon"} par pixel`;

export function startHero(root: HTMLElement): void {
  const canvas = root.querySelector<HTMLCanvasElement>("[data-hero-canvas]");
  const counter = root.querySelector<HTMLElement>("[data-hero-samples]");
  if (!canvas || !counter) return;

  let renderer: Renderer;
  try {
    renderer = new Renderer(canvas);
  } catch {
    root.classList.add("is-static");
    return;
  }
  root.classList.add("is-live");

  const camera = new OrbitCamera();
  const scene = cloneScene(SCENES[0]);
  let scale = window.matchMedia("(pointer: coarse)").matches ? 0.5 : 0.75;
  let visible = true;
  let pending: { x: number; y: number } | null = null;

  function fit(): void {
    const rect = canvas!.getBoundingClientRect();
    const aspect = rect.width / Math.max(1, rect.height);
    camera.fov = aspect < 1 ? 56 : aspect < 1.4 ? 46 : 38;
    renderer.resolutionScale = scale;
    renderer.resize(rect.width, rect.height, Math.min(window.devicePixelRatio || 1, 2));
    renderer.reset();
  }

  new ResizeObserver(fit).observe(canvas);
  new IntersectionObserver((entries) => {
    visible = entries[0]?.isIntersecting ?? true;
  }).observe(root);

  const queueLight = (e: PointerEvent): void => {
    pending = { x: e.clientX, y: e.clientY };
  };
  root.addEventListener("pointermove", (e) => {
    if (e.pointerType === "mouse") queueLight(e);
  });
  root.addEventListener("pointerdown", queueLight);

  let windowStart = performance.now();
  let windowSamples = 0;
  let adapted = false;

  function frame(now: number): void {
    requestAnimationFrame(frame);
    if (pending) {
      if (moveLightToPoint(scene, camera, canvas!.getBoundingClientRect(), pending.x, pending.y)) renderer.reset();
      pending = null;
    }
    if (!visible || document.hidden || renderer.samples >= MAX_SAMPLES) return;

    renderer.render(scene, camera);
    counter!.textContent = formatSamples(renderer.samples);
    windowSamples++;

    const elapsed = now - windowStart;
    if (elapsed > 1500) {
      const rate = (windowSamples * 1000) / elapsed;
      if (!adapted && rate < MIN_SAMPLES_PER_SECOND && scale > 0.35) {
        scale = Math.max(0.35, scale * 0.7);
        fit();
      } else {
        adapted = true;
      }
      windowStart = now;
      windowSamples = 0;
    }
  }

  fit();
  requestAnimationFrame(frame);
}
