import React, { useState } from "react";
import { ReactNode } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import SubjectForm, { SubjecModel } from "../../../components/subjects/SubjectForm";
import RelatedTasks from "../../../components/relatedtask/RelatedTasks";
import DidYouKnow from "../../../components/wiki/DidYouKnow";
import SubjectsPage from "../../subjects/Subjects";
import { ExamModel } from "../../../components/exams/ExamsForm";
import Exams from "../../../components/exams/Exams";
import DefaultModal from "../../../components/shared/modal/DefaultModal";
import ExamInstruction from "../../../components/_studentscomponents/exam/ExamInstructionsModal";
import ExamsForm from "../../../components/exams/ExamsForm";
interface DashboardPageProps {
    children?: ReactNode;
}

const ExamsPage: React.FC<DashboardPageProps> = ({ children }) => {
    const [exam, setExam] = useState<ExamModel | undefined>(undefined)
    const [viewMode, setViewMode] = useState<boolean>(true);
    const [listMode, setListMode] = useState<boolean>(true);

    const setSelectedExam = (model: ExamModel | undefined) => {
        setExam(model);
    };
    const updateview = (mode: boolean) => {
        setViewMode(mode);
    };

    const updateListMode = (mode: boolean) => {
        setListMode(mode);
    };
    return (
        <React.Fragment>
            <Helmet title="Exam" />
            <Container fluid className="p-0">
                {/* <h1 className="h3 mb-3">Create your account</h1> */}

                <Row>
                    <Col>
                        {viewMode ? <Exams updateListMode={updateListMode} setSelectedRow={setSelectedExam} /> : <ExamsForm updateListMode={updateListMode} exam={exam} />}
                    </Col>
                </Row>
            </Container>

        </React.Fragment>
    )
}

export default ExamsPage