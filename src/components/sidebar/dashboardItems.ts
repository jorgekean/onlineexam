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
export const baseURL: string = "/onlineexam";

const pagesSection = [
  {
    href: `${baseURL}/dashboard`,
    icon: faHome,
    title: "Dashboards"
  },
  {
    href: `${baseURL}/exams`,
    icon: faBook,
    title: "Exams",
  },
  {
    href: `${baseURL}/candidates`,
    icon: faUsers,
    title: "Candidates",
  },
  {
    href: `${baseURL}/questions`,
    icon: faQuestion,
    title: "Questions",
  },
  {
    href: `${baseURL}/statistics`,
    icon: faBarChart,
    title: "Statistics",
  },
  {
    href: `${baseURL}/notifications`,
    icon: faBell,
    title: "Notifications",
  }
] as SidebarItemsType[];

const settingsPagesSection = [
  {
    href: `${baseURL}/settings/sections`,
    icon: faFolder,
    title: "Sections"
  },
  {
    href: `${baseURL}/settings/groups`,
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
