import React, { useState, useEffect } from "react";
import { ReactNode } from "react";
import { Container, Row, Col, Card, Button, Tabs } from "react-bootstrap";
import MyTable from "../../tables/MyTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import DexieUtils from '../../../utils/dexie-utils';
import { ExamResultsModel } from "../../../pages/_studentspages/exams/TakeExam";
import { Link, useNavigate } from 'react-router-dom';
import { myAppConfig } from '../../../config';
import ExamStatistics from "../../statistics/ExamStatistics";
import { useParams } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Piechart from "./PieChart";
import Scorecard from "./Scorecard";
import PrintExam from "./PrintExam";
import useAuth from "../../../hooks/useAuth";

interface StudentExamResultProps {
    children?: ReactNode;

}


const StudentExamResultPage: React.FC<StudentExamResultProps> = ({ children }) => {
    const navigate = useNavigate();
    const [exams, setExams] = useState<ExamResultsModel[]>([]);
    const [examResult, setExamResult] = useState<ExamResultsModel>();
    const [dexieUtils] = useState(DexieUtils<ExamResultsModel>({ tableName: 'examresults' }));
    const { id } = useParams();
    const { user } = useAuth()

    useEffect(() => {
        const fetchData = async () => {
            await getExams()

            const fetchedExamResult = await dexieUtils.get(id as string);
            setExamResult(fetchedExamResult)
        };
        fetchData();
    }, []);

    const getExams = async () => {
        const fetchedExams = await dexieUtils.getAll();
        const examsWithIdSet = fetchedExams.map(exam => {
            return {
                ...exam,
                examResultId: exam.id // Set examResultId to id property
            };
        });

        setExams(examsWithIdSet);
    }

    return (
        <Card>
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center'>
                    <h4 className="mt-0">Student Exam Result for {examResult?.examName}</h4>
                    <div className='d-flex gap-1 mt-0 pt-0'>
                        <Button onClick={() => { user?.role === "student" ? navigate(`${myAppConfig.baseURL}/exams`) : navigate(`${myAppConfig.studentBaseURL}/exam-results/${id}`) }} ><FontAwesomeIcon icon={faArrowLeft} /> Back</Button>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <Tabs
                    defaultActiveKey="Scorecard"
                    id="uncontrolled-tab-example"
                    className="mb-3 mt-0"
                >
                    <Tab eventKey="Scorecard" title="Score Card">
                        <Scorecard data={id} />
                    </Tab>

                    <Tab eventKey="Printexam" title="Print Exam Results">
                        <PrintExam />
                    </Tab>
                </Tabs>

            </Card.Body>
        </Card>
    )
}

export default StudentExamResultPage