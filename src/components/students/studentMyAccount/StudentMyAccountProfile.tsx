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
    setSelectedRow: (mode: StudentDataModel | undefined) => void;
    student?: StudentDataModel;
}

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
    LastExam: string
    TimeTaken: string
}


const StudentMyAccountProfile: React.FC<StudentsProps> = ({ updateview, student, onViewProfile }) => {

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

    const navigate = useNavigate();
    const goToEdit = () => {
        navigate(`${myAppConfig.baseURL}/editTecherProfile`)
    }

    return (
        <Card>
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center'>
                    <h4>Student Profile</h4>
                    {/* <Button onClick={() => goToEdit()}><FontAwesomeIcon icon={faEdit} className='' /> Edit</Button> */}
                </div>
            </Card.Header>
            <Card.Body>
                <TeacherPersonalPerformancePie />
            </Card.Body>
        </Card>

    )
}

export default StudentMyAccountProfile

