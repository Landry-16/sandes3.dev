---
title: Venin Carmin, Maison Écaille
summary: La page d'un parfum imaginaire, où un serpent traverse tout le site sans jamais être coupé, du film d'ouverture jusqu'au bas de la page.
year: 2026
kind: Personnel
team: Solo
stack: [Astro, TypeScript, GSAP, Lenis, SVG]
demo: https://ecaille.sandess.dev
demoLabel: Voir le site
cover: ../../assets/projects/ecaille/cover.jpg
coverAlt: Le titre Venin Carmin à côté d'un flacon rouge autour duquel s'enroule un serpent
gallery:
  - src: ../../assets/projects/ecaille/cuir.jpg
    alt: Le chapitre Le Cuir, avec le serpent qui glisse sur une peau en gros plan
  - src: ../../assets/projects/ecaille/venin.jpg
    alt: Le chapitre Le Venin, avec la tête du serpent dressée, gueule ouverte
  - src: ../../assets/projects/ecaille/mue.jpg
    alt: La mue, où le serpent sort de sa peau qui reste derrière lui en trace pâle
  - src: ../../assets/projects/ecaille/flacon.jpg
    alt: Le flacon séparé en six écailles de verre, une note sous chacune
  - src: ../../assets/projects/ecaille/notes.jpg
    alt: La pyramide olfactive présentée en écailles photo teintées de carmin
  - src: ../../assets/projects/ecaille/mobile.jpg
    alt: L'ouverture du site sur téléphone
featured: false
order: 2
---

<video src="/projects/ecaille/scroll.mp4" poster="/projects/ecaille/scroll.jpg" width="1280" height="720" controls muted loop playsinline preload="none" style="width: 100%; height: auto; border-radius: 4px;" aria-label="Vidéo : un défilement complet du site, du film d'ouverture jusqu'au flacon qui s'ouvre en écailles"></video>

Un site de démonstration pour un parfum qui n'existe pas, Venin Carmin, pensé comme un court film qu'on fait avancer au scroll. Le fil conducteur est un serpent : un seul tracé SVG fixe qui suit la caméra d'un chapitre à l'autre, sans coupure.

## Ce qu'il fait

- Le film d'ouverture avance image par image avec le scroll, la tête du serpent enroulée autour du flacon.
- Sept chapitres : le serpent entre sur la peau, se dresse, mue en laissant sa peau derrière lui, puis s'enroule autour du flacon.
- Le flacon se sépare en six écailles de verre ; chacune révèle une note au survol, au toucher ou au clavier, et la tête du serpent se tourne vers elle.
- Les notes forment une pyramide d'écailles photo, qui reprennent leurs vraies couleurs quand on les choisit.

## Détails

- Défilement doux avec Lenis, animations GSAP, site entièrement statique en français et en anglais.
- Film encodé en plusieurs tailles, avec une image clé toutes les quatre images pour que le défilement reste fluide.
- Avec « réduire les animations », le film laisse place à une affiche, les sections ne sont plus épinglées et le serpent reste immobile.
- Lighthouse sur ordinateur : 100 dans les quatre catégories.
