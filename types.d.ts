interface SanityDocument {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityDocument {
  _type: "pageInfo";
  aboutInfo: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  role: string;
  aboutImage: SanityImage;
}

export interface Skill extends SanityDocument {
  _type: "skill";
  name: string;
  skillImage: SanityImage;
}

export interface Project extends SanityDocument {
  _type: "project";
  title: string;
  codeLink: string;
  demoLink: string;
  description: string;
  image: SanityImage;
  technologies: Skill[];
}

export interface SocialMedia extends SanityDocument {
  _type: "social";
  title: string;
  socialLink: string;
}

export interface Timeline extends SanityDocument {
  _type: "timeline";
  responsibilities: string[];
  year: number;
  role: string;
  companyLogo: SanityImage;
  companyName:string
  date: string;
}

export interface TNotification {
  isShown: boolean;
  isSuccessful?: boolean;
  message?: string;
}
