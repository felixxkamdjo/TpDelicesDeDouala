import { Component, computed, input, output, signal } from '@angular/core';
import { RestaurantCard } from "../restaurant-card/restaurant-card";
import { Restaurant } from '../../models/restaurant.model';
import { RESTAURANTS_MOCK } from '../../data/restaurant.mock';

@Component({
  selector: 'app-restaurant-list',
  imports: [RestaurantCard],
  standalone: true,
  templateUrl: './restaurant-list.html',
  styleUrl: './restaurant-list.css',
})

// type RatingPayload = Record<number, number>;

export class RestaurantList {

  public restaurants = input.required<Restaurant[]>();
  public restaurantRated = output<{restaurantId: number, newRating: number}>();

  public newRating: number = 0;
  public showTopRatedOnly = signal<boolean>(false);

  public ratedCount = computed((): number => this.restaurants().filter(r => r.currentRating > 0).length);
  public displayedRestaurants = computed((): Restaurant[] => this.restaurants().filter(
      r => r.currentRating >=4
  ));

  public onRestaurantRated = (payload: {restaurantId: number, newRating: number}) => {
    this.restaurantRated.emit(payload);
  }

  public toggleFilter = () => {!this.showTopRatedOnly();}
}
