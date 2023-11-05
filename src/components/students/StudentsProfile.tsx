// <FontAwesomeIcon icon={faArrowLeft} />
import { faList, faQuestion, faQuestionCircle, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useEffect, useState, CSSProperties } from 'react';
import { Button, Card, Col, Form, Row, Container } from 'react-bootstrap'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';
import Select from "react-select";
import DexieUtils from '../../utils/dexie-utils';
import NotyfContext from '../../contexts/NotyfContext';
import { SubjecModel } from '../subjects/SubjectForm';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import OverAllPieChart from '../../pages/dashboards/Default/OverAllPieChart';
import StudentExamHistory from './StudentExamHistory';
import StudenPerformanceHistory from './StudentHistoryPerformance';
import StudentHistoryPerformancePieChart from '../../pages/dashboards/Default/StudentHistoryPerformancePieChart';


interface StudentsProps {
    updateListMode: (mode: boolean) => void;
    updateview: (mode: boolean) => void;
    onViewProfile: (mode: boolean) => void;
    setSelectedRow: (model: StudentDataModel | undefined) => void;
    student?: StudentDataModel;
}
// ExamCount, AverageScores, LastExam, TimeTaken
export interface StudentDataModel {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    userName: string;
    password: string;
    studentSubject: string;
    mobile: string;
    uniqueIdentification: string;
    uniqueIdentificationNumber: string;
    referenceId?: string;
    specialNeeds: string;
    moreDetails?: string;
    active: string;
    sendCredentials: boolean;
    displayName: string;

    ExamCount: string;
    AverageScores: string;
    LastExam: string;
    TimeTaken: string;
}


const StudentsProfile: React.FC<StudentsProps> = ({ updateview, student, onViewProfile }) => {

    const [studentPerformanceHistory, setstudentPerformanceHistory] = useState<boolean>(true);

    const HandleBack = async () => {
        updateview(true)// show create/edit form             

    }
    const HandleviewProfile = async () => {
        onViewProfile(true)// show profile/list            

    }

    const viewStudentPerformance = (mode: boolean) => {
        setstudentPerformanceHistory(mode);
    }

    // Initialize the form state with default values
    const initialFormState: StudentDataModel = {
        id: student ? student.id : '',
        displayName: student ? student.displayName : '',
        firstName: student ? student.firstName : '',
        lastName: student ? student.lastName : '',
        email: student ? student.email : '',
        userName: student ? student.userName : '',
        password: student ? student.password : '',
        studentSubject: student ? student.studentSubject : '',
        mobile: student ? student.mobile : '',
        uniqueIdentification: student ? student.uniqueIdentification : '',
        uniqueIdentificationNumber: student ? student.uniqueIdentificationNumber : '',
        specialNeeds: student ? student.specialNeeds : 'false',
        active: student ? student.active : 'true',
        sendCredentials: student ? student.sendCredentials : false,
        referenceId: student ? student.referenceId : '',
        moreDetails: student ? student.moreDetails : '',

        ExamCount: student ? student.ExamCount : '',
        AverageScores: student ? student.AverageScores : '',
        LastExam: student ? student.LastExam : '',
        TimeTaken: student ? student.TimeTaken : '',
    };

    const [formState, setFormState] = useState<StudentDataModel>(initialFormState);

    return (
        <Card>
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <h4>Student Profile</h4>

                        <p>{formState.firstName} {formState.lastName}
                        </p>
                    </div>

                    <div className='d-flex gap-1'>
                        <Button onClick={() => { HandleBack(); HandleviewProfile(); }}><FontAwesomeIcon icon={faArrowLeft} /> Back</Button>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <Tabs
                    defaultActiveKey="performance"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="performance" title="Performance">
                        <OverAllPieChart />
                    </Tab>
                    <Tab eventKey="examHistory" title="Exam History">
                        {
                            studentPerformanceHistory ? <StudentExamHistory
                                StudentData={viewStudentPerformance} studID={formState.id}
                            /> : <StudentHistoryPerformancePieChart
                                StudentData={viewStudentPerformance}
                            />
                        }

                    </Tab>
                </Tabs>
            </Card.Body>
        </Card>

    )
}

export default StudentsProfile


