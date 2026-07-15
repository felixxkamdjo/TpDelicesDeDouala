export interface Restaurant extends Record<string, string | number> {
  id:             number;
  name:           string;
  imageUrl:       string;
  location:       string;
  specialty:      string;
  currentRating:  number;
}

export type PartialRestaurant = Partial<Restaurant>;
