import React, { createContext, useContext, useState, ReactNode } from "react";
import { AppContextType, m_items, SocialLinksState } from "../types";

const AppContext = createContext<AppContextType | undefined>(undefined);
export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  //menu
  const [m_item, setM_Item] = useState<m_items>("Details");
  // social links
  const [social_links, setSocial_links] = useState<SocialLinksState>({
    iconSize: "small", 
    iconRadius: "",
    links: [
      {
        label: "Slack",
        bg: "bg-purple-500",
        icon: "",
        link: "https://slack.com",
        type: "svg",
      },
      {
        label: "Facebook",
        bg: "bg-blue-500",
        icon: "https://avatars.githubusercontent.com/u/93257774?v=4",
        link: "https://facebook.com",
        type: "image",
      },
    ],
  });

  return (
    <AppContext.Provider
      value={{
        menu: { m_item, setM_Item },
        social: { social_links, setSocial_links }
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
