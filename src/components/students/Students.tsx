import { faGear, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Col, Dropdown, Row } from 'react-bootstrap'
import MyTable from '../tables/MyTable'
import { StudentModel } from './StudentsForm'
import NotyfContext from '../../contexts/NotyfContext';
import DexieUtils from '../../utils/dexie-utils'

// import { tableData, tableColumns } from "./data";

const tableColumns = [
    {
        Header: "",
        accessor: "avatar",
    },
    {
        Header: "Name",
        accessor: "displayName",
    },
    {
        Header: "Email",
        accessor: "email",
    },
    {
        Header: "User Name",
        accessor: "userName",
    },
    {
        Header: "Group",
        accessor: "studentGroup",
    }
];

interface StudentsProps {
    // listMode?: boolean;
    updateListMode: (mode: boolean) => void;
    setSelectedRow: (model: StudentModel | undefined) => void;
}

const Students: React.FC<StudentsProps> = ({ updateListMode, setSelectedRow }) => {
    const [students, setStudents] = useState<StudentModel[]>([]);
    const [dexieUtils] = useState(DexieUtils<StudentModel>({ tableName: 'students' }));
    const notyf = useContext(NotyfContext);

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

    const handleOnCreate = async () => {
        updateListMode(false)// show create/edit form             
        setSelectedRow(undefined)
    }

    const handleOnEdit = async (data: any) => {
        updateListMode(false)// show create/edit form             
        setSelectedRow(data as StudentModel)
    }

    const handleOnDelete = async (data: any) => {
        await dexieUtils.deleteEntity(data.id);

        // Show a success message
        notyf.open({
            background: "#4BBF73",
            message: "Students deleted!",
            position: {
                x: "right",
                y: "bottom"
            }
        })

        getStudents()

    }

    return (
        <Card>
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center'>
                    <h4>Students</h4>
                    <div className='d-flex gap-1'>
                        <Button onClick={() => handleOnCreate()}><FontAwesomeIcon icon={faPlus} /> Create</Button>
                        <Dropdown>
                            <Dropdown.Toggle>
                                <FontAwesomeIcon icon={faGear} />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {/* Add dropdown menu items here */}
                                <Dropdown.Item>Action 1</Dropdown.Item>
                                <Dropdown.Item>Action 2</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <MyTable columns={tableColumns} data={students as []} onEdit={(e) => handleOnEdit(e)} onDelete={(e) => handleOnDelete(e)} />
            </Card.Body>
        </Card>

    )
}

export default Students