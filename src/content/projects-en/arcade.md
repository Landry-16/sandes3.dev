---
summary: A retro gaming platform where the games and the display engines are libraries loaded at runtime.
galleryAlts:
  - External SDL2 graphics library
  - SFML graphics library
  - ncurses graphics library
  - External ncurses graphics library
coverAlt: "SDL2 graphics library"
---

A second-year project in C++20. The games (Snake, Centipede) and the graphics libraries (ncurses, SFML, SDL2) are all shared libraries discovered and loaded at runtime with `dlopen`.

## Key points

- Switch display engine mid-game, without restarting.
- Common interfaces agreed with other groups, so that their libraries work with our core.
- Adding a game requires no change to the main program.

Private repository (Epitech project).
