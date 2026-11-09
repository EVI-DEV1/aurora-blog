import { Injectable, signal } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class ReadingList {
  readonly ids = signal<string[]>([]);
  has(id: string) {
    return this.ids().includes(id);
  }
  toggle(id: string) {
    this.ids.update((ids) =>
      ids.includes(id) ? ids.filter((value) => value !== id) : [...ids, id],
    );
  }
}
