import { faArrowLeft, faGear, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useContext, useState } from 'react'
import { Button, Card, Col, Dropdown, ProgressBar, Row } from 'react-bootstrap'
import MyTable from '../tables/MyTable'
// import { SubjecModel } from './SubjectForm'
import { StudentDataModel } from '../students/StudentsProfile'
import DexieUtils from '../../utils/dexie-utils'
import NotyfContext from '../../contexts/NotyfContext'

import { Link, useNavigate } from 'react-router-dom';
import { myAppConfig } from '../../config'
// import { tableData, tableColumns } from "./data";

const tableColumns = [
    {
        Header: "Student Name",
        accessor: "displayName",
    },
    {
        Header: "Performance",
        Cell: () => (
            <ProgressBar now={50} label={`${50}%`} />
        )
    }
];

interface SubjectProps {
    // listMode?: boolean;
    updateViewMode: (mode: boolean) => void;
    subject?: SubjecModel;
    // setSelectedRow: (model: SubjecModel | undefined) => void;
}

export interface SubjecModel {
    id: string;
    subject: string;
    description: string;
}

const SubjectMembers: React.FC<SubjectProps> = ({ updateViewMode, subject }) => {

    const navigate = useNavigate();
    const initialFormState: SubjecModel = {
        id: subject ? subject.id : '',
        subject: subject ? subject.subject : '',
        description: subject ? subject.description : '',

    }

    const [students, setStudents] = useState<StudentDataModel[]>([]);
    const [dexieUtils] = useState(DexieUtils<StudentDataModel>({ tableName: 'students' }));
    const [formState, setFormState] = useState<SubjecModel>(initialFormState);
    const notyf = useContext(NotyfContext);

    useEffect(() => {
        const fetchData = async () => {
            await getStudents()
        };
        fetchData();
    }, []);

    const getStudents = async () => {
        var list = await dexieUtils.getAll();
        const studentsPerGroup = list.filter((student) => student.studentSubject === formState.subject);

        const studentsWithDisplayName = list.map((student) => ({
            ...student,
            displayName: student.firstName + ' ' + student.lastName,
            subjectID: student.id
        }));

        const studentsToShow = studentsPerGroup.map(student => {
            const matchingStudent = studentsWithDisplayName.find(s => s.id === student.id);
            return matchingStudent || student;

        });

        setStudents(studentsToShow);

    };

    const handleOnList = async () => {
        // updateListMode(true)// show create/edit form   
        updateViewMode(true)
        // setSelectedRow(undefined)
    }

    // const handleOnEdit = async (data: any) => {
    //     updateListMode(false)// show create/edit form             
    //     // setSelectedRow(data as SubjecModel)
    // }

    // const handleOnView = async (data: any) => {
    //     updateListMode(false)// show create/edit form     
    //     updateViewMode(false)
    //     // setSelectedRow(data as SubjecModel)
    // }

    // const handleOnDelete = async (data: any) => {
    //     await dexieUtils.deleteEntity(data.id);

    //     // Show a success message
    //     notyf.open({
    //         background: "#4BBF73",
    //         message: "Students deleted!",
    //         position: {
    //             x: "right",
    //             y: "bottom"
    //         }
    //     })

    //     getGroups()
    // }

    return (
        <Card>
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center'>
                    <h4>Student List for Subject - {formState.subject}</h4>
                    <div className='d-flex gap-1'>
                        <Button onClick={() => handleOnList()}><FontAwesomeIcon icon={faArrowLeft} /> Back</Button>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                {students.map((student) => (
                <MyTable key={student.id}
                    columns={tableColumns}
                    data={students as []}
                    // onView={(e) => {  navigate(`${myAppConfig.baseURL}/student-subject-performance`) }}
                     onView={(e) => {  navigate(`${myAppConfig.baseURL}/student-subject-performance/${student.id}`)}}
                        />
                    ))
                    }
            </Card.Body>
        </Card>

    )
}

export default SubjectMembers