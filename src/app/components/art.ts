import { Component, input } from '@angular/core';
@Component({
  selector: 'aurora-art',
  template:
    '<div class="canvas" [class]="theme()"><span class="disc"></span><span class="ring"></span><span class="leaf one"></span><span class="leaf two"></span><span class="line"></span><span class="caption">AURORA / VISÕES POSSÍVEIS</span></div>',
  styleUrl: './art.css',
  host: { 'aria-hidden': 'true' },
})
export class EditorialArt {
  readonly theme = input('garden');
}
