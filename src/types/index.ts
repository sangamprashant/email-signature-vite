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
  type: "svg" | "image";
};

export type SocialLinksState = {
  iconSize: "small" | "medium" | "large";
  iconRadius: string;
  links: SocialLink[];
};

export interface AppContextType {
  menu: Menu;
  social: {
    social_links: SocialLinksState;
    setSocial_links: (links: SocialLinksState) => void; 
  };
}
