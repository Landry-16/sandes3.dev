---
summary: "A keyboard launcher for Linux (GNOME) and Windows: one shortcut opens a bar to launch, calculate, convert or take notes."
role: Design and development
galleryAlts:
  - "The Landry bar searching for “rose”: apps, files and notes, with a preview of the result on the right"
coverAlt: "The Landry bar in Act mode, with a 10-minute timer and the golden wyvern beside it"
---

Landry fits in a bar in the middle of the screen. It handles everything you already do with the keyboard: open an app, find a file, do a calculation, convert a unit, paste a snippet, jot down an idea, start a timer.

Everything stays local, except the services you choose to connect. The golden wyvern living in the bar reacts to what you type.

## What it does

- One search for apps, files, notes and snippets.
- Launch, Calculate and Act modes, with a preview of the result on the right.
- Visual presets (Black Rose, Silk, Pixel, Fresco) that change the colours and shape of the bar.
- One-command install, a service that restarts on its own, and a bar you can move with the mouse.

## Details

- Built for GNOME on Wayland, with an extension for open windows and clipboard history, plus a Windows 10 and 11 version.
- The engine is written in Rust (Tauri 2) and the interface in Svelte 5.
- Full keyboard navigation, screen reader support and respect for the “reduce motion” setting.
