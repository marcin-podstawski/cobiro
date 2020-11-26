import { Component, Input } from '@angular/core';

import { BlocksSection } from '@model/section/types/blocks';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss']
})
export class BlocksComponent {
  @Input() section!: BlocksSection;

  constructor() { }
}
