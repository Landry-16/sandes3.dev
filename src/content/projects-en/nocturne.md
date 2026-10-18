---
title: Nocturne at the Petit Palais
summary: A night-time 3D tour through four rooms and twelve paintings of the Petit Palais, where scrolling makes the visitor walk.
role: Design and development
galleryAlts:
  - The entrance to the first room, with its title, the glass roof and the door to the next room
  - Rembrandt's self-portrait in oriental costume under its spotlight, with its label on the wall
  - A close-up of a painting by Ziem, with the label text set on the wall beside it
  - Clairin's portrait of Sarah Bernhardt in the room with plum walls
  - The last room and Pelez's six-metre frieze, at the end of the tour
  - The gallery on a phone, with the route at the bottom of the screen
coverAlt: "Courbet's Young Ladies on the Banks of the Seine, lit by a spotlight on a dark green wall"
---

<video src="/projects/nocturne/visite.mp4" poster="/projects/nocturne/visite.jpg" width="1280" height="720" controls muted loop playsinline preload="none" style="width: 100%; height: auto; border-radius: 4px;" aria-label="Video: from the welcome screen to the second room, then a painting opened in close-up"></video>

The whole page is a gallery at night. Scrolling does not move a document: it moves a camera through a suite of four rooms, from a Greek icon around 1500 to Pelez's fairground frieze. Each work has its own spotlight, which brightens as you get closer.

The twelve paintings are real works from the Petit Palais, under a CC0 licence (public domain), downloaded from Paris Musées and checked one by one. The labels, in French and English, were written for the project.

## What it does

- A camera that follows the scroll with damping, on a curve that slows down in front of each painting and keeps its momentum through the doorways.
- One spotlight per work, with soft shadows and a visible beam. On hover, the painting lifts off the wall.
- On click, the camera moves closer and shifts the image to make room for the label, set on the wall.
- The view follows the mouse, or the tilt of the phone if allowed.
- Moving from one room to the next darkens for a moment, then the room's title appears.

## Details

- Full keyboard navigation, screen reader support, and respect for the “reduce motion” setting.
- Images load room by room, in two sizes, and only the rooms near the camera are drawn.
- Ambient sound synthesised with Web Audio, muted by default.
