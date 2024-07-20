import { IconType } from 'react-icons';
export type HeroSection = {
  heading: string;
  paragraph: string;
  service: string
  img: string;
};

export type WhatMakeDiff = {
  heading: string;
  content: {
    title: string;
    paragraph: string;
    icon: IconType;
  }[];
};

export type Section = {
  heading: string;
  subheading: string;
  paragraph: string;
  btn: string;
  bgImg?: string;
  img?: string;
};

export type Service = {
  hero_section: HeroSection;
  whatmakediff: WhatMakeDiff;
  section2: Section;
  section31: Section;
  section32: Section;
  methodology: {
    heading: string;
    subheading: string;
    paragraph: string;
    btn: string;
    content: Section[];
  };
};

export type ServicesType = {
  [key: string]: Service;
};
