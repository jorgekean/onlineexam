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

import { faCheckToSlot, faCubes, faUsers, faHome, faBook, faGear, faQuestion, faBarChart, faBell, faFolder, faDirections, faUserGraduate, faBookBookmark, faUserClock, faHistory, faUser, faQuestionCircle, faBarsProgress, faDesktop, faChalkboardUser, faPercentage } from "@fortawesome/free-solid-svg-icons";
import { myAppConfig } from "../../config";

const schoolPagesSection = [
  {
    href: `${myAppConfig.baseURL}/schoolDashboard`,
    icon: faHome,
    title: "Dashboard"
  },
  {
    href: `${myAppConfig.baseURL}/statistics`,
    icon: faBarChart,
    title: "Statistics",
  },
  {
    href: `${myAppConfig.baseURL}/subjects`,
    icon: faUsers,
    title: "Subjects",
  },
  {
    href: `${myAppConfig.baseURL}/teacher`,
    icon: faChalkboardUser,
    title: "Teachers",
  },
  {
    href: `${myAppConfig.baseURL}/students`,
    icon: faUserGraduate,
    title: "Students",
  },
  {
    href: `${myAppConfig.baseURL}/exams`,
    icon: faBook,
    title: "Exams",
  },
  {
    href: `${myAppConfig.baseURL}/summaryQuestion`,
    icon: faCubes,
    title: "Questions",
  },
  // --->
  //{
  //  href: `${myAppConfig.baseURL}/essay-scoring`,
  //  icon: faPercentage,
  //  title: "Essay Scoring"
  //},
  // --->
  // {
  //   href: `${myAppConfig.baseURL}/essayScoring`,
  //   icon: faCheckToSlot,
  //   title: "Essay Scoring",
  // },
  // {
  //   href: `${myAppConfig.baseURL}/questions`,
  //   icon: faQuestion,
  //   title: "Questions",
  // },
  {
    href: `${myAppConfig.baseURL}/notifications`,
    icon: faBell,
    title: "Notifications",
  },
] as SidebarItemsType[];

const teacherPagesSection = [
  {
    href: `${myAppConfig.baseURL}/dashboard`,
    icon: faHome,
    title: "Dashboard"
  },
  {
    href: `${myAppConfig.baseURL}/statistics`,
    icon: faBarChart,
    title: "Statistics",
  },
  {
    href: `${myAppConfig.baseURL}/subjects`,
    icon: faUsers,
    title: "My Subjects",
  },
  {
    href: `${myAppConfig.baseURL}/exams`,
    icon: faBook,
    title: "Exams",
  },
  {
    href: `${myAppConfig.baseURL}/summaryQuestion`,
    icon: faCubes,
    title: "Questions",
  },
  {
    href: `${myAppConfig.baseURL}/students`,
    icon: faUserGraduate,
    title: "Students",
  },
  // ---->
  //{
  //  href: `${myAppConfig.baseURL}/essay-scoring`,
  //  icon: faPercentage,
  //  title: "Essay Scoring",
  //},
  // --->
  // {
  //   href: `${myAppConfig.baseURL}/essayScoring`,
  //   icon: faCheckToSlot,
  //   title: "Essay Scorring",
  // },
  // <FontAwesomeIcon icon={faHundredPoints} />
  // {
  //   href: `${myAppConfig.baseURL}/questions`,
  //   icon: faQuestion,
  //   title: "Questions",
  // },
  // {
  //   href: `${myAppConfig.baseURL}/sections`,
  //   icon: faFolder,
  //   title: "Sections"
  // },
  // {
  //   href: `${myAppConfig.baseURL}/directions`,
  //   icon: faDirections,
  //   title: "Directions",
  // },
  {
    href: `${myAppConfig.baseURL}/notifications`,
    icon: faBell,
    title: "Notifications",
  },
] as SidebarItemsType[];

const studentPagesSection = [
  {
    href: `${myAppConfig.baseURL}/studentDashboard`,
    icon: faFolder,
    title: "Dashboard"
  },
  {
    href: `${myAppConfig.baseURL}/studentProfile`,
    icon: faUser,
    title: "My Account",
  },
  // {
  //   href: `${myAppConfig.baseURL}/dashboard`,
  //   icon: faHome,
  //   title: "Dashboard"
  // },
  // {
  //   href: `${myAppConfig.studentBaseURL}/exams`,
  //   icon: faUserClock,
  //   title: "Upcoming Exams",
  // },
  // {
  //   href: `${myAppConfig.studentBaseURL}/ongoing-exam`,
  //   icon: faBarsProgress,
  //   title: "Ongoing Exams",
  // },
  // {
  //   href: `${myAppConfig.studentBaseURL}/examMonitoring`,
  //   icon: faDesktop,
  //   title: "Exam Monitoring",
  // },
  {
    href: `${myAppConfig.baseURL}/subjects`,
    icon: faUsers,
    title: "My Subjects",
  },
  {
    href: `${myAppConfig.baseURL}/exams`,
    icon: faBook,
    title: "My Exams",
  },
  // {
  //   href: `${myAppConfig.studentBaseURL}/exam-history`,
  //   icon: faHistory,
  //   title: "Exam History",
  // },
  {
    href: `${myAppConfig.studentBaseURL}/studentNotifications`,
    icon: faBell,
    title: "Notifications",
  },
  //{
  //  href: `${myAppConfig.studentBaseURL}/docs`,
  //  icon: faQuestionCircle,
  //  title: "Help & Documentation",
  //},
] as SidebarItemsType[];

const navItems = [
  {
    title: "School Admin",
    pages: schoolPagesSection,
    role: "schooladmin"
  },
  {
    title: "Teacher View",
    icon: faGear,
    pages: teacherPagesSection,
    role: "teacher"
  },
  {
    title: "Student View",
    pages: studentPagesSection,
    role: "student"
  },
];

export default navItems;
