import { faClock, faGear, faPlus, faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useContext, useState } from 'react'
import { Button, Card, Col, Dropdown, Row, Form } from 'react-bootstrap'
import { ExamModel } from '../../exams/ExamsForm';
import DexieUtils from '../../../utils/dexie-utils';
import MyTable from '../../tables/MyTable';
import { Link, useNavigate } from 'react-router-dom';
import { myAppConfig } from '../../../config';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { examInitialData } from '../../../initialdata';
import ExamInstructionModal from '../exam/ExamInstructionsModal';

import useAuth from '../../../hooks/useAuth';



interface ExamsProps {

}

const OngoingExam: React.FC<ExamsProps> = ({ }) => {
    const [exams, setExams] = useState<ExamModel[]>([]);
    const [dexieUtils] = useState(DexieUtils<ExamModel>({ tableName: 'exams' }));

    const [openModal, setOpenModal] = useState<boolean>(false);
    const [selectedExam, setSelectedExam] = useState<string>('');

    const { user } = useAuth();
    // console.log(user.role);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            await getExams()
        };
        fetchData();
    }, []);

    const getExams = async () => {
        const fetchedExams = await dexieUtils.getAll();
        const examsWithData = fetchedExams.map(exam => {
            

            return {
                ...exam,
                examID: exam.id
            };
        });
        setExams(examsWithData);
    }

    const GotoExam = (examID: any) => {
        navigate(`${myAppConfig.studentBaseURL}/examMonitoring/${examID}`);
    }

    

    const handleTakeExam = (examId: any) => {
        setOpenModal(!openModal)
        console.log(examId)
        setSelectedExam(examId)
        // navigate(`${myAppConfig.studentBaseURL}/exams/${examId}`);
    }
    const handleOnAccept = () => {
        setOpenModal(!openModal);
        navigate(`${myAppConfig.studentBaseURL}/exams/${selectedExam}`);
    };
    const toggleModal = () => {
        setOpenModal(!openModal);
    };
            
    // const data = exams.map(student => student.examName);

    const tableColumns = [
        {
            Header: "",
            accessor: "id"
        },
        {
            Header: "Exam",
            accessor: "examName",
        },
        {
            Header: "Duration",
            accessor: "duration",
        },
        {
            Header: "No. of Questions",
            accessor: "questionPicking",
        },
        {
            Header: "Time",
            accessor: "startTime",

        },
        {
            Header: "Progress",
            accessor: "",
            Cell: () => (
                <ProgressBar now={65} label={`${65}%`} variant='success' />
            ),
        },

        {
            Header: "",
            accessor: "examID",       
            Cell: ({ value }: { value: any }) => {
                 if (user && user.role === 'teacher' || user && user.role ==='schooladmin') {
                     console.log('teacher');
                     
                     return (
                         
                        <Button variant='primary' type='button' onClick={() => GotoExam(value)}>
                         <FontAwesomeIcon icon={faEye} />{" "}Progress
                         </Button>
                         
                         )
                         
                    } else if(user && user.role === 'student'){
                       return (
                         <Button variant='primary' type='button' onClick={() => handleTakeExam(value)}>
                         <FontAwesomeIcon icon={faEye} />{" "}Take Exam
                     </Button>
                     )
                    }else {
                        console.log('nako');
                    }       
            },
            className: "text-end",
            disableSortBy: true
        }
    ];

    return (
        <>
            <Card>
                <Card.Header>
                    <div className='d-flex justify-content-between align-items-center'>
                        {/* <h4>Ongoing Exams</h4> */}
                    </div>
                </Card.Header>
                <Card.Body>
                    <MyTable columns={tableColumns} data={exams as []} />
                </Card.Body>
            </Card>
            <ExamInstructionModal
                show={openModal}
                onClose={toggleModal}
                onSave={handleOnAccept}
                okText='Start Exam'
            >

            </ExamInstructionModal>
        </>
    )
}

export default OngoingExam