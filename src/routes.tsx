import React from "react";
import { lazy } from "@loadable/component";

// Layouts
import AuthLayout from "./layouts/Auth";
import AuthSignUpLayout from "./layouts/AuthSignUp";
import DashboardLayout from "./layouts/Dashboard";
import DocLayout from "./layouts/Doc";
import LandingLayout from "./layouts/Landing";

// Guards
import AuthGuard from "./components/guards/AuthGuard";
import Exams from "./pages/exams/Exams";
import Students from "./components/students/Students";
import Questions from "./pages/questions/Questions";
import Statistics from "./pages/statistics/Statistics";
import NotificationPage from "./pages/notifications/Notifications";
import { Settings } from "react-feather";
import StudentsPage from "./pages/students/Students";
import Sections from "./pages/sections/Sections";
import Groups from "./pages/subjects/Subjects";
import SubjectsPage from "./pages/subjects/Subjects";

import { myAppConfig } from "./config";

import Directions from "./pages/directions/Directions"
// import DashboardsPage from "./pages/_studentspages/dashboards/Dashboards";
import ExamsPage from "./pages/_studentspages/exams/Exams";
import NotificationsPage from "./pages/_studentspages/notifications/StudentNotificationPage";
// import MyAccountPage from "./pages/_studentspages/myaccount/MyAccount";
import DocsPage from "./pages/_studentspages/docs/Docs";
import ExamHistoryPage from "./pages/_studentspages/examhistory/ExamHistory";
import TakeExamPage from "./pages/_studentspages/exams/TakeExam";
import Teacher from "./pages/teacher/Teacher";
// import TeacherProfile from "./components/teacher/TeacherProfile";
import ExamResultPage from "./pages/_studentspages/exams/ExamResult";
// import ongoingExam from "./pages/ongoing-exam/ongoingExam";
import TeacherProfile from "./pages/teacher/TeacherProfilePage";
import TeachersPage from "./pages/teacher/Teacher";
import TeacherForm, { TeacherModel } from "./components/teacher/TeacherForm";
import SchoolProfilePage from "./pages/school/SchoolProfilePage";
// import StudentProfilePage from "./pages/students/StudentProfilePage";
import StudentProfilePage from "./pages/_studentspages/myaccount/StudentProfilePage";
import TeacherProfileForm from "./components/teacher/teacherMyAccount/TeacherMyAccountForm";

import OngoingExamPage from "./pages/_studentspages/exams/OngoingExam";
import ExamMonitoringPage from "./pages/_studentspages/exams/ExamMonitoring";
import SummaryQuetionPage from "./pages/summary/SummaryQuestion";
// import DefaultStudentDashboard from "./pages/dashboards/DefaultStudentDashboard/DefaultStudentDashboard";
import DefaultStudentDashboard from "./pages/_studentspages/dashboards/DefaultStudentDashboard";
import DefaultSchoolDashboard from "./pages/dashboards/DefaultSchoolDashboard/DefaultSchoolDashboard";

import StudentExamResultPage from "./components/_studentscomponents/examhistory/StudentExamResult";

import StudentSubjectPerformancePage from "./components/subjects/StudentSubjectPerformance";
import EssayScoringPage from "./pages/essayscoring/EssayScoring";
import EssayScoringExamPage from "./pages/essayscoring/EssayScoringExam";
import StudentNotificationPage from "./pages/_studentspages/notifications/StudentNotificationPage";
import EssayScorringPage from "./pages/essay/essayScoring";


// Landing
const Landing = lazy(() => import("./pages/landing/Landing"));

// Dashboards
const Default = lazy(() => import("./pages/dashboards/Default"));



// const Analytics = lazy(() => import("./pages/dashboards/Analytics"));
// const SaaS = lazy(() => import("./pages/dashboards/SaaS"));
// const Social = lazy(() => import("./pages/dashboards/Social"));
// const Crypto = lazy(() => import("./pages/dashboards/Crypto"));

// // Pages
// const Profile = lazy(() => import("./pages/pages/Profile"));
// const Settings = lazy(() => import("./pages/pages/Settings"));
// const Clients = lazy(() => import("./pages/pages/Clients"));
// const Projects = lazy(() => import("./pages/pages/Projects"));
// const Invoice = lazy(() => import("./pages/pages/Invoice"));
// const Pricing = lazy(() => import("./pages/pages/Pricing"));
// const Tasks = lazy(() => import("./pages/pages/Tasks"));
// const Chat = lazy(() => import("./pages/pages/Chat"));
// const Blank = lazy(() => import("./pages/pages/Blank"));

// Auth
const Page500 = lazy(() => import("./pages/auth/Page500"));
const Page404 = lazy(() => import("./pages/auth/Page404"));
const SignIn = lazy(() => import("./pages/auth/SignIn"));
const SignUp = lazy(() => import("./pages/auth/SignUp"));
const ResetPassword = lazy(() => import("./pages/auth/ResetPassword"));

// Protected routes

const routes = [
  {
    path: `${myAppConfig.baseURL}/`,
    element: <LandingLayout />,
    children: [
      {
        path: "",
        element: <AuthGuard><Landing /></AuthGuard>,
      },
    ],
  },
  {
    path: `${myAppConfig.baseURL}/`,
    element: <DashboardLayout />,
    children: [
      {
        path: `dashboard`,
        element: <AuthGuard><Default /></AuthGuard>,
      },
      {
        path: "exams",
        element: <AuthGuard><Exams /></AuthGuard>,
      },
      // {
      //   path: "essayScoring",
      //   element: <AuthGuard><EssayScorringPage /></AuthGuard>,
      // },
      {
        path: "students",
        element: <AuthGuard><StudentsPage /></AuthGuard>,
      },
      {
        path: `studentProfile`,
        element: <AuthGuard><StudentProfilePage /></AuthGuard>
      },
      {
        path: "teacher",
        element: <AuthGuard><TeachersPage /></AuthGuard>,
      },
      {
        path: "questions",
        element: <AuthGuard><Questions /></AuthGuard>,
      },
      {
        path: "statistics",
        element: <AuthGuard><Statistics /></AuthGuard>,
      },
      {
        path: "notifications",
        element: <AuthGuard><NotificationPage /></AuthGuard>,
      },
      {
        path: "student-subject-performance/:id",
        element: <AuthGuard><StudentSubjectPerformancePage /></AuthGuard>,
      },
    ],
  },
  {
    path: `${myAppConfig.baseURL}/`,
    element: <DashboardLayout />,
    children: [
      {
        path: "sections",
        element: <AuthGuard><Sections /></AuthGuard>,
      },
      {
        path: "subjects",
        element: <AuthGuard><SubjectsPage /></AuthGuard>,
      },

      {
        path: "directions",
        element: <AuthGuard><Directions /></AuthGuard>,
      }

    ]
  },
  {
    path: `${myAppConfig.baseURL}/auth`,
    element: <AuthLayout />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "404",
        element: <Page404 />,
      },
      {
        path: "500",
        element: <Page500 />,
      },
    ],
  },
  {
    path: `${myAppConfig.baseURL}/auth`,
    element: <AuthSignUpLayout />,
    children: [
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ]
  },
  {
    path: "*",
    element: <AuthLayout />,
    children: [
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
  {
    path: `${myAppConfig.studentBaseURL}`,
    element: <DashboardLayout />,
    children: [
      {
        path: "exams",
        element: <AuthGuard><ExamsPage /></AuthGuard>,
      },
      {
        path: "ongoing-exam",
        element: <AuthGuard><OngoingExamPage /></AuthGuard>,
      },
      {
        path: "examMonitoring/:id",
        element: <AuthGuard><ExamMonitoringPage /></AuthGuard>,
      },
      {
        path: "exams/:id",
        element: <AuthGuard><TakeExamPage /></AuthGuard>,
      },
      {
        path: "exam-history",
        element: <AuthGuard><ExamHistoryPage /></AuthGuard>,
      },
      {
        path: "exam-results/:id",
        element: <AuthGuard><ExamResultPage /></AuthGuard>,
      },
      {
        path: "student-exam-result/:id",
        element: <AuthGuard><StudentExamResultPage /></AuthGuard>,
      },
      {
        path: "studentNotifications",
        element: <AuthGuard><StudentNotificationPage /></AuthGuard>,
      },
      {
        path: "docs",
        element: <AuthGuard><DocsPage /></AuthGuard>,
      },
    ],
  },
  {
    path: `${myAppConfig.baseURL}/`,
    element: <DashboardLayout />,
    children: [
      {
        path: `teacherProfile`,
        element: <AuthGuard><TeacherProfile /></AuthGuard>
      },
      {
        path: `schooProfile`,
        element: <AuthGuard><SchoolProfilePage /></AuthGuard>,
      },
      {
        path: `summaryQuestion`,
        element: <AuthGuard><SummaryQuetionPage /></AuthGuard>,
      },
      {
        path: "studentDashboard",
        element: <AuthGuard><DefaultStudentDashboard /></AuthGuard>,
      },
      {
        path: "schoolDashboard",
        element: <AuthGuard><DefaultSchoolDashboard /></AuthGuard>,
      },
      {
        path: "essay-scoring",
        element: <AuthGuard><EssayScoringPage /></AuthGuard>,
      },
      {
        path: "essay-scoring/:examId",
        element: <AuthGuard><EssayScoringExamPage /></AuthGuard>,
      },
      {
        path: "essay-table",
        element: <AuthGuard><EssayScoringExamPage /></AuthGuard>,
      },
    ],
  },
];
// EssayTable
export default routes;