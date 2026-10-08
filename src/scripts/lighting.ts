/**
 * The cursor is the only light of the page. Elements marked [data-lit] get
 * --lit (0 to 1, how close the light is) and --shadow-x / --shadow-y (a soft
 * shadow cast away from the light). Sections marked [data-spot] get the
 * cursor position as --spot-x / --spot-y for their spotlight gradient.
 * On touch screens the light sits at the centre of the viewport.
 */
const REACH = 720;
const SHADOW = 34;

export function startLighting(): void {
  const lit = Array.from(document.querySelectorAll<HTMLElement>("[data-lit]"));
  const spots = Array.from(document.querySelectorAll<HTMLElement>("[data-spot]"));
  if (lit.length === 0 && spots.length === 0) return;

  const fine = window.matchMedia("(pointer: fine)").matches;
  let light = { x: window.innerWidth / 2, y: window.innerHeight * 0.45 };
  let scheduled = false;

  function update(): void {
    scheduled = false;
    for (const el of spots) {
      const r = el.getBoundingClientRect();
      if (r.bottom < 0 || r.top > window.innerHeight) continue;
      el.style.setProperty("--spot-x", `${light.x - r.left}px`);
      el.style.setProperty("--spot-y", `${light.y - r.top}px`);
    }
    for (const el of lit) {
      const r = el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > window.innerHeight + 200) continue;
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = cx - light.x;
      const dy = cy - light.y;
      const dist = Math.hypot(dx, dy) || 1;
      const edge = Math.max(0, dist - Math.min(r.width, r.height) / 2);
      const amount = Math.max(0, 1 - edge / REACH);
      el.style.setProperty("--lit", amount.toFixed(3));
      el.style.setProperty("--shadow-x", `${((dx / dist) * SHADOW * (0.4 + amount)).toFixed(1)}px`);
      el.style.setProperty("--shadow-y", `${((dy / dist) * SHADOW * (0.4 + amount)).toFixed(1)}px`);
    }
  }

  const schedule = (): void => {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(update);
    }
  };

  if (fine) {
    window.addEventListener("pointermove", (e) => {
      light = { x: e.clientX, y: e.clientY };
      schedule();
    }, { passive: true });
  } else {
    window.addEventListener("resize", () => {
      light = { x: window.innerWidth / 2, y: window.innerHeight * 0.45 };
      schedule();
    });
  }
  window.addEventListener("scroll", schedule, { passive: true });
  schedule();
}

/** Contact sheet frames develop from negative to positive as they enter the viewport. */
export function startDeveloping(): void {
  const frames = Array.from(document.querySelectorAll<HTMLElement>("[data-develop]"));
  if (frames.length === 0) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        const index = frames.indexOf(el);
        el.style.setProperty("--develop-delay", `${Math.max(0, index) * 280}ms`);
        el.classList.add("is-developed");
        observer.unobserve(el);
      });
    },
    { threshold: 0.45 },
  );
  frames.forEach((f) => observer.observe(f));
}
