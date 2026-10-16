---
title: Landry
summary: Un lanceur clavier pour Linux (GNOME) et Windows. On appuie sur un raccourci, une barre s'ouvre, on tape quelques lettres pour lancer, calculer, convertir ou noter.
year: 2026
kind: Personnel
team: Solo
role: Conception et développement
stack: [Rust, Tauri 2, Svelte 5]
status: En cours
repo: https://github.com/Landry-16/landry
demo: https://landry.sandess.dev
demoLabel: Voir le site
cover: ../../assets/projects/landry/cover.png
coverAlt: La barre Landry en mode Agir, avec un minuteur de 10 minutes et la vouivre dorée à côté
gallery:
  - src: ../../assets/projects/landry/barre.png
    alt: "La barre Landry avec la recherche « rose » : applications, fichiers et notes, et l'aperçu du résultat à droite"
order: 5
featured: true
---

Landry tient dans une barre au centre de l'écran. Elle sert à tout ce qu'on fait déjà avec le clavier : ouvrir une application, retrouver un fichier, faire un calcul, convertir une unité, coller un extrait, noter une idée, lancer un minuteur.

Tout reste en local, sauf les services qu'on choisit de brancher. La vouivre dorée, qui vit dans la barre, réagit à ce qu'on tape.

## Ce qu'il fait

- Une recherche unique pour les applications, les fichiers, les notes et les extraits.
- Des modes Lancer, Calculer et Agir, avec un aperçu du résultat à droite.
- Des présets visuels (Rose noire, Soie, Pixel, Fresque) qui changent les couleurs et la forme de la barre.
- Une installation en une commande, un service qui redémarre tout seul et une barre qu'on peut déplacer à la souris.

## Détails

- Pensé pour GNOME sous Wayland, avec une extension pour les fenêtres ouvertes et l'historique du presse-papiers, et une version Windows 10 et 11.
- Le code est écrit en Rust (Tauri 2) pour le moteur et en Svelte 5 pour l'interface.
- Une navigation complète au clavier, des lecteurs d'écran pris en compte et le respect du réglage « réduire les animations ».
