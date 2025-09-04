export type Language = 'en' | 'gr';

export interface Content {
  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    contact: string;
  };
  home: {
    name: string;
    title: string;
    subtitle: string;
    specialties: string;
    cta: string;
    servicesTitle: string;
    services: Service[];
    credibility: string;
  };
  about: {
    title: string;
    greeting: string;
    intro: string;
    experienceTitle: string;
    experience: string[];
    educationTitle: string;
    education: string[];
    languagesTitle: string;
    languages: string;
    resumeButton: string;
  };
  services: {
    title: string;
    intro: string;
    categories: ServiceCategory[];
  };
  portfolio: {
    title: string;
    intro: string;
    projects: PortfolioItem[];
    githubCta: string;
  };
  contact: {
    title:string;
    intro: string;
    email: string;
    linkedin: string;
    github: string;
    formIntro: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSubmit: string;
  };
  footer: {
    copyright: string;
    availability: string;
  };
  announcements: {
    languageChanged: string;
  };
}

export interface Service {
  title: string;
  description: string;
}

export interface ServiceCategory {
  title: string;
  items: string[];
}

export interface PortfolioItem {
  title: string;
  description: string;
}