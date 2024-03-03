import { ReactNode, createContext, useContext } from "react";
import { tabs } from "../data";

export interface Tab {
  name: string;
  icon?: string;
  id: string;
  isChildren: boolean;
  parentId: string;
  slug: string;
  ["data-depth"]: number;
}
export type SideBarContextType = {
  getMenuItems: (id: string) => Tab[];
};

export const SideBarContext = createContext<SideBarContextType | null>(null);

export const SideBarProvider = ({ children }: { children: ReactNode }) => {
  function strutureTabs() {
    let obj: { [key: string]: any } = {};
    tabs.forEach((tab) => {
      obj[tab.parentId ?? "root"] ||= [];
      obj[tab.parentId ?? "root"].push(tab);
    });
    return obj;
  }

  const getMenuItems = (parentId: string) => {
    return strutureTabs()[parentId];
  };
  return (
    <SideBarContext.Provider value={{ getMenuItems }}>
      {children}
    </SideBarContext.Provider>
  );
};

export const useSideBarData = () =>
  useContext(SideBarContext) as SideBarContextType;
