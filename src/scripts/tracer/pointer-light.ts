import type { OrbitCamera } from "./camera";
import type { Scene, Vec3 } from "./scene";

const clamp = (v: number, lo: number, hi: number): number => Math.min(hi, Math.max(lo, v));

/**
 * Places the scene's ceiling light under a point of the canvas, by casting a
 * camera ray through it and intersecting the ceiling (or the floor when the
 * ray points down). Returns true when the light actually moved.
 */
export function moveLightToPoint(scene: Scene, camera: OrbitCamera, rect: DOMRect, clientX: number, clientY: number): boolean {
  const nx = ((clientX - rect.left) / rect.width) * 2 - 1;
  const ny = 1 - ((clientY - rect.top) / rect.height) * 2;
  const basis = camera.basis();
  const tanHalf = Math.tan((camera.fov * Math.PI) / 360);
  const aspect = rect.width / rect.height;
  const dir = [0, 1, 2].map(
    (i) => basis.forward[i] + basis.right[i] * nx * tanHalf * aspect + basis.up[i] * ny * tanHalf,
  ) as Vec3;

  const { min, max } = scene.room;
  const planeY = dir[1] > 0 ? max[1] : min[1];
  const t = (planeY - basis.position[1]) / (dir[1] || 1e-6);
  if (t <= 0) return false;

  const half = scene.light.halfSize;
  const x = clamp(basis.position[0] + dir[0] * t, min[0] + half[0], max[0] - half[0]);
  const z = clamp(basis.position[2] + dir[2] * t, min[2] + half[1], max[2] - half[1]);
  const [px, pz] = scene.light.position;
  if (Math.abs(px - x) < 1e-3 && Math.abs(pz - z) < 1e-3) return false;
  scene.light.position = [x, z];
  return true;
}
