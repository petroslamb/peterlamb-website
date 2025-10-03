export type Language = 'en' | 'gr';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  content: string;
}

export interface Content {
  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    contact: string;
    blog: string;
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
    skillsTitle: string;
    skills: SkillCategory[];
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
    readCaseStudies: string;
    backToServices: string;
  };
  portfolio: {
    title: string;
    intro: string;
    projects: PortfolioItem[];
    githubCta: string;
    readCaseStudy: string;
    backToPortfolio: string;
    technologiesUsed: string;
    liveDemo: string;
    viewOnGithub: string;
  };
  contact: {
    title:string;
    intro: string;
    detailsTitle: string;
    email: string;
    linkedin: string;
    github: string;
    formIntro: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSubmit: string;
  };
  blog: {
    title: string;
    intro: string;
    readMore: string;
    backToBlog: string;
    postedOn: string;
    prevPage: string;
    nextPage: string;
    searchPlaceholder: string;
    noResults: string;
  };
  footer: {
    copyright: string;
    availability: string;
  };
  announcements: {
    languageChanged: string;
  };
  ariaLabels: {
    mainNav: string;
    socialNav: string;
    switchToEnglish: string;
    switchToGreek: string;
  };
}

export interface Service {
  title: string;
  description: string;
  slug: string;
}

export interface ServiceCaseStudy {
  company: string;
  challenge: string;
  solution: string[];
  technologies: string[];
}

export interface ServiceCategory {
  title: string;
  slug: string;
  intro: string;
  businessProse: string;
  items: string[];
  caseStudies: ServiceCaseStudy[];
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface PortfolioItem {
  slug: string;
  title: string;
  description: string;
  content: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
}