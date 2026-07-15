# Délices de Douala

Système de notation de restaurants camerounais construit avec Angular - pratique intensive de `input()` et `output()` sur 3 niveaux de composants.

## À propos

Une interface web qui permet de noter de 1 à 5 étoiles les meilleurs restaurants de Douala, avec un compteur en temps réel du nombre d'établissements notés. Projet réalisé dans le cadre de l'**Angular Talent Lab 2026** (cohorte Douala).

Les données sont volontairement ancrées dans le réel : quartiers de Douala (Akwa, Bonapriso, Bonanjo, Bali, Bonamoussadi) et spécialités culinaires camerounaises authentiques (Ndolé, Eru, Koki, Bobolo...).

## Fonctionnalités

- Grille de 6 restaurants avec notation par étoiles cliquables
- Effet hover doré sur les étoiles au survol
- Compteur en temps réel : `★ X / 6 restaurants notés`
- Architecture propagée sur 3 niveaux : `App > RestaurantList > RestaurantCard > StarRating`

## Stack technique

- **Angular** (Standalone Components, zoneless-ready)
- **Signals** pour la gestion d'état (`signal()`, `computed()`)
- **Control flow moderne** : `@if` / `@for` (aucun `*ngIf` / `*ngFor`)
- **input() / output()** - pas de décorateurs `@Input` / `@Output`

## Architecture des composants
App
└── Header               [ratedCount] ↓
└── RestaurantList        (restaurantRated) ↑
└── RestaurantCard × 6
└── StarRating    [currentRating] ↓ / (ratingChanged) ↑

## Lancer le projet

\`\`\`bash
npm install
npm start
\`\`\`

## Démo

[Voir sur Vercel](TON_URL_VERCEL_ICI)

---

