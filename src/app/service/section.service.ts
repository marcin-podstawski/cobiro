import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { SectionsResponse, Section } from '@model/section/section';
import { SectionFactory } from '@model/section/factory';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor(
    private http: HttpClient,
  ) { }

  getSections(): Observable<Section[]> {
    return this.http.get<SectionsResponse>(`${environment.apiUrl}task/index.json`)
      .pipe(
        map(sectionsResponse => {
          return sectionsResponse.data.flatMap(sectionData => {
            const section = SectionFactory.create(sectionData);

            return section ? section : [];
          });
        })
      );
  }
}
