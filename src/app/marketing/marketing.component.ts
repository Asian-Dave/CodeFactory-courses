import { Component } from '@angular/core';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrl: './marketing.component.css'
})

export class MarketingComponent {
  logos: string[] = [
    '/images/logos/partners/adonisjs-original.svg',
    '/images/logos/partners/opencv-plain.svg',
    '/images/logos/partners/polygon-original.svg',
    '/images/logos/partners/redis-plain.svg',
    '/images/logos/partners/shotgrid-original.svg',
    '/images/logos/partners/svelte-original.svg',
    '/images/logos/partners/typo3-original.svg',
    '/images/logos/partners/vscode-plain.svg',
    '/images/logos/partners/xd-plain.svg',

  ];
  get duplicatedLogos() {
    return [...this.logos, ...this.logos];
  }

}



