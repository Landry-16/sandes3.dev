---
title: Power AD
summary: Un outil de gestion Active Directory pensé pour les hôpitaux, plus clair et plus rapide que la console ADUC.
year: 2025
kind: Personnel
team: Solo
stack: [PowerShell, C#, WPF, .NET 8]
status: En cours
featured: true
order: 5
---

Destiné aux hôpitaux, dont les équipes gèrent les comptes et les groupes Active Directory avec la console ADUC, lente et peu adaptée aux opérations en masse. Power AD propose une interface moderne pour rechercher, comparer et gérer les groupes.

## Architecture

- Un moteur PowerShell modulaire : configuration, journalisation, abstraction de l'Active Directory, validation des données.
- Une interface WPF en Material Design, avec fenêtres de comparaison et de réglages.
- Comparaison des groupes entre utilisateurs pour repérer rapidement les droits manquants.

Projet en cours, dépôt privé.
