# sandes3.dev

Portfolio de Sandes Savarimuthu, développeur logiciel et web.

Le site est une pièce sombre éclairée par le curseur. L'accueil est rendu en direct par un path tracer WebGL2 (porté depuis [path-tracer-web](https://github.com/Landry-16/path-tracer-web)) : la lampe suit la souris et l'image reconverge à chaque déplacement. Le reste de la page est éclairé de la même façon, les projets s'illuminent quand la lumière s'en approche.

## Stack

- [Astro](https://astro.build) 5, TypeScript strict, site entièrement statique.
- WebGL2 et GLSL pour le rendu de l'accueil, avec une image fixe de secours si le navigateur ne le permet pas.
- Polices auto-hébergées : Instrument Serif et Geologica.
- Hébergement sur Vercel.

## Démarrer

Node.js 22 recommandé.

```bash
npm install
npm run dev        # serveur de développement sur http://localhost:4321
npm run build      # vérification des types puis build dans dist/
npm run preview    # sert le build
```

## Gérer les projets

Chaque projet est un fichier Markdown dans `src/content/projects/`. L'en-tête décrit le projet, le corps du fichier devient sa page.

```yaml
---
title: Path tracer
summary: Une phrase qui présente le projet.
year: 2026
kind: École            # École, Personnel ou Freelance
team: Équipe Epitech
role: Ce que vous avez fait sur le projet   # optionnel : le rôle de Sandes, affiché sur la carte
stack: [C++17, CMake]
status: Terminé        # ou En cours
repo: https://github.com/...     # absent = dépôt privé, aperçu seulement
demo: https://...                # optionnel
cover: ../../assets/projects/mon-projet/cover.jpg   # optionnel
featured: true         # affiché sur l'accueil
order: 1               # ordre d'affichage, du plus petit au plus grand
visible: true          # false pour masquer le projet partout
---
```

- **Masquer un projet** : `visible: false`.
- **Le mettre en avant sur l'accueil** : `featured: true`. L'accueil montre six projets phares au plus, dans l'ordre de `order`. Un projet privé sans capture (`cover`) n'est pas mis en avant.
- **Carte de projet** : nom, rôle (`role`), technologies, statut, et « code source » si `repo` est renseigné, sinon « dépôt privé ».
- **Ajouter des images** : déposez-les dans `src/assets/projects/<projet>/` et référencez-les dans `cover` ou `gallery`. Elles sont optimisées au build.
- Sans `cover`, une couverture typographique est générée.

## Modèles de démonstration

La section « Modèles de démonstration » de l'accueil montre trois modèles, chacun avec un commerce fictif, et renvoie vers Nacre pour les demandes de site. Aucun site client n'y est affiché : un site client, un témoignage ou un logo ne s'ajoute qu'avec l'accord écrit du client, sous forme d'étude de cas.

Chaque modèle est un vrai site, généré par l'atelier de templates de P-Finder et hébergé ici sous `/templates/<template>/` (`public/templates/`, avec le bandeau « Maquette » et sans indexation). Le contenu fictif de chaque modèle est dans `demo-sites/<template>.json`, la liste dans `src/data/templates.ts`, et les trois modèles de l'accueil dans `homeTemplates`, dans le même fichier. Les noms, adresses et numéros des commerces fictifs ne doivent correspondre à aucun commerce réel.

Pour les reconstruire après une évolution des templates (l'atelier doit avoir ses dépendances installées) :

```bash
PFINDER_SITES_DIR=../PFinder/sites npm run demos   # public/templates/ et les captures src/assets/templates/
```

Après une reconstruction, vérifiez l'absence de tiret cadratin dans `public/templates/` : les templates en contenaient.

## CV

Le CV est le PDF `public/cv-sandes-savarimuthu.pdf` : la page `/cv` en affiche l'image (`src/assets/cv/page-1.png`, à régénérer avec `pdftoppm -r 220 -png public/cv-sandes-savarimuthu.pdf src/assets/cv/page`) et les boutons le téléchargent. `src/data/cv.ts` alimente la section Parcours, en français et en anglais.

Version anglaise sous `/en/` : textes de l'interface dans `src/lib/i18n.ts`, projets traduits dans `src/content/projects-en/` (même nom de fichier que le projet français), liens internes préfixés par `src/middleware.ts`.

## Structure

```text
src/
  components/      sections et cartes
  content/         projets en Markdown
  data/            profil, CV, modèles
  layouts/         gabarits de page
  pages/           accueil, projets, CV, 404
  scripts/         rendu de l'accueil et éclairage au curseur
    tracer/        path tracer WebGL2 et shaders GLSL
demo-sites/        contenu fictif des modèles de sites
scripts/           modèles, génération du CV
```
