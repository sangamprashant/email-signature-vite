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

export interface AppContextType {
  menu: Menu;
}
