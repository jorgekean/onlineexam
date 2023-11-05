import React, { useEffect, useRef, useState } from "react";
import { ReactNode } from "react";
import { Badge, Tabs, Button } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import StudentList from "../../../components/_studentscomponents/examhistory/StudentList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faEye, faGear, faPlus, faArrowLeft, faPrint } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useParams } from 'react-router-dom';
import { myAppConfig } from '../../../config';
import ReactToPrint from "react-to-print";
import PrintResults from "./PrintResults";
import { QuestionModel } from "../../../components/questions/QuestionsForm";
import { questionType } from "../../../components/questions/types";
import Exam_ExamStatistics from "../../../components/_studentscomponents/examhistory/ExamStatistics";
import { ExamModel } from "../../../components/exams/ExamsForm";
import DexieUtils from "../../../utils/dexie-utils";
import { ExamResultsModel } from "./TakeExam";
interface ExamResultPageProps {
    children?: ReactNode;
}

const ExamResultPage: React.FC<ExamResultPageProps> = ({ children }) => {

    const [dexieUtils] = useState(DexieUtils<ExamResultsModel>({ tableName: 'examresults' }));
    const navigate = useNavigate();
    const { id } = useParams()
    // const [exam, setExam] = useState<ExamModel>();
    const [examResults, setExamResult] = useState<ExamResultsModel>();

    useEffect(() => {
        const fetchData = async () => {
            const fetchedExamResult = await dexieUtils.get(id as string);
            setExamResult(fetchedExamResult)
        };
        fetchData();
    }, []);

    return (
        <React.Fragment>
            <div className='d-flex justify-content-between align-items-center mb-4'>

                <h4>Exam Results for {examResults?.examName}</h4>

                <div className='d-flex gap-1'>
                    <Button onClick={() => { navigate(`${myAppConfig.baseURL}/exams`); }}><FontAwesomeIcon icon={faArrowLeft} /> Back</Button>
                </div>
            </div>
            <Tabs
                defaultActiveKey="examStatistics"
                id="uncontrolled-tab-example"
                className="mb-3 mt-2"
            >

                <Tab eventKey="examStatistics" title="Exam Statitics">
                    <Exam_ExamStatistics />

                </Tab>

                <Tab eventKey="studentList" title="Student Scores">
                    <StudentList />
                </Tab>
            </Tabs>
        </React.Fragment>
    )
}

export default ExamResultPage