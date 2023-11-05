import React, { Suspense, ReactNode, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Wrapper from "../components/Wrapper";
import Sidebar from "../components/sidebar/Sidebar";
import Main from "../components/Main";
import Navbar from "../components/navbar/Navbar";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Settings from "../components/Settings";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";
import { myAppConfig } from "../config";

import allDashboardItems from "../components/sidebar/dashboardItems";

import useAuth from "../hooks/useAuth";
import { Type } from "react-feather";

interface DashboardProps {
  children?: ReactNode;
}

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  const [dashboardItems, setDashboardItems] = useState(allDashboardItems)
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user, dashboardItems, "user")

    setDashboardItems(allDashboardItems);


    if (user && user.role === 'student') {
      var studentNavItems = allDashboardItems.filter(f => f.role === "student")
      setDashboardItems(studentNavItems)
    } else if (user && user.role === 'teacher') {
      var studentNavItems = allDashboardItems.filter(f => f.role === "teacher")
      setDashboardItems(studentNavItems)
    } else if (user && user.role === 'schooladmin') {
      var studentNavItems = allDashboardItems.filter(f => f.role === "schooladmin")
      setDashboardItems(studentNavItems)
    } else {
      console.log("Role not defined.")
      // navigate(`${myAppConfig.baseURL}/`);
    }


  }, [user])

  return (
    <React.Fragment>
      <Wrapper>
        <Sidebar items={dashboardItems} showFooter={false} />
        <Main>
          <Navbar />
          <Content>
            <Suspense fallback={<Loader />}>
              {children}
              <Outlet />
            </Suspense>
          </Content>
          <Footer />
        </Main>
      </Wrapper>
      {/* <Settings /> */}
    </React.Fragment >
  )
}

export default Dashboard;
