import { Component, OnInit, Input } from '@angular/core';

import { BlocksSection } from '@model/section/types/blocks';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss']
})
export class BlocksComponent implements OnInit {
  @Input() section!: BlocksSection;

  constructor() { }

  ngOnInit(): void {
  }
}
