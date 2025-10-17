export type ConfigurableContentElement = string | React.JSX.Element;

export interface ProfileLinkContent {
  readonly icon: ConfigurableContentElement;
  readonly aria: string;
  readonly target: string;
  readonly href: string;
}

export interface ProfileContent {
  readonly name: ConfigurableContentElement;
  readonly position: ConfigurableContentElement;
  readonly tagline: ConfigurableContentElement;
  readonly timezone: string;
  readonly links: readonly ProfileLinkContent[];
  readonly resume_link: string;
  readonly bio: ConfigurableContentElement;
}

export interface EducationContent {
  readonly start_date: ConfigurableContentElement;
  readonly end_date: ConfigurableContentElement;
  readonly gpa: ConfigurableContentElement;
  readonly school: ConfigurableContentElement;
  readonly degree: ConfigurableContentElement;
  readonly points: readonly ConfigurableContentElement[];
}

export interface SkillTagConfig {
  readonly iconClass?: string;
  readonly skillName: string;
}

export interface SkillGroup {
  readonly title: ConfigurableContentElement;
  readonly skills: readonly SkillTagConfig[];
}

export interface WorkExperienceContent {
  readonly start_date: ConfigurableContentElement;
  readonly end_date: ConfigurableContentElement;
  readonly location: ConfigurableContentElement;
  readonly company: ConfigurableContentElement;
  readonly job_title: ConfigurableContentElement;
  readonly points: readonly ConfigurableContentElement[];
  readonly skills: readonly SkillTagConfig[];
}

export interface ProjectContent {
  readonly start_date: ConfigurableContentElement;
  readonly end_date: ConfigurableContentElement;
  readonly title: ConfigurableContentElement;
  readonly demo_link?: string;
  readonly demo_label?: ConfigurableContentElement;
  readonly source_link: string;
  readonly points: readonly ConfigurableContentElement[];
  readonly skills: readonly SkillTagConfig[];
}

export interface ConfigurableContent {
  readonly profile: ProfileContent;
  readonly education: readonly EducationContent[];
  readonly skills: readonly SkillGroup[];
  readonly work_experience: readonly WorkExperienceContent[];
  readonly projects: readonly ProjectContent[];
}
