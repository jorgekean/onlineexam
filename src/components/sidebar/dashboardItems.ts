import { SidebarItemsType } from "../../types/sidebar";

import {
  Bell,
  BookOpen,
  Calendar,
  CheckSquare,
  Grid,
  Heart,
  Layout,
  List,
  PieChart,
  Sliders,
  MapPin,
  Users,
  Share,
} from "react-feather";

import { faUsers, faHome, faBook, faGear, faQuestion, faBarChart, faBell, faFolder } from "@fortawesome/free-solid-svg-icons";
import { myAppConfig } from "../../config";
// export const baseURL: string = "/onlineexam";

const pagesSection = [
  {
    href: `/${myAppConfig.baseURL}/dashboard`,
    icon: faHome,
    title: "Dashboards"
  },
  {
    href: `/${myAppConfig.baseURL}/exams`,
    icon: faBook,
    title: "Exams",
  },
  {
    href: `/${myAppConfig.baseURL}/candidates`,
    icon: faUsers,
    title: "Candidates",
  },
  {
    href: `/${myAppConfig.baseURL}/questions`,
    icon: faQuestion,
    title: "Questions",
  },
  {
    href: `/${myAppConfig.baseURL}/statistics`,
    icon: faBarChart,
    title: "Statistics",
  },
  {
    href: `/${myAppConfig.baseURL}/notifications`,
    icon: faBell,
    title: "Notifications",
  }
] as SidebarItemsType[];

const settingsPagesSection = [
  {
    href: `/${myAppConfig.baseURL}/settings/sections`,
    icon: faFolder,
    title: "Sections"
  },
  {
    href: `/${myAppConfig.baseURL}/settings/groups`,
    icon: faUsers,
    title: "Groups",
  }
] as SidebarItemsType[];

const navItems = [
  {
    title: "",
    pages: pagesSection,
  },
  {
    title: "Settings",
    icon: faGear,
    pages: settingsPagesSection,
  }
];

export default navItems;
