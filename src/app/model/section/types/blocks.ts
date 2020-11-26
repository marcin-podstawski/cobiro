import { Section, SectionData } from '../section';

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
    first: BlocksSectionMemberCard;
    second: BlocksSectionMemberCard;
    third: BlocksSectionMemberCard;
  };
}

export interface BlocksSectionMemberCard {
  imageUrl: {
    w200: string;
    w400: string;
    w1080: string;
    w1920: string;
    w2560: string;
  };

  block: {
    title: string;
    description: string;
    link: string;
    text: string;
  };
}
