---
summary: A physically based renderer in C++17, with two integrators, a BVH and plugins loaded at runtime.
galleryAlts:
  - Dragon head lit by emissive spheres
  - Marble lion statue, rendered by the path tracer
  - Cornell box at 10 samples per pixel, still noisy
  - The same Cornell box after denoising
  - Glass tori in a room with coloured mirrors
coverAlt: "Angel statue surrounded by reflective spheres"
---

A second-year object-oriented programming project. The engine has two integrators: a Whitted raytracer, fast and deterministic, and a Monte Carlo path tracer for global illumination (soft shadows, inter-reflections, next event estimation, Russian roulette).

## Architecture

- A **BVH** built with the surface area heuristic brings intersection cost down from linear to logarithmic.
- Rendering is split into **tiles** spread across all cores, with progressive display in an SFML window.
- Every primitive, material, texture, mesh loader (OBJ, STL) and denoiser is a **plugin** loaded at runtime. The core only knows pure virtual interfaces.
- An **ImGui** scene editor lets you change the scene live, and the scene file is hot-reloaded.

## Materials

Lambert, metal, glass (with refractive index presets), emissive lights, and a physically based Cook-Torrance material with more than twenty presets (gold, chrome, jade, marble...).
