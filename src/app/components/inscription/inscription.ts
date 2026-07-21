import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './inscription.html',
  styleUrl: './inscription.css',
})
export class Inscription {
  name = signal<string>('');

  private readonly _clients = signal<string[]>([]);
  public readonly clients = this._clients.asReadonly();

  private readonly _indexEdit = signal<number | null>(null);
  public readonly inEdition = computed(() => this._indexEdit() !== null);

  public save(): void {
    const value = this.name().trim();

    if(!value) return;

    const i = this._indexEdit();
    if (i === null) {
      this._clients.update((l) => [...l, value]);
    }
    else {
      this._clients.update((l) =>
        l.map((c, idx) => (idx === i ? value : c))
      );
      this._indexEdit.set(null);
    }
    this.name.set('');
  }

  public edit(i: number): void {
    this.name.set(this.clients()[i]);
    this._indexEdit.set(i);
  }

  public delete(i: number): void {
    if (this._indexEdit() === i) {
      this._indexEdit.set(null);
      this.name.set('');
    }

    this._clients.update((list) => list.filter((_, idx) => idx !== i));
  }
}
