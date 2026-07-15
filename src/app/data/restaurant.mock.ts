import { Restaurant } from "../models/restaurant.model";

export const RESTAURANTS_MOCK: Restaurant[] = [
  { id: 1, name: 'Le Calao Doré',     location: 'Akwa',       specialty: 'Ndolé aux crevettes',   imageUrl: "assets/images/calao-dore.jpeg", currentRating: 2 },
  { id: 2, name: 'Chez Madame Ngono', location: 'Bonapriso',  specialty: 'Eru aux pieds de bœuf', imageUrl: "assets/images/chez-madame-ngono.jpeg", currentRating: 0 },
  { id: 3, name: 'La Fourchette Camerounaise', location: 'Bonanjo', specialty: 'Poulet DG',       imageUrl: "assets/images/fourchette-camerounaise.jpeg", currentRating: 2 },
  { id: 4, name: 'Saveurs du Wouri',  location: 'Bonamoussadi', specialty: 'Poisson braisé',      imageUrl: "assets/images/saveurs-du-wouri.jpeg", currentRating: 0 },
  { id: 5, name: "L'Akwa Gourmand",   location: 'Akwa',       specialty: 'Bobolo et sauce arachide', imageUrl: "assets/images/akwa-gourmand.jpeg", currentRating: 0 },
  { id: 6, name: 'Le Royal de Bali',  location: 'Bali',       specialty: 'Koki et plantain',      imageUrl: "assets/images/royal-de-bali.jpeg", currentRating: 0 }
];
