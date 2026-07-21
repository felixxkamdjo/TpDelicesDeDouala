import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  public ratedCount = input<number>(0);
  public averageRating = input<number>(0);

  public onNavigateToRegister = output<void>();

  public goToRegister(): void {
    this.onNavigateToRegister.emit()
  }
}
