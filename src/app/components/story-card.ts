import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Article } from '../data/articles';
import { ReadingList } from '../reading-list';
import { EditorialArt } from './art';
@Component({
  selector: 'aurora-story-card',
  imports: [RouterLink, EditorialArt],
  templateUrl: './story-card.html',
  styleUrl: './story-card.css',
  host: { '[class.featured]': 'featured()' },
})
export class StoryCard {
  readonly article = input.required<Article>();
  readonly featured = input(false);
  readonly reading = inject(ReadingList);
}
