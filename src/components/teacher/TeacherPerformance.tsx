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
// import StudentHistoryPerformancePieChart from '../../pages/dashboards/Default/StudentHistoryPerformancePieChart';
import TeacherHistoryPerformancePieChart from '../../pages/dashboards/Default/TeacherHistoryPerformance';


interface StudentsProps {
    updateListMode: (mode: boolean) => void;
    updateview: (mode: boolean) => void;
    // onViewProfile: (mode: boolean) => void;
    setSelectedRow: (model: TeacherModel | undefined) => void;
    teacher?: TeacherModel;
}

export interface TeacherModel {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    userName: string;
    password: string;
    mobile: string;
    uniqueIdentification: string;
    uniqueIdentificationNumber: string;
    referenceId?: string;
    specialNeeds: string;
    moreDetails?: string;
    active: string;
    sendCredentials: boolean;
    displayName: string;
}


const TeacherPerformance: React.FC<StudentsProps> = ({ updateview, teacher }) => {

    const [teacherPerformanceHistory, setTeacherPerformanceHistory] = useState<boolean>(true);

    const HandleBack = async () => {
        updateview(true)// show create/edit form             

    }
    // const HandleviewProfile = async () => {
    //     onViewProfile(true)// show profile/list            

    // }

    const viewStudentPerformance = (mode: boolean) => {
        setTeacherPerformanceHistory(mode);
    }

    // Initialize the form state with default values
    const initialFormState: TeacherModel = {
        id: teacher ? teacher.id : '',
        displayName: teacher ? teacher.displayName : '',
        firstName: teacher ? teacher.firstName : '',
        lastName: teacher ? teacher.lastName : '',
        email: teacher ? teacher.email : '',
        userName: teacher ? teacher.userName : '',
        password: teacher ? teacher.password : '',
        mobile: teacher ? teacher.mobile : '',
        uniqueIdentification: teacher ? teacher.uniqueIdentification : '',
        uniqueIdentificationNumber: teacher ? teacher.uniqueIdentificationNumber : '',
        specialNeeds: teacher ? teacher.specialNeeds : 'false',
        active: teacher ? teacher.active : 'true',
        sendCredentials: teacher ? teacher.sendCredentials : false,
        referenceId: teacher ? teacher.referenceId : '',
        moreDetails: teacher ? teacher.moreDetails : ''
    };

    const [formState, setFormState] = useState<TeacherModel>(initialFormState);

    return (
        <Card>
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <h4>Student Profilee</h4>

                        <p>{formState.firstName} {formState.lastName}
                            <span> ({formState.lastName} Section)</span></p>
                    </div>

                    <div className='d-flex gap-1'>
                        <Button onClick={() => { HandleBack() }}><FontAwesomeIcon icon={faArrowLeft} /> Back</Button>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                {
                    <TeacherHistoryPerformancePieChart
                        TeacherData={viewStudentPerformance}
                    />
                }
            </Card.Body>
        </Card>

    )
}

export default TeacherPerformance


