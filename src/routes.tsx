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
import Candidates from "./components/candidates/Candidates";
import Questions from "./pages/questions/Questions";
import Statistics from "./pages/statistics/Statistics";
import Notifications from "./pages/notifications/Notifications";
import { Settings } from "react-feather";
import CandidatesPage from "./pages/candidates/Candidates";

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


export const baseURL: string = "onlineexam";
// Protected routes

const routes = [
  {
    path: `${baseURL}/`,
    element: <LandingLayout />,
    children: [
      {
        path: "",
        element: <AuthGuard><Landing /></AuthGuard>,
      },
    ],
  },
  {
    path: `${baseURL}/`,
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
      {
        path: "candidates",
        element: <AuthGuard><CandidatesPage /></AuthGuard>,
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
        element: <AuthGuard><Notifications /></AuthGuard>,
      },
      {
        path: "settings",
        element: <AuthGuard><Settings /></AuthGuard>,
      }
    ],
  },
  {
    path: `${baseURL}/auth`,
    element: <AuthLayout />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      // {
      //   path: "sign-up",
      //   element: <SignUp />,
      // },
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
    path: `${baseURL}/auth`,
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
];

export default routes;
