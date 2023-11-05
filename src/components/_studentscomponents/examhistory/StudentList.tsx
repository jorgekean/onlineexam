import React, { useState, useEffect } from "react";
import { ReactNode } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import MyTable from "../../tables/MyTable";
import { ExamResultsModel } from "../../../pages/_studentspages/exams/TakeExam";
import DexieUtils from "../../../utils/dexie-utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import { myAppConfig } from '../../../config';

interface StudentListProps {
    children?: ReactNode;
}



const StudentList: React.FC<StudentListProps> = ({ children }) => {

    const navigate = useNavigate();
    const [exams, setExams] = useState<ExamResultsModel[]>([]);
    const [dexieUtils] = useState(DexieUtils<ExamResultsModel>({ tableName: 'examresults' }));

    useEffect(() => {
        const fetchData = async () => {
            await getExams()
        };
        fetchData();
    }, []);

    const getExams = async () => {
        var fetch = await dexieUtils.getAll();
        const datafetch = fetch.map((fetchedData) => ({
            ...fetchedData,
            dataID: fetchedData.id

        }))

        setExams(datafetch);
    }

    const handleViewClick = async (dataID: string) => {
        // console.log(dataID)
        navigate(`${myAppConfig.studentBaseURL}/student-exam-result/${dataID}`)

    }

    const tableColumns = [
        {
            Header: "Student",
            accessor: "userDisplayName",
        },
        {
            Header: "Date & Time Taken",
            accessor: "startDateAndTime",
        },

        {
            Header: "Result",
            accessor: "result",
        },
        {
            Header: "",
            accessor: "dataID",
            Cell: ({ value }: { value: any }) =>
                <Button variant='primary' type='button' onClick={(e) => handleViewClick(value)}>
                    <FontAwesomeIcon icon={faEye} /> View Score
                </Button>,
            disableSortBy: true
        }

    ];
    return (
        <Card>
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center'>
                    <h4></h4>
                    <div className='d-flex gap-1'>
                        {/* <Button onClick={() => handleOnCreate()}><FontAwesomeIcon icon={faPlus} /> Create</Button> */}
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <MyTable columns={tableColumns} data={exams as []} />
            </Card.Body>
        </Card>
    )
}

export default StudentList