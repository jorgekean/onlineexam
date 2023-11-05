import { faClock, faGear, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useContext, useState } from 'react'
import { Button, Card, Col, Dropdown, Row } from 'react-bootstrap'
import { ExamModel } from '../../exams/ExamsForm';
import DexieUtils from '../../../utils/dexie-utils';
import MyTable from '../../tables/MyTable';
import { Link, useNavigate } from 'react-router-dom';
import { myAppConfig } from '../../../config';
import DefaultModal from '../../shared/modal/DefaultModal';
import ExamInstruction from './ExamInstructionsModal';
import ExamInstructionModal from './ExamInstructionsModal';
import { examInitialData } from '../../../initialdata';

// import { tableData, tableColumns } from "./data";
import useAuth from '../../../hooks/useAuth';

interface ExamsProps {
    // listMode?: boolean;
    // updateListMode: (mode: boolean) => void;
    setSelectedRow: (model: ExamModel | undefined) => void;
    updateListMode: (mode: boolean) => void;
    updateViewMode?: (mode: boolean) => void;
}

const UpcomingExams: React.FC<ExamsProps> = ({ setSelectedRow, updateListMode }) => {
    const [exams, setExams] = useState<ExamModel[]>([]);
    const [dexieUtils] = useState(DexieUtils<ExamModel>({ tableName: 'exams' }));
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [selectedExam, setSelectedExam] = useState<string>('');
    const [ViewMode, setViewMode] = useState<boolean>(true);
    const navigate = useNavigate();
    const { user } = useAuth();
    // const notyf = useContext(NotyfContext);

    useEffect(() => {
        const fetchData = async () => {
            await getExams()
        };
        fetchData();
    }, []);

    const getExams = async () => {
        const fetchedExams = await dexieUtils.getAll();
        const examsWithData = fetchedExams.map(exam => {
            const questionsCount = exam.selectedQuestions ? exam.selectedQuestions.length : 0;

            return {
                ...exam,
                examResultId: exam.id,
                questionsCount: questionsCount // Set questionsCount property
            };
        });

        setExams(examsWithData);
    }

    // const handleOnCreate = async () => {

    //     setSelectedRow(undefined)
    // }



    const handleOnDelete = async (data: any) => {
        await dexieUtils.deleteEntity(data.id);

        // Show a success message
        // notyf.open({
        //     background: "#4BBF73",
        //     message: "Students deleted!",
        //     position: {
        //         x: "right",
        //         y: "bottom"
        //     }
        // })

        getExams()
    }
    const toggleModal = () => {
        setOpenModal(!openModal);
    };

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


    const handleOnEdit = async (data: any) => {
        updateListMode(false)// show create/edit form
        setSelectedRow(data as ExamModel)
        console.log(data, "data")
    }

    const ViewExamMode = (mode: boolean) => {
        setViewMode(mode);
    };


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
            Header: "",
            accessor: "button",
            Cell: ({ row }: { row: any }) => {
                if (user && user.role === 'teacher' || user && user.role === 'schooladmin') {

                } else if (user && user.role === 'student') {
                    return (
                        // <Link to={`${myAppConfig.studentBaseURL}/exams/${row.values.id}`}>
                        <Button variant='primary' type='button' onClick={(e) => handleTakeExam(row.values.id)}>
                            <FontAwesomeIcon icon={faClock} /> Take Exam
                        </Button>
                        // </Link>
                    );
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
                        {/* <h4>Exams</h4> */}
                        <div className='d-flex gap-1'>
                            {/* <Button onClick={() => handleOnCreate()}><FontAwesomeIcon icon={faPlus} /> Create</Button> */}
                        </div>
                    </div>
                </Card.Header>
                <Card.Body>

                    <MyTable columns={tableColumns}
                        data={exams as []}

                        onDelete={user && user.role === 'teacher' || user && user.role === 'schooladmin' ? (e) => handleOnDelete(e) : undefined}
                        onEdit={user && user.role === 'teacher' || user && user.role === 'schooladmin' ? (e) => handleOnEdit(e) : undefined}
                    />
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

export default UpcomingExams