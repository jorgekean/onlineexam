import React from "react";
import { Helmet } from "react-helmet-async";

import { Col, Container, Nav, Row, Tab } from "react-bootstrap";

export interface TabItem {
    eventKey: string;
    title: string;
    content: React.ReactNode;
}

interface TabsProps {
    tabs: TabItem[];
    className?: string;
}

const Tabs = ({ tabs, className }: TabsProps) => (
    <div className={"tab " + className}>
        <Tab.Container id="dynamic-tabs" defaultActiveKey={tabs[0]?.eventKey}>
            <Nav variant="tabs">
                {tabs.map(tab => (
                    <Nav.Item key={tab.eventKey}>
                        <Nav.Link eventKey={tab.eventKey}>{tab.title}</Nav.Link>
                    </Nav.Item>
                ))}
            </Nav>
            <Tab.Content>
                {tabs.map(tab => (
                    <Tab.Pane key={tab.eventKey} eventKey={tab.eventKey}>
                        {tab.content}
                    </Tab.Pane>
                ))}
            </Tab.Content>
        </Tab.Container>
    </div>
);

export default Tabs;
