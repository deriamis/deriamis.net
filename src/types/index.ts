export { PageDataType } from './pagedata';

export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface SiteContent {
  hero: HeroProps;
  contact: ContactProps;
  experience: ExperienceProps[];
  projects?: ProjectProps[];
  about: AboutProps;
}

export interface HeroProps {
  name: string;
  namePronunciation?: string;
  namePronunciationAudio?: string;
  specialty: string;
  summary: string;
}

export interface ContactProps {
  email?: string;
  phone?: string;
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
}

export interface ProjectProps {
  name: string;
  summary: string;
  image: string;
  linkPreview?: string;
  linkSource?: string;
  linkDocs?: string;
}

export interface AboutProps {
  description: string | string[];
  image: string;
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}
