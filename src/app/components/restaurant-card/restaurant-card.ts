import { Component, input, output } from '@angular/core';
import { StarRating } from "../star-rating/star-rating";
import { Restaurant } from '../../models/restaurant.model';

@Component({
  selector: 'app-restaurant-card',
  imports: [StarRating],
  templateUrl: './restaurant-card.html',
  styleUrl: './restaurant-card.css',
})
export class RestaurantCard {
  public restaurant = input.required<Restaurant>();
  // public restaurants = input.required<Restaurant[]>();

  public restaurantRated = output<{restaurantId: number, newRating: number}>();

  onRatingChanged = (noteRecue: number) => {
    this.restaurantRated.emit({
      restaurantId: this.restaurant().id,
      newRating: noteRecue
    })
  }
}
