export type ConfigurableContentElement = string | React.JSX.Element;

export type ProfileLinkContent = {
  icon: ConfigurableContentElement;
  title: string;
  target: string;
  href: string;
};

export type ProfileContent = {
  name: ConfigurableContentElement;
  position: ConfigurableContentElement;
  tagline: ConfigurableContentElement;
  timezone: ConfigurableContentElement;
  links: ProfileLinkContent[];
  resume_link: string;
  bio: ConfigurableContentElement;
};

export type EducationContent = {
  start_date: ConfigurableContentElement;
  end_date: ConfigurableContentElement;
  gpa: ConfigurableContentElement;
  school: ConfigurableContentElement;
  degree: ConfigurableContentElement;
  points: ConfigurableContentElement[];
};

export type SkillTagConfig = {
  iconClass: string;
  skillName: string;
};

export type SkillGroup = {
  title: ConfigurableContentElement;
  skills: SkillTagConfig[];
};

export type WorkExperienceContent = {
  start_date: ConfigurableContentElement;
  end_date: ConfigurableContentElement;
  location: ConfigurableContentElement;
  company: ConfigurableContentElement;
  job_title: ConfigurableContentElement;
  points: Array<ConfigurableContentElement>;
  skills: Array<SkillTagConfig>;
};

export type ConfigurableContent = {
  profile: ProfileContent;
  education: EducationContent[];
  skills: SkillGroup[];
  work_experience: WorkExperienceContent[];
};
