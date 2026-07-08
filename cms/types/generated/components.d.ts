import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsBook extends Struct.ComponentSchema {
  collectionName: 'components_sections_books';
  info: {
    description: 'Book call section with optional form';
    displayName: 'Book';
    icon: 'cursor';
  };
  attributes: {
    ctaHref: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    formFields: Schema.Attribute.Component<'sections.form-field', true>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
    showForm: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    subtitle: Schema.Attribute.Text;
  };
}

export interface SectionsConsulting extends Struct.ComponentSchema {
  collectionName: 'components_sections_consultings';
  info: {
    description: 'Consulting services section';
    displayName: 'Consulting';
    icon: 'briefcase';
  };
  attributes: {
    cards: Schema.Attribute.Component<'sections.consulting-card', true>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
  };
}

export interface SectionsConsultingCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_consulting_cards';
  info: {
    description: 'Card item for consulting section';
    displayName: 'Consulting Card';
    icon: 'briefcase';
  };
  attributes: {
    accentTheme: Schema.Attribute.Enumeration<
      ['yellow', 'green', 'coral', 'slate']
    > &
      Schema.Attribute.DefaultTo<'green'>;
    body: Schema.Attribute.Text;
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    tags: Schema.Attribute.JSON;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsFormField extends Struct.ComponentSchema {
  collectionName: 'components_sections_form_fields';
  info: {
    description: 'Dynamic form field configuration';
    displayName: 'Form Field';
    icon: 'pencil';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    placeholder: Schema.Attribute.String;
    required: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    type: Schema.Attribute.Enumeration<['text', 'email', 'textarea']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'text'>;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    description: 'Hero banner section';
    displayName: 'Hero';
    icon: 'star';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    primaryCtaHref: Schema.Attribute.String;
    primaryCtaText: Schema.Attribute.String;
    secondaryCtaHref: Schema.Attribute.String;
    secondaryCtaText: Schema.Attribute.String;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
    subtitle: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface SectionsResourceCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_resource_cards';
  info: {
    description: 'Resource card item';
    displayName: 'Resource Card';
    icon: 'file';
  };
  attributes: {
    excerpt: Schema.Attribute.Text;
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    tag: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsResources extends Struct.ComponentSchema {
  collectionName: 'components_sections_resources';
  info: {
    description: 'Resources list section';
    displayName: 'Resources';
    icon: 'file';
  };
  attributes: {
    cards: Schema.Attribute.Component<'sections.resource-card', true>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
  };
}

export interface SectionsSectorItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_sector_items';
  info: {
    description: 'Sector card item';
    displayName: 'Sector Item';
    icon: 'grid';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsSectors extends Struct.ComponentSchema {
  collectionName: 'components_sections_sectors';
  info: {
    description: 'Sectors section';
    displayName: 'Sectors';
    icon: 'grid';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    items: Schema.Attribute.Component<'sections.sector-item', true>;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
  };
}

export interface SectionsSolutionCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_solution_cards';
  info: {
    description: 'Card item for solutions section';
    displayName: 'Solution Card';
    icon: 'layout';
  };
  attributes: {
    accentTheme: Schema.Attribute.Enumeration<
      ['yellow', 'green', 'coral', 'slate']
    > &
      Schema.Attribute.DefaultTo<'yellow'>;
    body: Schema.Attribute.Text;
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsSolutions extends Struct.ComponentSchema {
  collectionName: 'components_sections_solutions';
  info: {
    description: 'Innovation studio solutions section';
    displayName: 'Solutions';
    icon: 'apps';
  };
  attributes: {
    cards: Schema.Attribute.Component<'sections.solution-card', true>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    intro: Schema.Attribute.Text;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
  };
}

export interface SharedSectionConfig extends Struct.ComponentSchema {
  collectionName: 'components_shared_section_configs';
  info: {
    description: 'Per-section appearance and behavior settings';
    displayName: 'Section Config';
    icon: 'cog';
  };
  attributes: {
    sectionId: Schema.Attribute.String;
    theme: Schema.Attribute.Enumeration<['white', 'dark', 'teal']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'white'>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: 'SEO metadata for pages';
    displayName: 'SEO';
    icon: 'search';
  };
  attributes: {
    canonicalUrl: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    ogImage: Schema.Attribute.Media<'images'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.book': SectionsBook;
      'sections.consulting': SectionsConsulting;
      'sections.consulting-card': SectionsConsultingCard;
      'sections.form-field': SectionsFormField;
      'sections.hero': SectionsHero;
      'sections.resource-card': SectionsResourceCard;
      'sections.resources': SectionsResources;
      'sections.sector-item': SectionsSectorItem;
      'sections.sectors': SectionsSectors;
      'sections.solution-card': SectionsSolutionCard;
      'sections.solutions': SectionsSolutions;
      'shared.section-config': SharedSectionConfig;
      'shared.seo': SharedSeo;
    }
  }
}
