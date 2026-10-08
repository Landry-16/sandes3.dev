---
title: RoboCar
summary: Une voiture qui apprend à rester sur la piste d'un simulateur Unity, par apprentissage supervisé puis par renforcement.
year: 2026
kind: École
team: Équipe Epitech
stack: [Python, PyTorch, ML-Agents]
repo: https://github.com/PhilibertG/RoboCar
cover: ../../assets/projects/robocar/ray-heatmap.jpg
coverAlt: Carte de chaleur des capteurs de distance de la voiture
gallery:
  - src: ../../assets/projects/robocar/loss-curve.jpg
    alt: Courbe d'apprentissage du modèle
order: 12
visible: false
---

On conduit d'abord la voiture au clavier ou au volant pour enregistrer des trajectoires (capteurs et actions), puis un modèle apprend à reproduire la conduite. Une seconde version affine le pilote par apprentissage par renforcement. Priorité : rester sur la piste avant d'aller vite.
