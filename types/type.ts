export type Profile = {
  id: string;
  name: string;
  phone: string;
  email: string;
  profession: string;
  address:string;
  professionBio: string;
  openGraphImage?: string;
  twitterImage?: string;
  metaImage?:string;
  metaDescription?: string;
  welcomeMessage: string;
  primaryImage: string;
  secondaryImage: string;
  socialMedia: SocialMedia[];
  createdAt: Date;
  updatedAt: Date;
};

export type SocialMedia = {
  platform: string;
  link: string;
};

export type Portfolio = {
  id: string;
  title: string;
  desc: string;
  externalLink?: string;
  react: number;
  image: string;
  technology: Technology[];
  createdAt: Date;
  updatedAt: Date;
};


export type Technology = {
  id: string;
  image: string;
  porfolioId: string;
};

export type BlogType = {
  id: number;
  title: string;
  content: string[];
  description: string;
  benefits:string[]
  date:string;
};

export type Gig = {
  id: string;
  orderLink?: string;
  basicId: string;
  standardId: string;
  premiumId: string;
  basic: Package;
  standard: Package;
  premium: Package;
  createdAt: Date;
  updatedAt: Date;
};

export type Package = {
  id: string;
  title: string;
  desc: string;
  price: number;
  features: string[];
};

type Education = {
  id: string;
  degree: string;
  institution: string;
  cgpa: number;
  desc: string;
  startYear: string;
  endYear: string;
  resumeId: string;
};

type Experience = {
  id: string;
  profession: string;
  company: string;
  desc: string;
  technology: string[];
  resumeId: string;
};

  export type Resume = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  education: Education[];
  experience: Experience[];
};


export type Service = {
  title: string;
  features:{subtitle:string, service:string}[]
  
};


export type SkillType = {
  id: string;
  name: string;
  skills: Skill[];
};

 type Skill = {
  id: string;
  name: string;
  desc: string;
  skillImage: string;
  skillTypeId: string;
};

export type Testimonial = {
  id: string;
  name: string;
  authorProfession: string;
  companyName: string;
  projectTitle: string;
  image: String
  platform: string;
  message: string;
  rating: number;
  startDate: Date;
  endDate: Date;
};

