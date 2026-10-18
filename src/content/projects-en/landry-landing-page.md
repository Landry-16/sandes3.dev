---
title: Landry, the landing page
summary: "The Landry showcase site, a dark page where the wyvern guides the visitor, from the bar demo all the way to the download."
galleryAlts:
  - "The bar demo: typing “rose” fills the search while the wyvern points at the Launch, Calculate and Act modes"
  - The Calculate mode, with “3pm Paris in New York” typed in the bar and the result shown large
  - The page on a phone, with the title, the demo bar and the download button
coverAlt: "The Landry site home page on a dark red background, with the title “Your new (cute) companion” and the search bar"
---

<video src="/projects/landry-landing-page/scroll.mp4" poster="/projects/landry-landing-page/scroll.jpg" width="1280" height="720" controls muted loop playsinline preload="none" style="width: 100%; height: auto; border-radius: 4px;" aria-label="Video: scrolling through the Landry landing page, from the top to the bottom of the page"></video>

The site presents Landry the way you would in a live demo. A bar types its own examples in front of the visitor, the wyvern sits beside it, and the page moves down through pinned sections to the install.

The site is static: HTML, CSS and a single JavaScript file, with no build step or dependency. The design comes from a Figma file, with the wyvern's poses drawn from its components.

## What it does

- A bar demo that types itself, with its three modes and their results.
- A wyvern that reacts to the section the visitor is in.
- Visual presets shown side by side, with a preview of each.
- The legal pages and the licence, built on the same template.

## Details

- Respects the “reduce motion” setting: the page stays readable and the wyvern stays put in each section.
- Self-hosted fonts, with their SIL OFL 1.1 licence.
- Layout checked on desktop and phone, with no horizontal scrolling.
