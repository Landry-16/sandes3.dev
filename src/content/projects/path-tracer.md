---
title: Path tracer
summary: Un moteur de rendu physique en C++17, avec deux intégrateurs, une BVH et des plugins chargés à l'exécution.
year: 2026
kind: École
team: Équipe Epitech
stack: [C++17, CMake, SFML, ImGui, Open Image Denoise]
repo: https://github.com/Landry-16/Path-Tracer_Sandes_copy
cover: ../../assets/projects/path-tracer/lion.jpg
coverAlt: Statue de lion en marbre, rendue par le path tracer
gallery:
  - src: ../../assets/projects/path-tracer/dragon.jpg
    alt: Tête de dragon éclairée par des sphères émissives
  - src: ../../assets/projects/path-tracer/angel.jpg
    alt: Statue d'ange entourée de sphères réfléchissantes
  - src: ../../assets/projects/path-tracer/cornell-10spp.jpg
    alt: Boîte de Cornell à 10 échantillons par pixel, encore bruitée
  - src: ../../assets/projects/path-tracer/cornell-denoised.jpg
    alt: La même boîte de Cornell après débruitage
  - src: ../../assets/projects/path-tracer/glass-tori.jpg
    alt: Tores de verre dans une pièce aux miroirs colorés
featured: true
order: 1
---

Projet de programmation orientée objet de deuxième année. Le moteur contient deux intégrateurs : un raytracer de Whitted, rapide et déterministe, et un path tracer Monte Carlo pour l'éclairage global (ombres douces, inter-réflexions, next event estimation, roulette russe).

## Architecture

- Une **BVH** construite avec l'heuristique de surface fait passer le coût d'intersection de linéaire à logarithmique.
- Le rendu est découpé en **tuiles** réparties sur tous les cœurs, avec un affichage progressif dans une fenêtre SFML.
- Chaque primitive, matériau, texture, chargeur de maillage (OBJ, STL) et débruiteur est un **plugin** chargé à l'exécution. Le cœur ne connaît que des interfaces virtuelles pures.
- Un éditeur de scène **ImGui** permet de modifier la scène en direct, et le fichier de scène est rechargé à chaud.

## Matériaux

Lambert, métal, verre (avec préréglages d'indice de réfraction), lumières émissives, et un matériau physique Cook-Torrance avec plus de vingt préréglages (or, chrome, jade, marbre...).
