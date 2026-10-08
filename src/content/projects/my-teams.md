---
title: my_teams
summary: Une messagerie d'équipe client et serveur en C, sur TCP, avec son propre protocole documenté.
year: 2026
kind: École
team: Équipe de 3
stack: [C, TCP, poll(2)]
featured: true
order: 6
---

Un clone de messagerie d'équipe : équipes, canaux, fils de discussion et messages privés. Le serveur gère tous les clients dans un seul processus avec `poll(2)`, sans threads ni `fork`.

## Points clés

- Protocole **MTCP/1.0** rédigé sous forme de RFC : format des trames, commandes, codes de réponse et événements.
- Notifications en temps réel des clients connectés.
- Persistance des données entre deux lancements du serveur.

Dépôt privé (projet Epitech).
