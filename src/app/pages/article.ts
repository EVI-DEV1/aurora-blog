import { Component, computed, effect, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { articles, findArticle } from '../data/articles';
import { ReadingList } from '../reading-list';
import { EditorialArt } from '../components/art';
@Component({
  selector: 'aurora-article',
  imports: [RouterLink, EditorialArt],
  templateUrl: './article.html',
  styleUrl: './article.css',
})
export class ArticlePage {
  private readonly route = inject(ActivatedRoute);
  private readonly title = inject(Title);
  private readonly params = toSignal(this.route.paramMap, {
    initialValue: this.route.snapshot.paramMap,
  });
  readonly article = computed(() => findArticle(this.params().get('id')));
  readonly related = computed(() =>
    articles
      .filter(
        (item) => item.id !== this.article()?.id && item.category === this.article()?.category,
      )
      .slice(0, 2),
  );
  readonly reading = inject(ReadingList);
  constructor() {
    effect(() =>
      this.title.setTitle(
        this.article() ? `${this.article()!.title} | Aurora` : 'História não encontrada | Aurora',
      ),
    );
  }
}
