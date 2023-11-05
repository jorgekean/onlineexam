import { faClock, faEye, faGear, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useContext, useState } from 'react'
import { Badge, Button, Card, Col, Dropdown, Row } from 'react-bootstrap'
import { ExamModel } from '../../exams/ExamsForm';
import DexieUtils from '../../../utils/dexie-utils';
import MyTable from '../../tables/MyTable';
import { Link, useNavigate } from 'react-router-dom';
import { myAppConfig } from '../../../config';
import { ExamResultsModel } from '../../../pages/_studentspages/exams/TakeExam';
import ProgressBar from 'react-bootstrap/ProgressBar';
import useAuth from '../../../hooks/useAuth';
// import { tableData, tableColumns } from "./data";

interface StatusBadgeProps {
    result: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ result }) => {
    let variant: string;

    if (result === "Passed") {
        variant = "success";
    } else if (result === "Failed") {
        variant = "danger";
    } else {
        variant = "warning";
    }

    return <Badge bg={variant}>{result}</Badge>;
};

interface ExamHistoryProps {
    // listMode?: boolean;
    // updateListMode: (mode: boolean) => void;
    setSelectedRow?: (model: ExamResultsModel | undefined) => void;
}

const ExamHistory: React.FC<ExamHistoryProps> = ({ setSelectedRow }) => {
    const [exams, setExams] = useState<ExamResultsModel[]>([]);
    const [dexieUtils] = useState(DexieUtils<ExamResultsModel>({ tableName: 'examresults' }));
    // const [openModal, setOpenModal] = useState<boolean>(false);
    // const [selectedExam, setSelectedExam] = useState<string>('');
    const navigate = useNavigate();
    const { user } = useAuth()

    // const notyf = useContext(NotyfContext);

    useEffect(() => {
        const fetchData = async () => {
            await getExams()
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
    const handleReviewClick = async (examResultId: string) => {
        if (user?.role === "student") {
            navigate(`${myAppConfig.studentBaseURL}/student-exam-result/${examResultId}`);
        } else {
            navigate(`${myAppConfig.studentBaseURL}/exam-results/${examResultId}`);
        }


    }

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
            Header: "Start Date/Time",
            accessor: "startDateAndTime"
        },
        {
            Header: "Duration",
            accessor: "duration",
        },
        {
            Header: "Avg. Score",
            accessor: "result",
            Cell: () => (
                <ProgressBar now={100} label={`${100}%`} variant='success' />
            ),
        },
        {
            Header: "",
            accessor: "examResultId",
            Cell: ({ value }: { value: any }) => {

                return (
                    <>
                        {user?.role === "student" ? <Button variant='primary' type='button' onClick={(e) => handleReviewClick(value)}>
                            <FontAwesomeIcon icon={faEye} /> View
                        </Button> : <Button variant='primary' type='button' onClick={(e) => handleReviewClick(value)}>
                            <FontAwesomeIcon icon={faEye} /> Analyze
                        </Button>}

                    </>
                )
            }
            ,
            disableSortBy: true
        }
    ];

    const studentTableColumns = [
        {
            Header: "",
            accessor: "id"
        },
        {
            Header: "Exam",
            accessor: "examName",
        },
        {
            Header: "Start Date/Time",
            accessor: "startDateAndTime"
        },
        {
            Header: "Duration",
            accessor: "duration",
        },
        {
            Header: "",
            accessor: "examResultId",
            Cell: ({ value }: { value: any }) => {

                return (
                    <>
                        {user?.role === "student" ? <Button variant='primary' type='button' onClick={(e) => handleReviewClick(value)}>
                            <FontAwesomeIcon icon={faEye} /> View
                        </Button> : <Button variant='primary' type='button' onClick={(e) => handleReviewClick(value)}>
                            <FontAwesomeIcon icon={faEye} /> Analyze
                        </Button>}

                    </>
                )
            }
            ,
            disableSortBy: true
        }
    ];

    return (
        <>
            <Card>
                <Card.Header>
                    <div className='d-flex justify-content-between align-items-center'>
                        {/* <h4>Exams History</h4> */}
                        <div className='d-flex gap-1'>
                            {/* <Button onClick={() => handleOnCreate()}><FontAwesomeIcon icon={faPlus} /> Create</Button> */}
                        </div>
                    </div>
                </Card.Header>
                <Card.Body>
                    <MyTable columns={user?.role === "student" ? studentTableColumns : tableColumns} data={exams as []} />
                </Card.Body>
            </Card>
        </>
    )
}

export default ExamHistory