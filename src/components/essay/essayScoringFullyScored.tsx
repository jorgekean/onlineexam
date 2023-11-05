import { faGear, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Col, Dropdown, ProgressBar, Row } from 'react-bootstrap'
import MyTable from '../tables/MyTable'
import { StudentModel } from '../students/StudentsForm'
import { StudentDataModel } from '../students/StudentsProfile'
import { useNavigate } from "react-router-dom";
import NotyfContext from '../../contexts/NotyfContext';
import DexieUtils from '../../utils/dexie-utils'
import { StudentInitialData } from '../../initialdata'
import { ExamResultsModel } from '../../pages/_studentspages/exams/TakeExam'


const tableColumns = [
    {
        Header: "Exam Name",
        accessor: "examName",
    },
    {
        Header: "End Date",
        accessor: "endDateAndTime",
    },
    {
        Header: "Scored",
        Cell: () => (
            <ProgressBar now={100} label={`${100}%`} />
        ),
    }
];

interface EssayScoringProps {
    setSelectedRow: (model: ExamResultsModel | undefined) => void;
    onViewProfile: (mode: boolean) => void;
}

const EssayScoringFullyScored: React.FC<EssayScoringProps> = ({ setSelectedRow, onViewProfile }) => {
    const [examResult, setExamResults] = useState<ExamResultsModel[]>([]);
    const [dexieUtils] = useState(DexieUtils<ExamResultsModel>({ tableName: 'examresults' }));

    useEffect(() => {
        const fetchData = async () => {
            await dexieUtils.getAll().then(setExamResults);
        };
        fetchData();
    }, []);

    const HandleviewProfile = async (data: any) => {
        onViewProfile(false)// show profile/list            
        setSelectedRow(data as ExamResultsModel)
    }

    return (
        <Card>
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center'>
                    <h4>Fully Scored</h4>
                </div>
            </Card.Header>
            <Card.Body>
                <MyTable columns={tableColumns}
                    data={examResult as []}

                    onView={(e) => { HandleviewProfile(e); }}
                />
            </Card.Body>
        </Card >

    )
}

export default EssayScoringFullyScored