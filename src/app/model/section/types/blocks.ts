import { Section, SectionData } from '../section';
import { Card } from './card';

export class BlocksSection extends Section {
  attributes: BlocksSectionAttributes;

  constructor(sectionData: SectionData) {
    super(sectionData);

    this.attributes = sectionData.attributes;
  }
}

export interface BlocksSectionAttributes {
  title: string;
  memberCards: {
    first: Card;
    second: Card;
    third: Card;
  };
}
