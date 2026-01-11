export type Nav = {
  href: string;
  title: string;
};

export type Faq = {
  id: number;
  question: string;
  answer: string;
  category: string;
};

export type Approach = {
  heading: string;
  paragraph: string;
};

export type HelpBullets = {
  lineOne: string;
  lineTwo: string;
};

export type Service = {
  service: string;
  slug: string;

  seo: {
    metaTitle: string;
    metaDescription: string;
    // ogImage: string;
    // schema: string;
  };

  hero: {
    heading: string;
    paragraph: string;
    photo: { src: string; alt: string };
  };

  problemSection: {
    heading: string;
    headingSplit: string;
    paragraphOne: string;
    paragraphTwo: string;
    cards: { graphic: string; title: string }[];
  };

  howSection: {
    heading: string;
    paragraphOne: string;
    paragraphTwo: string;
    bullets: string[];
    closingParagraph: string;
  };

  helpSection: {
    openingParagraph: string;
    bullets: HelpBullets[];
    closingParagraph: string;
  };

  ctaSection: {
    heading: string;
    paragraph: string;
  };

  faqSection: {
    category: string;
    heading: string;
    paragraph: string;
  };
};

export type Location = {
  slug: string;
  location: string;
  county: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
    // ogImage: string;
    // schema: string;
  };
};
