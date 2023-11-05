import { Button, Card, Col, Dropdown, Row, Container, Table } from 'react-bootstrap'
import { faArrowLeft, faSquare, faBarChart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import MyTable from '../tables/MyTable';
import { StudentModel } from '../students/StudentsForm';
import DexieUtils from '../../utils/dexie-utils';
;
// import Barchart from '../Barchart';

const tableColumns = [
    {
        Header: "Name",
        accessor: "displayName",
    },
    {
        Header: "Email",
        accessor: "email",
    },
    {
        Header: "Exam Count",
        accessor: "ExamCount",
    },
    {
        Header: "Average Scores",
        accessor: "AverageScores",
    },
    {
        Header: "Last Exam",
        accessor: "LastExam",
    }
];
interface CandidateStatisticsProps {
    UpdateCandidateStatisticsView: (mode: boolean) => void;
    student?: StudentModel;
}
const CandidateStatistics: React.FC<CandidateStatisticsProps> = ({ UpdateCandidateStatisticsView }) => {

    const [students, setStudents] = useState<StudentModel[]>([]);
    const [dexieUtils] = useState(DexieUtils<StudentModel>({ tableName: 'students' }));
    
    useEffect(() => {
        const fetchData = async () => {
            await getStudents()
        };
        fetchData();
    }, []);


    const getStudents = async () => {
        var list = await dexieUtils.getAll();
        const studentsWithDisplayName = list.map((student) => ({
            ...student,
            displayName: student.firstName + ' ' + student.lastName,
        }));

        setStudents(studentsWithDisplayName)
    }

    const BackToStatistics = async () => {
     UpdateCandidateStatisticsView(true)// show create/edit form 
    }

    return (
        <Card>
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center pt-0' >
                    <h4>Candidate Statistics</h4>
                    <div className='d-flex gap-1'>

                        <div className='d-flex gap-1'>
                            <Button onClick={() =>BackToStatistics() }><FontAwesomeIcon icon={faArrowLeft} /> Back</Button>
                        </div>

                    </div>
                </div>
            </Card.Header>
            <Card.Body className=''>

                <MyTable columns={tableColumns}
                    data={students as []}
                />  
            </Card.Body>
        </Card >

    )

}
export default CandidateStatistics
