import React, { useState } from "react";
import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Card } from "react-bootstrap";
// import EssayScoring from "../../components/essay/essayScoringUnscored";
import EssayScoringUnscored from "../../components/essay/essayScoringUnscored";
import EssayScoringFullyScored from "../../components/essay/essayScoringFullyScored";
import { ExamResultsModel } from "../_studentspages/exams/TakeExam";

interface DashboardPageProps {
    children?: ReactNode;
}

const EssayScoringPage: React.FC<DashboardPageProps> = ({ children }) => {
    const [viewMode, setViewMode] = useState<boolean>(true);
    const [student, setStudent] = useState<ExamResultsModel | undefined>(undefined)

    const setSelectedRow = (model: ExamResultsModel | undefined) => {
        setStudent(model);
    };

    const onViewProfile = (mode: boolean) => {
        setViewMode(mode);
    };

    return (
        // <React.Fragment>
        //     <Helmet title="Essay Scorring" />
        //     Essay Scorring
        // </React.Fragment>
        <Card>
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <h4>Essay Scoring</h4>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <Tabs
                    defaultActiveKey="unscored"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                // fill
                >
                    <Tab eventKey="unscored" title="Unscored">
                        <EssayScoringUnscored setSelectedRow={setSelectedRow} onViewProfile={onViewProfile} />
                    </Tab>
                    <Tab eventKey="fullyScored" title="Fully Scored">
                        <EssayScoringFullyScored setSelectedRow={setSelectedRow} onViewProfile={onViewProfile} />
                    </Tab>
                </Tabs>
            </Card.Body>
        </Card>

    )
}

export default EssayScoringPage