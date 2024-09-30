import React from "react";

export type m_items =
  | "Details"
  | "Image"
  | "Social"
  | "Tamplates"
  | "Degins"
  | "Apps";

export interface Menu {
  m_item: m_items;
  setM_Item: (value: m_items) => void;
}

export type SocialLink = {
  label: string;
  bg: string;
  icon: string | React.ReactNode;
  link: string;
  type?: "svg" | "image";
};

export type SocialLinksState = {
  iconSize: "small" | "medium" | "large";
  iconRadius: string;
  links: SocialLink[];
};

export interface SignatureStyleProps {
  font: string;
  tempColor: string;
  fontScale: number;
  lineSpacing: number;
  spaceFromEmail: number;
}

export type ImageProps = "square" | "rounded" | "circle";
export interface TemplateImageProps {
  images: string[];
  shape: ImageProps;
  size: number;
  position: "start" | "center" | "end";
}

export interface detailsPops {
  label: "full" | "intial" | "icons" | "none";
  direction: "row" | "col";
  separator: "line" | "dot" | "square" | "none";
}

export interface socialIconsProps {
  file: "fill" | "outline" | "none";
  shape: "square" | "rounded" | "circle";
  size: 16 | 17; // 16-32
  spaceBetween: 3 | 5 | 7 | 9 | 11 | 13;
  colorType: "original" | "custom";
}

export interface decorativeLineProps {
  style: number;
  matchWithTemplateColor: boolean;
  color: string;
}

export interface designProps {
  signatureStyle: SignatureStyleProps;
  images: TemplateImageProps;
  details: detailsPops;
  socialIcons: socialIconsProps;
  decorativeLine: decorativeLineProps;
}

export interface AppContextType {
  menu: Menu;
  social: {
    social_links: SocialLinksState;
    setSocial_links: (links: SocialLinksState) => void;
    addLinks: (d: SocialLink) => void;
    handleLinkChange: (
      e: React.ChangeEvent<HTMLInputElement>,
      index: number
    ) => void;
  };
  design: {
    design: designProps;
    handleDesign: (updatedDesign: Partial<designProps>) => void; // Add this here
  };
}
