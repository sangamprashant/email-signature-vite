import React, { createContext, useContext, useState, ReactNode } from "react";
import { AppContextType, m_items } from "../types";

const AppContext = createContext<AppContextType | undefined>(undefined);
export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [m_item, setM_Item] = useState<m_items>("Details");

  return (
    <AppContext.Provider
      value={{
        menu: { m_item, setM_Item },
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
