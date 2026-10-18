---
summary: The same idea, brought to the browser in WebGL2. It is the engine that lights up the home page of this site.
coverAlt: "The studio scene rendered by the WebGL path tracer, with a chrome sphere, a glass sphere and a black block"
---

A progressive Monte Carlo path tracer that runs entirely on the visitor's graphics card. Each frame adds one sample per pixel to an average accumulated in a floating-point texture: the image starts as noise and converges before your eyes.

## What it does

- Next event estimation towards an area light, cosine sampling and Russian roulette.
- Diffuse materials, metal with variable roughness and glass with Fresnel.
- Thin-lens depth of field, ACES tone mapping.
- The light follows the cursor: a ray is cast through the pointer up to the ceiling of the room.
- Orbit camera with mouse, finger and keyboard, PNG export of the image.

The home page of this portfolio uses this engine: move the mouse over the scene to move the lamp.
