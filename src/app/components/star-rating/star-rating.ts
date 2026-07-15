import { Component, output, input, signal } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  imports: [],
  templateUrl: './star-rating.html',
  styleUrl: './star-rating.css',
})
export class StarRating {
  public ratingChanged = output<number>();
  public currentRating = input<number>(1);

  public hoveredStar = signal<number>(0);

  public setRating(noteRecue: number): void {
    this.ratingChanged.emit(noteRecue);
  }
}
