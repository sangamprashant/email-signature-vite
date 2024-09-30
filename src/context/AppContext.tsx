import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { AppContextType, designProps, m_items, SocialLink, SocialLinksState } from "../types";

import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';

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
    ],
  });

  // Design state
  const [design, setDesign] = useState<designProps>({
    signatureStyle: {
      font: "font-sans",
      tempColor: "#e9078b",
      lineSpacing: 1.4,
      fontScale: 4,
      spaceFromEmail: 0,
    },
    images: {
      images: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150",],
      shape: "rounded",
      size: 60,
      position: "start",
    },
    details: {
      label: "full",
      direction: "row",
      separator: "line",
    },
    socialIcons: {
      file: "fill",
      shape: "rounded",
      size: 16,
      spaceBetween: 5,
      colorType: "original",
    },
    decorativeLine: {
      style: 3,
      matchWithTemplateColor: true,
      color: "#BDBDBD",
    },
  });

  const { iconSize } = social_links

  const initialSocial: SocialLink[] = [
    {
      icon: <FacebookTwoToneIcon fontSize={iconSize} />,
      link: "",
      bg: "bg-blue-600",
      label: "Facebook", type: "svg"
    },
    {
      icon: <TwitterIcon fontSize={iconSize} />,
      link: "",
      bg: "bg-blue-400",
      label: "Twitter", type: "svg"
    },
    {
      icon: <LinkedInIcon fontSize={iconSize} />,
      link: "",
      bg: "bg-blue-700",
      label: "LinkedIn", type: "svg"
    },
    {
      icon: <InstagramIcon fontSize={iconSize} />,
      link: "",
      bg: "bg-gradient-to-tr from-pink-500 to-purple-600",
      label: "Instagram",
      type: "svg"
    },
    {
      label: "Facebook",
      bg: "bg-blue-500",
      icon: "https://avatars.githubusercontent.com/u/93257774?v=4",
      link: "",
      type: "image",
    },
  ]

  useEffect(() => {
    setSocial_links((prev) => ({
      ...prev,
      links: [...initialSocial],
    }));
  }, [])

  // Function to handle input change
  const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newLinkValue = e.target.value;

    setSocial_links((prev) => {
      const updatedLinks = prev.links.map((link, i) => {
        if (i === index) {
          return { ...link, link: newLinkValue }; // Update the link at the specific index
        }
        return link;
      });

      return {
        ...prev,
        links: updatedLinks,
      };
    });
  };

  return (
    <AppContext.Provider
      value={{
        menu: { m_item, setM_Item },
        social: { social_links, setSocial_links, addLinks, handleLinkChange },
        design: {
          design,
          handleDesign,
        }
      }}
    >
      {children}
    </AppContext.Provider>
  );

  async function addLinks(data: SocialLink) {
    setSocial_links((prev) => ({
      ...prev,
      links: [...prev.links, data],
    }));
  }

  // Function to update the design state
  function handleDesign(updatedDesign: Partial<designProps>) {
    setDesign((prev) => ({
      ...prev,
      ...updatedDesign,
    }));

  }
}

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};