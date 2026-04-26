export type Project = {
  title: string;
  subtitle: string;
  meta: string;
  year: string;
  impact: string;
  desc: string;
  tags: string[];
};

export type TimelineItem = {
  period: string;
  role: string;
  company: string;
  summary: string;
};

export type StatItem = {
  value: string;
  label: string;
};

export type NavItem = {
  id: string;
  label: string;
};

export type SkillCategory = {
  category: string;
  items: string;
};
