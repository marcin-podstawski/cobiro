import { Component, Input } from '@angular/core';

import { Card } from '@model/section/types/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() card!: Card;

  get imageBackground(): string {
    return `url(${this.card.imageUrl.w400})`;
  }

  get linkHref(): string {
    return `mailto:${this.card.block.link}`;
  }

  constructor() { }
}
