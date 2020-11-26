import { Component, Input } from '@angular/core';

import { SectionType } from '@model/section/section';
import { Section } from '@model/section/section';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent {
  @Input() sections: Section[] = [];

  SectionType = SectionType;

  constructor() { }
}
