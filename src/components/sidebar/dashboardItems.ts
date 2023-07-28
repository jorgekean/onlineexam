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

import { faUsers, faHome, faBook, faGear, faQuestion, faBarChart, faBell } from "@fortawesome/free-solid-svg-icons";
export const baseURL: string = "onlineexam";

const pagesSection = [
  {
    href: `dashboard`,
    icon: faHome,
    title: "Dashboards"
  },
  {
    href: `exams`,
    icon: faBook,
    title: "Exams",
  },
  {
    href: "candidates",
    icon: faUsers,
    title: "Candidates",
  },
  {
    href: "questions",
    icon: faQuestion,
    title: "Questions",
  },
  {
    href: "statistics",
    icon: faBarChart,
    title: "Statistics",
  },
  {
    href: "notifications",
    icon: faBell,
    title: "Notifications",
  },
  {
    href: "settings",
    icon: faGear,
    title: "Settings",
  }
] as SidebarItemsType[];


const navItems = [
  {
    title: "",
    pages: pagesSection,
  }
];

export default navItems;
