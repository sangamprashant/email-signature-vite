import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { AppContextType, appPartControlsProps, designProps, m_items, SocialLink, SocialLinksState } from "../types";

import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';

const AppContext = createContext<AppContextType | undefined>(undefined);
export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // -----------------------------------
  // for website only
  const [m_item, setM_Item] = useState<m_items>("Apps");
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)
  const [appPartControls, setAppPartControls] = useState<appPartControlsProps>({
    mouseInCode: 0,
    selectedCode: 0,
    selectData: []
  })
  // -----------------------------------
  //menu
  // social links
  const [social_links, setSocial_links] = useState<SocialLinksState>({
    iconSize: "small",
    iconRadius: "",
    links: [],
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
      size: 1,
      spaceBetween: 5,
      colorType: "original",
      color: "#BDBDBD"
    },
    decorativeLine: {
      style: 3,
      matchWithTemplateColor: false,
      color: "#BDBDBD",
    },
  });

  // app part 
  const [appContent, setAppContent] = useState({
  })

  const { iconSize } = social_links

  const initialSocial: SocialLink[] = [
    {
      icon: <FacebookTwoToneIcon fontSize={iconSize} />,
      link: "https://webapp.wisestamp.com/editor",
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
      link: "https://github.com/sangamprashant",
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
        // ----------------------------
        // for website only
        website: {
          openDrawer, handleCloseDrawer, handleOpenDrawer, appPartControls, setAppPartControls
        },
        // ----------------------------
        // for content
        menu: { m_item, setM_Item },
        social: { social_links, setSocial_links, addLinks, handleLinkChange, handleSocialLinkSize },
        design: {
          design,
          handleDesign,
        },
        // appContent:{
        //   signatureStyle,set
        // }
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

  async function handleSocialLinkSize(s: Partial<SocialLinksState>) {
    console.log(s)
    setSocial_links((prev) => ({
      ...prev,
      ...s
    }));
  }

  async function handleCloseDrawer() {
    setOpenDrawer(false);
  }

  async function handleOpenDrawer(code: number) {
    setOpenDrawer(true);
    setAppPartControls((prev) => ({
      ...prev,
      selectedCode: code
    }))
  };

}

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};