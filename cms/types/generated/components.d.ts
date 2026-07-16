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

export interface SectionsCwAdopt extends Struct.ComponentSchema {
  collectionName: 'components_sections_cw_adopts';
  info: {
    description: 'Canary Waves adoption benefits section';
    displayName: 'CW Adopt';
    icon: 'check';
  };
  attributes: {
    cards: Schema.Attribute.Component<'sections.cw-adopt-card', true>;
    footnote: Schema.Attribute.Text;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    kicker: Schema.Attribute.String;
    promise: Schema.Attribute.Text;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
  };
}

export interface SectionsCwAdoptCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_cw_adopt_cards';
  info: {
    description: 'Adoption benefit card for Canary Waves';
    displayName: 'CW Adopt Card';
    icon: 'check';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsCwCta extends Struct.ComponentSchema {
  collectionName: 'components_sections_cw_ctas';
  info: {
    description: 'Canary Waves closing call-to-action';
    displayName: 'CW CTA';
    icon: 'cursor';
  };
  attributes: {
    body: Schema.Attribute.Text;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    primaryCtaHref: Schema.Attribute.String;
    primaryCtaText: Schema.Attribute.String;
    secondaryCtaHref: Schema.Attribute.String;
    secondaryCtaText: Schema.Attribute.String;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
  };
}

export interface SectionsCwCulture extends Struct.ComponentSchema {
  collectionName: 'components_sections_cw_cultures';
  info: {
    description: 'Canary Waves communication culture section';
    displayName: 'CW Culture';
    icon: 'discuss';
  };
  attributes: {
    cards: Schema.Attribute.Component<'sections.cw-culture-card', true>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    kicker: Schema.Attribute.String;
    promise: Schema.Attribute.Text;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
  };
}

export interface SectionsCwCultureCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_cw_culture_cards';
  info: {
    description: 'Culture card for Canary Waves communication section';
    displayName: 'CW Culture Card';
    icon: 'discuss';
  };
  attributes: {
    body: Schema.Attribute.Text;
    icon: Schema.Attribute.Enumeration<['radio', 'tone', 'network']> &
      Schema.Attribute.DefaultTo<'radio'>;
    image: Schema.Attribute.Media<'images'>;
    imageAlt: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsCwFaq extends Struct.ComponentSchema {
  collectionName: 'components_sections_cw_faqs';
  info: {
    description: 'Canary Waves FAQ section';
    displayName: 'CW FAQ';
    icon: 'question';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    items: Schema.Attribute.Component<'sections.faq-item', true>;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
  };
}

export interface SectionsCwGapItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_cw_gap_items';
  info: {
    description: 'Gap strip item for Canary Waves insight section';
    displayName: 'CW Gap Item';
    icon: 'minus';
  };
  attributes: {
    num: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    until: Schema.Attribute.String;
  };
}

export interface SectionsCwHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_cw_heroes';
  info: {
    description: 'Canary Waves hero section';
    displayName: 'CW Hero';
    icon: 'star';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    imageAlt: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    lead: Schema.Attribute.Text;
    primaryCtaHref: Schema.Attribute.String;
    primaryCtaText: Schema.Attribute.String;
    secondaryCtaHref: Schema.Attribute.String;
    secondaryCtaText: Schema.Attribute.String;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
    subtitle: Schema.Attribute.Text;
  };
}

export interface SectionsCwInsight extends Struct.ComponentSchema {
  collectionName: 'components_sections_cw_insights';
  info: {
    description: 'Canary Waves insight section with gap strip';
    displayName: 'CW Insight';
    icon: 'lightbulb';
  };
  attributes: {
    gapItems: Schema.Attribute.Component<'sections.cw-gap-item', true>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    imageAlt: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    kicker: Schema.Attribute.String;
    promise: Schema.Attribute.Text;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
  };
}

export interface SectionsCwIssueCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_cw_issue_cards';
  info: {
    description: 'Issue card for Canary Waves haulage section';
    displayName: 'CW Issue Card';
    icon: 'exclamation';
  };
  attributes: {
    accentTheme: Schema.Attribute.Enumeration<['coral', 'yellow']> &
      Schema.Attribute.DefaultTo<'yellow'>;
    body: Schema.Attribute.Text;
    bullets: Schema.Attribute.JSON;
    forLabel: Schema.Attribute.String;
    quote: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsCwIssues extends Struct.ComponentSchema {
  collectionName: 'components_sections_cw_issues';
  info: {
    description: 'Canary Waves haulage issues section';
    displayName: 'CW Issues';
    icon: 'exclamation';
  };
  attributes: {
    cards: Schema.Attribute.Component<'sections.cw-issue-card', true>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    kicker: Schema.Attribute.String;
    promise: Schema.Attribute.Text;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
  };
}

export interface SectionsCwPills extends Struct.ComponentSchema {
  collectionName: 'components_sections_cw_pills';
  info: {
    description: 'Canary Waves capability pills band';
    displayName: 'CW Pills';
    icon: 'bulletList';
  };
  attributes: {
    items: Schema.Attribute.JSON;
    label: Schema.Attribute.String;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
  };
}

export interface SectionsCwQuote extends Struct.ComponentSchema {
  collectionName: 'components_sections_cw_quotes';
  info: {
    description: 'Canary Waves quote band';
    displayName: 'CW Quote';
    icon: 'quote';
  };
  attributes: {
    attr: Schema.Attribute.String;
    footnote: Schema.Attribute.Text;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SectionsCwStatItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_cw_stat_items';
  info: {
    description: 'Statistic block for Canary Waves stats band';
    displayName: 'CW Stat Item';
    icon: 'chartBubble';
  };
  attributes: {
    label: Schema.Attribute.Text & Schema.Attribute.Required;
    source: Schema.Attribute.String;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsCwStats extends Struct.ComponentSchema {
  collectionName: 'components_sections_cw_stats';
  info: {
    description: 'Canary Waves statistics band';
    displayName: 'CW Stats';
    icon: 'chartBubble';
  };
  attributes: {
    items: Schema.Attribute.Component<'sections.cw-stat-item', true>;
    label: Schema.Attribute.String;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
  };
}

export interface SectionsCwWorkflow extends Struct.ComponentSchema {
  collectionName: 'components_sections_cw_workflows';
  info: {
    description: 'Canary Waves workflow steps section';
    displayName: 'CW Workflow';
    icon: 'layer';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
    steps: Schema.Attribute.Component<'sections.cw-workflow-step', true>;
    subtitle: Schema.Attribute.Text;
  };
}

export interface SectionsCwWorkflowStep extends Struct.ComponentSchema {
  collectionName: 'components_sections_cw_workflow_steps';
  info: {
    description: 'Workflow step for Canary Waves process section';
    displayName: 'CW Workflow Step';
    icon: 'layer';
  };
  attributes: {
    body: Schema.Attribute.Text;
    num: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_faq_items';
  info: {
    description: 'Individual FAQ entry';
    displayName: 'FAQ Item';
    icon: 'question';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
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
        maxLength: 320;
      }>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 120;
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
      'sections.cw-adopt': SectionsCwAdopt;
      'sections.cw-adopt-card': SectionsCwAdoptCard;
      'sections.cw-cta': SectionsCwCta;
      'sections.cw-culture': SectionsCwCulture;
      'sections.cw-culture-card': SectionsCwCultureCard;
      'sections.cw-faq': SectionsCwFaq;
      'sections.cw-gap-item': SectionsCwGapItem;
      'sections.cw-hero': SectionsCwHero;
      'sections.cw-insight': SectionsCwInsight;
      'sections.cw-issue-card': SectionsCwIssueCard;
      'sections.cw-issues': SectionsCwIssues;
      'sections.cw-pills': SectionsCwPills;
      'sections.cw-quote': SectionsCwQuote;
      'sections.cw-stat-item': SectionsCwStatItem;
      'sections.cw-stats': SectionsCwStats;
      'sections.cw-workflow': SectionsCwWorkflow;
      'sections.cw-workflow-step': SectionsCwWorkflowStep;
      'sections.faq-item': SectionsFaqItem;
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
