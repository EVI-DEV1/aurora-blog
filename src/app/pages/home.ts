import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { articles, categories, filterArticles } from '../data/articles';
import { ReadingList } from '../reading-list';
import { StoryCard } from '../components/story-card';
@Component({
  selector: 'aurora-home',
  imports: [FormsModule, StoryCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly reading = inject(ReadingList);
  readonly query = signal('');
  readonly category = signal('Todas');
  readonly savedOnly = signal(false);
  readonly categories = categories;
  readonly results = computed(() =>
    filterArticles(this.query(), this.category(), this.savedOnly(), this.reading.ids()),
  );
  readonly featured = articles[0];
  readonly secondary = articles.slice(1, 3);
  readonly browsing = computed(
    () => Boolean(this.query().trim()) || this.category() !== 'Todas' || this.savedOnly(),
  );
  toggleSavedOnly() {
    this.savedOnly.update((value) => !value);
  }
  reset() {
    this.query.set('');
    this.category.set('Todas');
    this.savedOnly.set(false);
  }
}
