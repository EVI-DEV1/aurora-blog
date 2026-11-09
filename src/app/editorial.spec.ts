import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { describe, it, expect, beforeEach } from 'vitest';
import { routes } from './app.routes';
import { ArticlePage } from './pages/article';
import { Home } from './pages/home';
import { ReadingList } from './reading-list';
import { articles, filterArticles } from './data/articles';

describe('Fluxos editoriais Aurora', () => {
  beforeEach(() => TestBed.configureTestingModule({ providers: [provideRouter(routes)] }));
  it('atualiza o artigo ao navegar entre ids sem recriar a página', async () => {
    const harness = await RouterTestingHarness.create();
    const first = await harness.navigateByUrl('/artigo/cidades-que-respiram', ArticlePage);
    expect(harness.routeNativeElement?.querySelector('h1')?.textContent).toContain('cidade');
    const second = await harness.navigateByUrl('/artigo/cor-com-intencao', ArticlePage);
    expect(second).toBe(first);
    expect(harness.routeNativeElement?.querySelector('h1')?.textContent).toContain('paleta');
    expect(harness.routeNativeElement?.textContent).not.toContain('Uma cidade começa muito antes');
  });
  it('mostra recuperação para id e caminho inexistentes', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/artigo/nao-existe', ArticlePage);
    expect(harness.routeNativeElement?.querySelector('h1')?.textContent).toContain(
      'não foi escrita',
    );
    await harness.navigateByUrl('/caminho/nao-existe', ArticlePage);
    expect(harness.routeNativeElement?.querySelector('h1')?.textContent).toContain(
      'não foi escrita',
    );
  });
  it('compartilha favoritos entre cartões da home e página de artigo', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/', Home);
    const save = harness.routeNativeElement?.querySelector<HTMLButtonElement>(
      'aurora-story-card button',
    );
    expect(save).toBeTruthy();
    save!.click();
    harness.detectChanges();
    expect(TestBed.inject(ReadingList).has('cidades-que-respiram')).toBe(true);
    await harness.navigateByUrl('/artigo/cidades-que-respiram', ArticlePage);
    const articleButton =
      harness.routeNativeElement?.querySelector<HTMLButtonElement>('.byline button');
    expect(articleButton?.getAttribute('aria-pressed')).toBe('true');
    articleButton!.click();
    harness.detectChanges();
    expect(TestBed.inject(ReadingList).has('cidades-que-respiram')).toBe(false);
  });
  it('combina busca sem acentos, categoria e favoritos sem perder o estado vazio', async () => {
    const harness = await RouterTestingHarness.create();
    const home = await harness.navigateByUrl('/', Home);
    home.query.set('  INTENCAO  ');
    home.category.set('Design');
    home.savedOnly.set(true);
    TestBed.inject(ReadingList).toggle('cor-com-intencao');
    harness.detectChanges();
    expect(home.results().map((x) => x.id)).toEqual(['cor-com-intencao']);
    home.category.set('Tecnologia');
    harness.detectChanges();
    expect(harness.routeNativeElement?.querySelector('.empty')).toBeTruthy();
    home.reset();
    harness.detectChanges();
    expect(home.results()).toHaveLength(6);
  });
  it('mantém ids únicos e todos os artigos completos, com busca por autor', () => {
    expect(new Set(articles.map((x) => x.id)).size).toBe(articles.length);
    expect(
      articles.every((x) => x.paragraphs.length >= 3 && x.paragraphs.every((p) => p.length > 100)),
    ).toBe(true);
    expect(filterArticles('theo', 'Tecnologia').map((x) => x.id)).toEqual([
      'tecnologia-com-tempo',
      'futuro-em-pequena-escala',
    ]);
  });
});
