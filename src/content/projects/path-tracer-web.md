---
title: Path Tracer Web
summary: Le même principe, porté dans le navigateur en WebGL2. C'est le moteur qui éclaire l'accueil de ce site.
year: 2026
kind: Personnel
team: Solo
stack: [TypeScript, WebGL2, GLSL, Vite]
repo: https://github.com/Landry-16/path-tracer-web
demo: https://landry-16.github.io/path-tracer-web/
featured: true
order: 2
---

Un path tracer Monte Carlo progressif qui tourne entièrement sur la carte graphique du visiteur. Chaque image ajoute un échantillon par pixel à une moyenne accumulée dans une texture en virgule flottante : l'image part du bruit et converge sous les yeux.

## Ce qu'il fait

- Next event estimation vers une lumière surfacique, échantillonnage en cosinus et roulette russe.
- Matériaux diffus, métal à rugosité variable et verre avec Fresnel.
- Profondeur de champ par lentille mince, tone mapping ACES.
- La lumière suit le curseur : un rayon est lancé à travers le pointeur jusqu'au plafond de la pièce.
- Caméra orbitale à la souris, au doigt et au clavier, export de l'image en PNG.

L'accueil de ce portfolio utilise ce moteur : bougez la souris sur la scène pour déplacer la lampe.
