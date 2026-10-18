---
title: Venin Carmin, Maison Écaille
summary: The page of an imaginary perfume, where a snake crosses the whole site without ever being cut, from the opening film to the bottom of the page.
galleryAlts:
  - The Leather chapter, with the snake gliding over a close-up of skin
  - The Venom chapter, with the snake's head raised, mouth open
  - The moult, where the snake slides out of its skin, which stays behind as a pale trace
  - The bottle split into six glass scales, a note under each
  - The olfactory pyramid shown as photo scales tinted carmine
  - The opening of the site on a phone
coverAlt: "The title Venin Carmin beside a red bottle with a snake coiled around it"
---

<video src="/projects/ecaille/scroll.mp4" poster="/projects/ecaille/scroll.jpg" width="1280" height="720" controls muted loop playsinline preload="none" style="width: 100%; height: auto; border-radius: 4px;" aria-label="Video: a full scroll through the site, from the opening film to the bottle opening into scales"></video>

A demo site for a perfume that does not exist, Venin Carmin, designed as a short film you move forward by scrolling. The common thread is a snake: a single fixed SVG path that follows the camera from one chapter to the next, without a cut.

## What it does

- The opening film moves frame by frame with the scroll, the snake's head coiled around the bottle.
- Seven chapters: the snake enters over the skin, rears up, moults and leaves its skin behind, then coils around the bottle.
- The bottle splits into six glass scales; each one reveals a note on hover, touch or keyboard, and the snake's head turns towards it.
- The notes form a pyramid of photo scales, which take back their true colours when chosen.

## Details

- Smooth scrolling with Lenis, GSAP animations, a fully static site in French and English.
- Film encoded in several sizes, with a keyframe every four frames so scrolling stays smooth.
- With “reduce motion”, the film gives way to a poster, sections are no longer pinned and the snake stays still.
- Lighthouse on desktop: 100 in all four categories.
