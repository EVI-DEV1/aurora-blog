import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'aurora-about',
  imports: [RouterLink],
  template:
    '<section class="about"><p class="eyebrow">SOBRE A AURORA</p><h1>Curiosidade é<br>um jeito de estar no mundo.</h1><p>Aurora é uma revista editorial imaginária sobre design, tecnologia e cultura. Um espaço para exercitar perguntas e construir interfaces que respeitam o tempo de quem lê.</p><p>Este blog foi criado como projeto de estudo da Formação Angular Developer da DIO. Os autores e os artigos são fictícios; os textos e as ilustrações geométricas foram criados para a demonstração.</p><p>Você pode explorar seis histórias, buscar por assunto, filtrar categorias e guardar favoritos durante a sessão. Os favoritos não persistem depois de recarregar a página. Não há cadastro, newsletter nem coleta de dados.</p><a routerLink="/">Explorar a edição ↗</a></section>',
  styles:
    '.about{max-width:760px;margin:70px auto 100px}.eyebrow{font-size:10px;letter-spacing:2px;color:var(--rust)}h1{font-family:var(--serif);font-size:clamp(40px,5vw,64px);font-weight:400;line-height:1.1}p:not(.eyebrow){font-size:17px;line-height:1.9;color:var(--muted)}a{display:inline-block;margin-top:20px;border-bottom:1px solid var(--green);color:var(--green);padding-bottom:6px;text-decoration:none}',
})
export class About {}
