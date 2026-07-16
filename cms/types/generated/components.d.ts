import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsAuCta extends Struct.ComponentSchema {
  collectionName: 'components_sections_au_ctas';
  info: {
    description: 'About Us closing CTA';
    displayName: 'AU CTA';
    icon: 'cursor';
  };
  attributes: {
    body: Schema.Attribute.Text;
    contactEmail: Schema.Attribute.String;
    contactLabel: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    primaryCtaHref: Schema.Attribute.String;
    primaryCtaText: Schema.Attribute.String;
    secondaryCtaHref: Schema.Attribute.String;
    secondaryCtaText: Schema.Attribute.String;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
  };
}

export interface SectionsAuHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_au_heroes';
  info: {
    description: 'About Us hero';
    displayName: 'AU Hero';
    icon: 'star';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    headingHighlight: Schema.Attribute.String;
    lead: Schema.Attribute.Text;
    primaryCtaHref: Schema.Attribute.String;
    primaryCtaText: Schema.Attribute.String;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
  };
}

export interface SectionsAuMeaning extends Struct.ComponentSchema {
  collectionName: 'components_sections_au_meanings';
  info: {
    description: 'What KB&G stands for';
    displayName: 'AU Meaning';
    icon: 'puzzle';
  };
  attributes: {
    body: Schema.Attribute.Text & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsAuMember extends Struct.ComponentSchema {
  collectionName: 'components_sections_au_members';
  info: {
    description: 'Team member band';
    displayName: 'AU Member';
    icon: 'user';
  };
  attributes: {
    accentTone: Schema.Attribute.Enumeration<
      ['yellow', 'mint', 'coral', 'blue']
    > &
      Schema.Attribute.DefaultTo<'yellow'>;
    bio: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    imageUrl: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    role: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsAuMilestone extends Struct.ComponentSchema {
  collectionName: 'components_sections_au_milestones';
  info: {
    description: 'Single timeline milestone';
    displayName: 'AU Milestone';
    icon: 'calendar';
  };
  attributes: {
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    year: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsAuMission extends Struct.ComponentSchema {
  collectionName: 'components_sections_au_missions';
  info: {
    description: 'About Us mission statement';
    displayName: 'AU Mission';
    icon: 'flag';
  };
  attributes: {
    body: Schema.Attribute.Text & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
  };
}

export interface SectionsAuStory extends Struct.ComponentSchema {
  collectionName: 'components_sections_au_stories';
  info: {
    description: 'About Us origin story';
    displayName: 'AU Story';
    icon: 'book';
  };
  attributes: {
    body: Schema.Attribute.Text & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
  };
}

export interface SectionsAuTeam extends Struct.ComponentSchema {
  collectionName: 'components_sections_au_teams';
  info: {
    description: 'About Us team roster';
    displayName: 'AU Team';
    icon: 'users';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    members: Schema.Attribute.Component<'sections.au-member', true>;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
  };
}

export interface SectionsAuTimeline extends Struct.ComponentSchema {
  collectionName: 'components_sections_au_timelines';
  info: {
    description: 'About Us milestones timeline';
    displayName: 'AU Timeline';
    icon: 'clock';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    items: Schema.Attribute.Component<'sections.au-milestone', true>;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
  };
}

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

export interface SectionsCsAbe extends Struct.ComponentSchema {
  collectionName: 'components_sections_cs_abes';
  info: {
    description: 'Advise-Build-Embed process section';
    displayName: 'CS ABE';
    icon: 'layer';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    lead: Schema.Attribute.Text;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
    steps: Schema.Attribute.Component<'sections.cs-step', true>;
  };
}

export interface SectionsCsCta extends Struct.ComponentSchema {
  collectionName: 'components_sections_cs_ctas';
  info: {
    description: 'Consulting Services closing CTA';
    displayName: 'CS CTA';
    icon: 'cursor';
  };
  attributes: {
    body: Schema.Attribute.Text;
    ctaHref: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
  };
}

export interface SectionsCsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_cs_heroes';
  info: {
    description: 'Consulting Services hero with client logos';
    displayName: 'CS Hero';
    icon: 'star';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    lead: Schema.Attribute.Text;
    logos: Schema.Attribute.Component<'sections.cs-logo', true>;
    primaryCtaHref: Schema.Attribute.String;
    primaryCtaText: Schema.Attribute.String;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
    subtitle: Schema.Attribute.String;
    trustLabel: Schema.Attribute.String;
  };
}

export interface SectionsCsLogo extends Struct.ComponentSchema {
  collectionName: 'components_sections_cs_logos';
  info: {
    description: 'Client logo for Consulting Services hero';
    displayName: 'CS Logo';
    icon: 'picture';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    imageUrl: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsCsOffer extends Struct.ComponentSchema {
  collectionName: 'components_sections_cs_offers';
  info: {
    description: 'Consulting service offer card';
    displayName: 'CS Offer';
    icon: 'layer';
  };
  attributes: {
    audience: Schema.Attribute.Text;
    chips: Schema.Attribute.JSON;
    note: Schema.Attribute.Text;
    result: Schema.Attribute.Text;
    segments: Schema.Attribute.JSON;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    what: Schema.Attribute.Text;
  };
}

export interface SectionsCsQuote extends Struct.ComponentSchema {
  collectionName: 'components_sections_cs_quotes';
  info: {
    description: 'Consulting Services quote band';
    displayName: 'CS Quote';
    icon: 'quote';
  };
  attributes: {
    body: Schema.Attribute.Text & Schema.Attribute.Required;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
  };
}

export interface SectionsCsService extends Struct.ComponentSchema {
  collectionName: 'components_sections_cs_services';
  info: {
    description: 'Consulting service band with offers';
    displayName: 'CS Service';
    icon: 'grid';
  };
  attributes: {
    altBackground: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    imageAlt: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    kicker: Schema.Attribute.String;
    offers: Schema.Attribute.Component<'sections.cs-offer', true>;
    pills: Schema.Attribute.JSON;
    promise: Schema.Attribute.Text;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
    themeTone: Schema.Attribute.Enumeration<
      ['mint', 'yellow', 'pink', 'slate']
    > &
      Schema.Attribute.DefaultTo<'mint'>;
    visualKind: Schema.Attribute.Enumeration<
      ['pricing', 'commercial', 'safety', 'soft-skills', 'image']
    > &
      Schema.Attribute.DefaultTo<'pricing'>;
  };
}

export interface SectionsCsStep extends Struct.ComponentSchema {
  collectionName: 'components_sections_cs_steps';
  info: {
    description: 'Advise-Build-Embed process step';
    displayName: 'CS Step';
    icon: 'bulletList';
  };
  attributes: {
    body: Schema.Attribute.Text;
    number: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface SectionsIsAudience extends Struct.ComponentSchema {
  collectionName: 'components_sections_is_audiences';
  info: {
    description: 'Who the studio serves';
    displayName: 'IS Audience';
    icon: 'user';
  };
  attributes: {
    columns: Schema.Attribute.Component<'sections.is-audience-col', true>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsIsAudienceCol extends Struct.ComponentSchema {
  collectionName: 'components_sections_is_audience_cols';
  info: {
    description: 'Audience column';
    displayName: 'IS Audience Column';
    icon: 'user';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    items: Schema.Attribute.JSON;
    role: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<['default', 'alt']> &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

export interface SectionsIsBrandbar extends Struct.ComponentSchema {
  collectionName: 'components_sections_is_brandbars';
  info: {
    description: 'Product jump links';
    displayName: 'IS Brandbar';
    icon: 'bulletList';
  };
  attributes: {
    chips: Schema.Attribute.Component<'sections.is-chip', true>;
    label: Schema.Attribute.String;
  };
}

export interface SectionsIsBridge extends Struct.ComponentSchema {
  collectionName: 'components_sections_is_bridges';
  info: {
    description: 'Consulting bridge section';
    displayName: 'IS Bridge';
    icon: 'link';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    lead: Schema.Attribute.Text;
    pillars: Schema.Attribute.Component<'sections.is-pillar', true>;
    primaryCtaHref: Schema.Attribute.String;
    primaryCtaText: Schema.Attribute.String;
    secondaryCtaHref: Schema.Attribute.String;
    secondaryCtaText: Schema.Attribute.String;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
  };
}

export interface SectionsIsChip extends Struct.ComponentSchema {
  collectionName: 'components_sections_is_chips';
  info: {
    description: 'Brandbar product chip';
    displayName: 'IS Chip';
    icon: 'bulletList';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    targetId: Schema.Attribute.String;
  };
}

export interface SectionsIsCta extends Struct.ComponentSchema {
  collectionName: 'components_sections_is_ctas';
  info: {
    description: 'Closing CTA';
    displayName: 'IS CTA';
    icon: 'cursor';
  };
  attributes: {
    body: Schema.Attribute.Text & Schema.Attribute.Required;
    primaryCtaHref: Schema.Attribute.String;
    primaryCtaText: Schema.Attribute.String;
    secondaryCtaHref: Schema.Attribute.String;
    secondaryCtaText: Schema.Attribute.String;
  };
}

export interface SectionsIsFounders extends Struct.ComponentSchema {
  collectionName: 'components_sections_is_founders';
  info: {
    description: 'Founders CTA band';
    displayName: 'IS Founders';
    icon: 'user';
  };
  attributes: {
    body: Schema.Attribute.Text;
    cardBody: Schema.Attribute.Text;
    cardCtaHref: Schema.Attribute.String;
    cardCtaText: Schema.Attribute.String;
    cardEyebrow: Schema.Attribute.String;
    cardTitle: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    primaryCtaHref: Schema.Attribute.String;
    primaryCtaText: Schema.Attribute.String;
    roles: Schema.Attribute.JSON;
  };
}

export interface SectionsIsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_is_heroes';
  info: {
    description: 'Innovation Studio hero';
    displayName: 'IS Hero';
    icon: 'star';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    headingHighlight: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    imageAlt: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    lead: Schema.Attribute.Text;
    primaryCtaHref: Schema.Attribute.String;
    primaryCtaText: Schema.Attribute.String;
    secondaryCtaHref: Schema.Attribute.String;
    secondaryCtaText: Schema.Attribute.String;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
    trustLabel: Schema.Attribute.String;
  };
}

export interface SectionsIsPillar extends Struct.ComponentSchema {
  collectionName: 'components_sections_is_pillars';
  info: {
    description: 'Thesis / bridge pillar';
    displayName: 'IS Pillar';
    icon: 'layer';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsIsProductCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_is_product_cards';
  info: {
    description: 'Flagship or foundation product card';
    displayName: 'IS Product Card';
    icon: 'picture';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    body: Schema.Attribute.Text;
    features: Schema.Attribute.JSON;
    flip: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    image: Schema.Attribute.Media<'images'>;
    imageAlt: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    kicker: Schema.Attribute.String;
    kickerTone: Schema.Attribute.Enumeration<['default', 'yellow', 'pink']> &
      Schema.Attribute.DefaultTo<'default'>;
    primaryCtaHref: Schema.Attribute.String;
    primaryCtaText: Schema.Attribute.String;
    proof: Schema.Attribute.String;
    secondaryCtaHref: Schema.Attribute.String;
    secondaryCtaText: Schema.Attribute.String;
    statLabel: Schema.Attribute.Text;
    statValue: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    whoFor: Schema.Attribute.Text;
  };
}

export interface SectionsIsProducts extends Struct.ComponentSchema {
  collectionName: 'components_sections_is_products';
  info: {
    description: 'Flagships or foundations product list';
    displayName: 'IS Products';
    icon: 'apps';
  };
  attributes: {
    cards: Schema.Attribute.Component<'sections.is-product-card', true>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    lead: Schema.Attribute.Text;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
    spineLabel: Schema.Attribute.String;
    spineYear: Schema.Attribute.String;
  };
}

export interface SectionsIsThesis extends Struct.ComponentSchema {
  collectionName: 'components_sections_is_theses';
  info: {
    description: 'Studio thesis + pillars';
    displayName: 'IS Thesis';
    icon: 'layer';
  };
  attributes: {
    body: Schema.Attribute.Text;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    lead: Schema.Attribute.Text;
    pillars: Schema.Attribute.Component<'sections.is-pillar', true>;
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

export interface SectionsVaAudience extends Struct.ComponentSchema {
  collectionName: 'components_sections_va_audiences';
  info: {
    description: "Who it's for section";
    displayName: 'VA Audience';
    icon: 'user';
  };
  attributes: {
    cards: Schema.Attribute.Component<'sections.va-audience-card', true>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    kicker: Schema.Attribute.String;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
  };
}

export interface SectionsVaAudienceCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_va_audience_cards';
  info: {
    description: "Who it's for card";
    displayName: 'VA Audience Card';
    icon: 'user';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsVaBuild extends Struct.ComponentSchema {
  collectionName: 'components_sections_va_builds';
  info: {
    description: 'What we build section';
    displayName: 'VA Build';
    icon: 'picture';
  };
  attributes: {
    cards: Schema.Attribute.Component<'sections.va-build-card', true>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    kicker: Schema.Attribute.String;
    promise: Schema.Attribute.Text;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
  };
}

export interface SectionsVaBuildCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_va_build_cards';
  info: {
    description: 'Vision AI capability card';
    displayName: 'VA Build Card';
    icon: 'picture';
  };
  attributes: {
    body: Schema.Attribute.Text;
    icon: Schema.Attribute.Enumeration<['safety', 'count', 'brand', 'photo']> &
      Schema.Attribute.DefaultTo<'safety'>;
    image: Schema.Attribute.Media<'images'>;
    imageAlt: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsVaCta extends Struct.ComponentSchema {
  collectionName: 'components_sections_va_ctas';
  info: {
    description: 'Vision AI closing CTA';
    displayName: 'VA CTA';
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

export interface SectionsVaExampleCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_va_example_cards';
  info: {
    description: 'Vision AI example / use-case card';
    displayName: 'VA Example Card';
    icon: 'layer';
  };
  attributes: {
    accentTheme: Schema.Attribute.Enumeration<
      ['coral', 'yellow', 'blue', 'mint']
    > &
      Schema.Attribute.DefaultTo<'mint'>;
    body: Schema.Attribute.Text;
    bullets: Schema.Attribute.JSON;
    forLabel: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsVaExamples extends Struct.ComponentSchema {
  collectionName: 'components_sections_va_examples';
  info: {
    description: 'Vision AI examples range';
    displayName: 'VA Examples';
    icon: 'apps';
  };
  attributes: {
    cards: Schema.Attribute.Component<'sections.va-example-card', true>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    kicker: Schema.Attribute.String;
    promise: Schema.Attribute.Text;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
  };
}

export interface SectionsVaFaq extends Struct.ComponentSchema {
  collectionName: 'components_sections_va_faqs';
  info: {
    description: 'Vision AI FAQ';
    displayName: 'VA FAQ';
    icon: 'question';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    items: Schema.Attribute.Component<'sections.faq-item', true>;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
  };
}

export interface SectionsVaHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_va_heroes';
  info: {
    description: 'Vision AI hero';
    displayName: 'VA Hero';
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

export interface SectionsVaInsight extends Struct.ComponentSchema {
  collectionName: 'components_sections_va_insights';
  info: {
    description: 'Vision AI domain-shift insight';
    displayName: 'VA Insight';
    icon: 'lightbulb';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    kicker: Schema.Attribute.String;
    promise: Schema.Attribute.Text;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
  };
}

export interface SectionsVaLens extends Struct.ComponentSchema {
  collectionName: 'components_sections_va_lenses';
  info: {
    description: 'Founder lens section';
    displayName: 'VA Lens';
    icon: 'eye';
  };
  attributes: {
    cards: Schema.Attribute.Component<'sections.va-lens-card', true>;
    footnote: Schema.Attribute.Text;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    kicker: Schema.Attribute.String;
    promise: Schema.Attribute.Text;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
  };
}

export interface SectionsVaLensCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_va_lens_cards';
  info: {
    description: 'Founder lens decision card';
    displayName: 'VA Lens Card';
    icon: 'bulletList';
  };
  attributes: {
    accentTheme: Schema.Attribute.Enumeration<
      ['mint', 'slate', 'yellow', 'coral', 'blue']
    > &
      Schema.Attribute.DefaultTo<'mint'>;
    bullets: Schema.Attribute.JSON;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsVaQuote extends Struct.ComponentSchema {
  collectionName: 'components_sections_va_quotes';
  info: {
    description: 'Vision AI quote band';
    displayName: 'VA Quote';
    icon: 'quote';
  };
  attributes: {
    attr: Schema.Attribute.String;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SectionsVaWorkflow extends Struct.ComponentSchema {
  collectionName: 'components_sections_va_workflows';
  info: {
    description: 'Vision AI process steps';
    displayName: 'VA Workflow';
    icon: 'layer';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
    steps: Schema.Attribute.Component<'sections.va-workflow-step', true>;
    subtitle: Schema.Attribute.Text;
  };
}

export interface SectionsVaWorkflowStep extends Struct.ComponentSchema {
  collectionName: 'components_sections_va_workflow_steps';
  info: {
    description: 'Vision AI process step';
    displayName: 'VA Workflow Step';
    icon: 'layer';
  };
  attributes: {
    body: Schema.Attribute.Text;
    num: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
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
      'sections.au-cta': SectionsAuCta;
      'sections.au-hero': SectionsAuHero;
      'sections.au-meaning': SectionsAuMeaning;
      'sections.au-member': SectionsAuMember;
      'sections.au-milestone': SectionsAuMilestone;
      'sections.au-mission': SectionsAuMission;
      'sections.au-story': SectionsAuStory;
      'sections.au-team': SectionsAuTeam;
      'sections.au-timeline': SectionsAuTimeline;
      'sections.book': SectionsBook;
      'sections.consulting': SectionsConsulting;
      'sections.consulting-card': SectionsConsultingCard;
      'sections.cs-abe': SectionsCsAbe;
      'sections.cs-cta': SectionsCsCta;
      'sections.cs-hero': SectionsCsHero;
      'sections.cs-logo': SectionsCsLogo;
      'sections.cs-offer': SectionsCsOffer;
      'sections.cs-quote': SectionsCsQuote;
      'sections.cs-service': SectionsCsService;
      'sections.cs-step': SectionsCsStep;
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
      'sections.is-audience': SectionsIsAudience;
      'sections.is-audience-col': SectionsIsAudienceCol;
      'sections.is-brandbar': SectionsIsBrandbar;
      'sections.is-bridge': SectionsIsBridge;
      'sections.is-chip': SectionsIsChip;
      'sections.is-cta': SectionsIsCta;
      'sections.is-founders': SectionsIsFounders;
      'sections.is-hero': SectionsIsHero;
      'sections.is-pillar': SectionsIsPillar;
      'sections.is-product-card': SectionsIsProductCard;
      'sections.is-products': SectionsIsProducts;
      'sections.is-thesis': SectionsIsThesis;
      'sections.resource-card': SectionsResourceCard;
      'sections.resources': SectionsResources;
      'sections.sector-item': SectionsSectorItem;
      'sections.sectors': SectionsSectors;
      'sections.solution-card': SectionsSolutionCard;
      'sections.solutions': SectionsSolutions;
      'sections.va-audience': SectionsVaAudience;
      'sections.va-audience-card': SectionsVaAudienceCard;
      'sections.va-build': SectionsVaBuild;
      'sections.va-build-card': SectionsVaBuildCard;
      'sections.va-cta': SectionsVaCta;
      'sections.va-example-card': SectionsVaExampleCard;
      'sections.va-examples': SectionsVaExamples;
      'sections.va-faq': SectionsVaFaq;
      'sections.va-hero': SectionsVaHero;
      'sections.va-insight': SectionsVaInsight;
      'sections.va-lens': SectionsVaLens;
      'sections.va-lens-card': SectionsVaLensCard;
      'sections.va-quote': SectionsVaQuote;
      'sections.va-workflow': SectionsVaWorkflow;
      'sections.va-workflow-step': SectionsVaWorkflowStep;
      'shared.section-config': SharedSectionConfig;
      'shared.seo': SharedSeo;
    }
  }
}
