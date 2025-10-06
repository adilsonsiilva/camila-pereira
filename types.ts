export interface ProfileData {
  name: string;
  title: string;
  summary: string;
  intro: string;
  avatarUrl: string;
  stats: { label: string; value: string }[];
}

export interface Experience {
  role: string;
  employer: string;
  period: string;
  description: string[];
}

export interface Project {
  title: string;
  role: string;
  description: string;
  imageUrl: string;
  link: string;
  tags?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface Contact {
  email: string;
  phone: string;
  socials: {
    name: string;
    url: string;
  }[];
}

export interface PortfolioData {
  profile: ProfileData;
  experience: Experience[];
  projects: Project[];
  academic: Education[];
  certifications: Education[];
  languages: Language[];
  contact: Contact;
}
