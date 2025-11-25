export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureProps {
  id: string;
  badge: string;
  title: string;
  description: string;
  points: { icon: string; text: string }[];
  buttonText: string;
  buttonLink: string;
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
}

export interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export interface TabItem {
  id: string;
  label: string;
}