import { Component } from '@angular/core';

import { SectionService } from '@service/section.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  sections = this.sectionService.getSections();

  constructor(
    private sectionService: SectionService,
  ) {
  }
}
