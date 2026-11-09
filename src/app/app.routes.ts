import { Routes } from '@angular/router';
import { Home } from './pages/home';
import { ArticlePage } from './pages/article';
import { About } from './pages/about';
export const routes: Routes = [
  { path: '', component: Home, title: 'Aurora — ideias para um amanhã mais humano' },
  { path: 'artigo/:id', component: ArticlePage },
  { path: 'sobre', component: About, title: 'Sobre a Aurora' },
  { path: '**', component: ArticlePage, title: 'História não encontrada | Aurora' },
];
