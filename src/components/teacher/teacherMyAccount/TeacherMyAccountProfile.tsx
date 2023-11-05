import { faList, faQuestion, faQuestionCircle, faArrowLeft, faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useEffect, useState, CSSProperties } from 'react';
import { Button, Card, Col, Form, Row, Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import TeacherPersonalPerformancePie from '../../../pages/dashboards/Default/TeacherPersonalPerformancePie';
import { myAppConfig } from '../../../config';
// import { faCaretRight, faEdit, faGreaterThan, faPlus } from '@fortawesome/free-solid-svg-icons'


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


const TeacherMyAccountProfile: React.FC<StudentsProps> = ({ updateview, student, onViewProfile }) => {

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


    const navigate = useNavigate();
    const goToEdit = () => {
        navigate(`${myAppConfig.baseURL}/editTecherProfile`)
    }

    return (
        <Card>
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center'>
                    <h4>Teacher Profile</h4>
                    {/* <Button onClick={() => goToEdit()}><FontAwesomeIcon icon={faEdit} className='' /> Edit</Button> */}
                </div>
            </Card.Header>
            <Card.Body>
                <TeacherPersonalPerformancePie />
            </Card.Body>
        </Card>

    )
}

export default TeacherMyAccountProfile

