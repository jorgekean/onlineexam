import { faGear, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Col, Dropdown, Row } from 'react-bootstrap'
import MyTable from '../tables/MyTable'
import { StudentModel } from './StudentsForm'
// import { StudentModel1 } from './StudentsProfile'
import { useNavigate } from "react-router-dom";
import NotyfContext from '../../contexts/NotyfContext';
import DexieUtils from '../../utils/dexie-utils'
import { Form } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';


import { ExamResultsModel } from '../../pages/_studentspages/exams/TakeExam'
import { Value } from 'classnames'
// import { tableData, tableColumns } from "./data";



interface StudentHistoryProps {
    StudentData: (mode: boolean) => void;
    student?: StudentModel;
    studID: string | undefined;

}
export interface studentHistoryModel {
    id: string;
    displayName: string;
}

const StudentExamHistory: React.FC<StudentHistoryProps> = ({ StudentData, student, studID }) => {
    const [students, setStudents] = useState<ExamResultsModel[]>([]);
    const [dexieUtils] = useState(DexieUtils<ExamResultsModel>({ tableName: 'examresults' }));
    const notyf = useContext(NotyfContext);

    const initialFormState: studentHistoryModel = {
        id: student ? student.id : '',
        displayName: student ? student.displayName : ''
    };
    const [formState, setFormState] = useState<studentHistoryModel>(initialFormState);
    console.log("id", studID);
    useEffect(() => {
        const fetchData = async () => {
            await getStudents()
        };
        fetchData();
    }, []);

    const getStudents = async () => {
        var fetchedData = await dexieUtils.getAll();
        const FilteredUserData = fetchedData.filter(student => student.userId === studID)
        const FilterfetchedData = FilteredUserData.map(data => ({
            ...data,
        }));
        setStudents(FilterfetchedData)
    }
    const test = students.map(student => student.accuracyRatio);
    console.log(test)

    const tableColumns = [
        {
            Header: <Form.Check type='checkbox' />,
            accessor: "chessckbox",
            Cell: () => (
                <Form.Check type='checkbox' />
            ),
        },
        {
            Header: "Exam",
            accessor: "examName",
        },
        {
            Header: "Date",
            accessor: "startDateAndTime",
        },
        {
            Header: "Time Taken",
            accessor: "duration",
        },
        {
            Header: "Results",
            accessor: "accuracyRatio",
            Cell: ({ value }: { value: any }) =>
                <ProgressBar now={value} label={`${value}%`} className='background-color: black' />,
            disableSortBy: true
        }
    ];

















    const viewStudentPerformance = async (data: any) => {
        StudentData(false);
    }




    return (
        <Card>
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center'>
                    <h4>Exam History</h4>
                </div>
            </Card.Header>
            <Card.Body>
                <MyTable columns={tableColumns}
                    data={students as []}

                    onView={(e) => { viewStudentPerformance(e); }}
                />
            </Card.Body>
        </Card>

    )
}

export default StudentExamHistory