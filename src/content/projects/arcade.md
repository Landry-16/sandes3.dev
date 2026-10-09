---
title: Arcade
summary: Une plateforme de jeux rétro dont les jeux et les moteurs d'affichage sont des bibliothèques chargées à chaud.
year: 2026
kind: École
team: Équipe Epitech
stack: [C++20, CMake, SFML, ncurses, SDL2]
featured: true
cover: ../../assets/projects/arcade/arcade3.jpg
coverAlt: Lib graphique SDL2
gallery:
  - src: ../../assets/projects/arcade/arcade1.jpg
    alt: lib graphique SDL2 externe
  - src: ../../assets/projects/arcade/arcade2.jpg
    alt: lib graphique SFML
  - src: ../../assets/projects/arcade/arcade4.jpg
    alt: lib graphique ncurses
  - src: ../../assets/projects/arcade/arcade5.jpg
    alt: lib graphique ncurses externe

order: 6
---

Projet de deuxième année en C++20. Les jeux (Snake, Centipede) comme les bibliothèques graphiques (ncurses, SFML, SDL2) sont des bibliothèques partagées découvertes et chargées pendant l'exécution avec `dlopen`.

## Points clés

- Changement de moteur d'affichage en pleine partie, sans redémarrer.
- Interfaces communes définies avec d'autres groupes, pour que leurs bibliothèques fonctionnent avec notre cœur.
- Ajouter un jeu ne demande aucune modification du programme principal.

Dépôt privé (projet Epitech).
