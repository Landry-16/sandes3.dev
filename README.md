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
- **Le mettre en avant sur l'accueil** : `featured: true`. L'accueil est conçu pour sept projets.
- **Ajouter des images** : déposez-les dans `src/assets/projects/<projet>/` et référencez-les dans `cover` ou `gallery`. Elles sont optimisées au build.
- Sans `cover`, une couverture typographique est générée.

## Sites clients P-Finder

Les sites livrés avec P-Finder vivent chacun dans un dépôt de l'organisation GitHub `pfinder-sites`. Au build, `scripts/fetch-client-sites.mjs` liste ces dépôts et publie ceux qui :

1. portent le topic GitHub `portfolio` ;
2. ont une URL de site renseignée dans le champ « Website » du dépôt.

Le nom, le type de commerce et la ville viennent du `site.json` du client, et la photo principale sert d'aperçu. Pour publier ou retirer un client, il suffit d'ajouter ou d'enlever le topic sur GitHub.

Configuration (Vercel > Settings > Environment Variables) :

| Variable | Rôle |
| --- | --- |
| `PFINDER_GITHUB_TOKEN` | Jeton GitHub en lecture seule (fine-grained : Contents et Metadata en lecture) sur l'organisation `pfinder-sites` |
| `PFINDER_GITHUB_ORG` | Optionnel, `pfinder-sites` par défaut |
| `SITE_URL` | URL publique du site |

Sans jeton, la section est simplement masquée. Le workflow `.github/workflows/rebuild.yml` relance un build chaque nuit via le secret `VERCEL_DEPLOY_HOOK`, pour que les nouveaux clients apparaissent sans commit.

## CV

Le contenu du CV est dans `src/data/cv.ts` et `src/data/profile.ts`. Il alimente la section Parcours, la page `/cv` et le PDF.

```bash
npm run build && npm run cv:pdf   # écrit public/cv-sandes-savarimuthu.pdf (Playwright requis)
```

Le numéro de téléphone n'apparaît que dans le PDF.

## Structure

```text
src/
  components/      sections et cartes
  content/         projets en Markdown
  data/            profil, CV, sites clients générés
  layouts/         gabarits de page
  pages/           accueil, projets, CV, 404
  scripts/         rendu de l'accueil et éclairage au curseur
    tracer/        path tracer WebGL2 et shaders GLSL
scripts/           récupération des sites clients, génération du CV
```
