import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type SidebarItemsType = {
  href: string;
  title: string;
  icon: IconDefinition;
  children: SidebarItemsType[];
  badge?: string;
};
