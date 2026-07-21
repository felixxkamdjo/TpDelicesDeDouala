import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { RestaurantList } from "./components/restaurant-list/restaurant-list";
import { Restaurant, PartialRestaurant } from './models/restaurant.model';
import { RESTAURANTS_MOCK } from './data/restaurant.mock';
import { Inscription } from "./components/inscription/inscription";

type Page = 'home' | 'register';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, RestaurantList, Inscription],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App {
  public currentPage  = signal<Page>('home');

  protected readonly title = signal('tp-delices-de-douala');

  public restaurants = signal<Restaurant[]>(RESTAURANTS_MOCK);

  public countRatedRestaurants = computed((): number => {
    return this.restaurants().filter(r => (r.currentRating ?? 0) > 0).length;
  });

  public onRestaurantRated(updatedRestaurant: Restaurant): void {
    console.log('Restaurant noté :', updatedRestaurant.name);

    this.restaurants.update(list =>
      list.map(r => r.id === updatedRestaurant.id ? updatedRestaurant : r)
    );
  }
}
