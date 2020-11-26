import { Section, SectionData, SectionType } from './section';
import { BlocksSection } from './types/blocks';

export class SectionFactory {
  public static create(sectionData: SectionData): Section | void {
    switch (sectionData.type) {
      case SectionType.BLOCKS:
        return new BlocksSection(sectionData);
      default:
        console.warn(`Cannot recognize section type "${sectionData.type}"`);
        return;
    }
  }
}
