import { Button, Card, Col, Dropdown, Row, Container, Table } from 'react-bootstrap'
import { faArrowLeft, faSquare, faBarChart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import MyTable from '../tables/MyTable';
import { StudentModel } from '../students/StudentsForm';
import DexieUtils from '../../utils/dexie-utils';


const tableColumns = [
    {
        Header: "Student Name",
        accessor: "displayName",
    },
    {
        Header: "Number of Exams",
        accessor: "ExamCount",
    },
    {
        Header: "Average Scores",
        accessor: "AverageScores",
    },
    
];
interface MeritListProps {
    UpdateMeritListView: (mode: boolean) => void;
    student?: StudentModel;
}
const MeritList: React.FC<MeritListProps> = ({ UpdateMeritListView }) => {

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
     UpdateMeritListView(true)// show create/edit form 
    }

    return (
        <Card >
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center pt-0' >
                    <h4>Merit List</h4>
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
export default MeritList
