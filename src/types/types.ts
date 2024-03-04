export interface Tab {
  name: string;
  icon?: string;
  id: string;
  isChildren: boolean;
  parentId: string;
  slug: string;
  icons?: { src: string; w: number }[];
  ["data-depth"]: number;
}
export type SideBarContextType = {
  getMenuItems: (id: string) => Tab[];
};

export interface IMenuList {
  menuItems: Tab[];
  ["data-depth"]: number;
}
