import { ResponseImageKey } from "@/lib/firstResponseImages";

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
  serviceAreaGraphic: string;

  seo: {
    metaTitle: string;
    metaDescription: string;
    // ogImage: string;
    // schema: string;
  };

  hero: {
    heading: string;
    paragraph: string;
    photo: { src: ResponseImageKey; alt: string };
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
  carousel: {
    paragraph: string;
    price: string;
    terms: string;
    photo: ResponseImageKey;
  };
};

export type LocationFaq = {
  id: number;
  question: string;
  answer: string;
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
  heroSection: {
    heading: string;
    paragraph: string;
    photo: ResponseImageKey;
  };
  servicesSection: {
    paragraph: string;
  };
  commonIssuesSection: {
    heading: string;
    openingParagraph: string;
    bullets: string[];
    //   photo: string;
  };
  surroundingAreas: {
    openingParagraph: string;
    closingParagraph: string;
    nearByLocations: string[];
  };
  LocationFaqs: LocationFaq[];
};

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  coverImage?: ResponseImageKey;
  coverImageAlt?: string;
  author?: string;
  tags?: string[];
  modified?: string;
}

export interface BlogPostWithHtml extends BlogPost {
  contentHtml: string;
}

export type LocationArrayObject = {
  name: string;
  slug: string;
};

export type County = {
  name: string;
  hero: {
    heading: string;
    paragraph: string;
  };
  services: {
    heading: string;
    paragraph: string;
  };
  locations: {
    heading: string;
    openingParagraph: string;
    closingParagraph: string;
    locationArray: LocationArrayObject[];
  };
  Faqs: LocationFaq[];
};

export type WebsiteTCs = {
  heading: string;
  paragraphOne: string;
  paragraphTwo?: string;
};
