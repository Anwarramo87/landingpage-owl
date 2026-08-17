export interface Service {
  id: number;
  tag: string;
  title: string;
  icon: string;
  features: string[];
}

export interface Stat {
  id: number;
  label: string;
  value: number;
  suffix: string;
  barPercent: number;
}

export interface ProcessStep {
  id: number;
  step: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
}

export interface TechItem {
  id: number;
  name: string;
  accent?: boolean;
}
