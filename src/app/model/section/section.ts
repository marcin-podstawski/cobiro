export abstract class Section implements SectionData {
  id: string;
  type: SectionType;
  attributes: any;

  constructor(sectionData: SectionData) {
    this.id = sectionData.id;
    this.type = sectionData.type;
  }
}

export enum SectionType {
  BLOCKS = 'blocks',
}

export interface SectionsResponse {
  data: SectionData[];
}

export interface SectionData {
  id: string;
  type: SectionType;
  attributes: any;
}
