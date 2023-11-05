import React from "react";
import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";

interface DashboardPageProps {
    children?: ReactNode;
}

const DocsPage: React.FC<DashboardPageProps> = ({ children }) => {

    return (
        <React.Fragment>
            <Helmet title="Notifications" />
            Docs Page
        </React.Fragment>
    )
}

export default DocsPage