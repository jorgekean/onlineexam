import { faClock, faGear, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useContext, useState } from 'react'
import { Button, Card, Col, Dropdown, ProgressBar, Row } from 'react-bootstrap'
import { ExamModel } from '../exams/ExamsForm'
import DexieUtils from '../../utils/dexie-utils'
import { useNavigate } from 'react-router-dom'
import MyTable from '../tables/MyTable'
import { ExamResultsModel } from '../../pages/_studentspages/exams/TakeExam'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { myAppConfig } from '../../config'


// import { tableData, tableColumns } from "./data";


interface UnscoredProps {
    data: ExamModel[]
    // setData: (data: ExamModel[]) => void;
}

const EssayTable: React.FC<UnscoredProps> = ({ data }) => {

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            console.log(data, "unces")
        };
        fetchData();
    }, [data]);

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
            Header: "End Date",
            accessor: "endDate",
            Cell: ({ value }: any) => {
                const formattedDate = new Date(value).toLocaleString('en-US', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true,
                });
                return formattedDate;
            },
        },
        {
            Header: "Scored/Total Essays",
            accessor: "progress",
            Cell: ({ value }: any) => {
                console.log(value)
                const progressValue = value.totalScored//(value.score / value.totalEssays) * 100;
                const total = value.totalEssays
                return (
                    <ProgressBar variant='success' now={progressValue} label={progressValue === 0 ? `0/${total}` : `${progressValue}/${total}`} max={value} />
                );
            },
        },
        {
            Header: "",
            accessor: "button",
            Cell: ({ row }: { row: any }) => {
                return (
                    <Button variant='primary' type='button' onClick={(e) => handleOnViewClick(row.values.id)}>
                        <FontAwesomeIcon icon={faEye} /> View
                    </Button>
                );
            },
            className: "text-end",
            disableSortBy: true
        }
    ];

    const handleOnViewClick = async (examId: number) => {
        // essay-table
        navigate(`${myAppConfig.baseURL}/essay-scoring/${examId}`);
        // navigate(`${myAppConfig.baseURL}/essay-table`);
    };

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
                    <MyTable columns={tableColumns} data={data as []} />
                </Card.Body>
            </Card>
        </>
    )
}

export default EssayTable