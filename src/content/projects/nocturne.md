---
title: Nocturne au Petit Palais
summary: Une visite de nuit en 3D à travers quatre salles et douze tableaux du Petit Palais, où le scroll fait marcher le visiteur.
year: 2026
kind: Personnel
team: Solo
stack: [TypeScript, Three.js, WebGL, Vite]
demo: https://gallery.sandess.dev
demoLabel: Visiter la galerie
cover: ../../assets/projects/nocturne/cover.jpg
coverAlt: Les Demoiselles des bords de la Seine de Courbet, éclairées par un projecteur sur un mur vert sombre
gallery:
  - src: ../../assets/projects/nocturne/entree.jpg
    alt: L'entrée de la première salle, avec son titre, la verrière et la porte vers la salle suivante
  - src: ../../assets/projects/nocturne/rembrandt.jpg
    alt: L'autoportrait de Rembrandt en costume oriental sous son projecteur, avec son cartel au mur
  - src: ../../assets/projects/nocturne/cartel.jpg
    alt: La vue rapprochée d'un tableau de Ziem, avec le texte du cartel posé sur le mur à côté
  - src: ../../assets/projects/nocturne/salle3.jpg
    alt: Le portrait de Sarah Bernhardt par Clairin dans la salle aux murs prune
  - src: ../../assets/projects/nocturne/fin.jpg
    alt: La dernière salle et la frise de six mètres de Pelez, à la fin du parcours
  - src: ../../assets/projects/nocturne/mobile.jpg
    alt: La galerie sur téléphone, avec le parcours en bas de l'écran
featured: true
order: 4
---

<video src="/projects/nocturne/visite.mp4" poster="/projects/nocturne/visite.jpg" width="1280" height="720" controls muted loop playsinline preload="none" style="width: 100%; height: auto; border-radius: 4px;" aria-label="Vidéo : de l'écran d'accueil à la deuxième salle, puis l'ouverture d'un tableau en vue rapprochée"></video>

La page entière est une galerie la nuit. Le scroll ne fait pas défiler un document : il fait avancer une caméra dans une enfilade de quatre salles, de l'icône grecque vers 1500 jusqu'à la frise foraine de Pelez. Chaque œuvre a son projecteur, qui s'intensifie quand on s'en approche.

Les douze tableaux sont de vraies œuvres du Petit Palais, sous licence CC0 (domaine public), téléchargées depuis Paris Musées et vérifiées une par une. Les cartels, en français et en anglais, sont écrits pour le projet.

## Ce qu'il fait

- Une caméra qui suit le scroll avec un amorti, sur une courbe qui ralentit devant chaque tableau et garde son élan dans les portes.
- Un projecteur par œuvre, avec des ombres douces et un faisceau visible. Au survol, le tableau se détache du mur.
- Au clic, la caméra s'approche et décale l'image pour laisser la place au cartel, posé sur le mur.
- La vue suit la souris, ou l'inclinaison du téléphone si elle est autorisée.
- Le passage d'une salle à l'autre s'assombrit un instant, puis le titre de la salle apparaît.

## Détails

- Navigation complète au clavier, compatible avec les lecteurs d'écran, et respect du réglage « réduire les animations ».
- Les images sont chargées salle par salle, en deux tailles, et seules les salles proches de la caméra sont dessinées.
- Ambiance sonore synthétisée en Web Audio, coupée par défaut.
