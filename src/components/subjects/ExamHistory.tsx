import React, { ReactNode, useState, useEffect } from 'react'
import { Container, Row, Col, Card, Tabs, Button} from 'react-bootstrap'
import { Helmet } from 'react-helmet-async';
import Tab from 'react-bootstrap/Tab';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faEye } from "@fortawesome/free-solid-svg-icons";
import { ExamResultsModel } from '../../pages/_studentspages/exams/TakeExam';
import MyTable from '../tables/MyTable';
import ProgressBar from 'react-bootstrap/ProgressBar';
import DexieUtils from '../../utils/dexie-utils';

interface SubjectExamHistoryProps {
    children?: ReactNode;
}

const SubjectExamHistory: React.FC<SubjectExamHistoryProps> = ({ children }) => {
    const [exams, setExams] = useState<ExamResultsModel[]>([]);
    const [dexieUtils] = useState(DexieUtils<ExamResultsModel>({ tableName: 'examresults' }));

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
        // {
        //     Header: "",
        //     accessor: "examResultId",
        //     Cell: ({ value }: { value: any }) =>
        //         <Button variant='primary' type='button' >
        //             <FontAwesomeIcon icon={faEye} /> Review
        //         </Button>,
        //     disableSortBy: true
        // }
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
                    <MyTable columns={tableColumns} data={exams as []} />
                </Card.Body>
            </Card>
        </>
    )

    return (
        <Card>
            <Card.Header>
                <Card.Body>
                  <h1>TEST1</h1>
                  
                </Card.Body>
            </Card.Header>
        </Card>
    )
}

export default SubjectExamHistory