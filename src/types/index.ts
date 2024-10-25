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

export type iconSizeProps = "small" | "medium" | "large";

export type SocialLinksState = {
  iconSize: iconSizeProps;
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
  size: 1 | 2 | 3; // 16-32
  spaceBetween: number;
  colorType: "original" | "custom";
  color?: string;
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

export interface WebsiteProps {
  openDrawer: boolean;
  handleCloseDrawer: () => void;
  handleOpenDrawer: () => void;
}

export interface AppContextType {
  website: WebsiteProps;
  menu: Menu;
  social: {
    social_links: SocialLinksState;
    setSocial_links: (links: SocialLinksState) => void;
    addLinks: (d: SocialLink) => void;
    handleLinkChange: (
      e: React.ChangeEvent<HTMLInputElement>,
      index: number
    ) => void;
    handleSocialLinkSize: (s: Partial<SocialLinksState>) => void;
  };
  design: {
    design: designProps;
    handleDesign: (updatedDesign: Partial<designProps>) => void; // Add this here
  };
}
