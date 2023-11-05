import { faGear, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Col, Dropdown, Row } from 'react-bootstrap'
import MyTable from '../tables/MyTable'
// import { StudentModel } from './StudentsForm'
import { TeacherModel } from './TeacherForm'
// import { StudentDataModel } from './StudentsProfile'
// import { StudentModel1 } from './StudentsProfile'
import { useNavigate } from "react-router-dom";
import NotyfContext from '../../contexts/NotyfContext';
import DexieUtils from '../../utils/dexie-utils';
import { teacherInitialData } from '../../initialdata'

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
    }
];

interface TeacherProps {
    // listMode?: boolean;
    updateListMode: (mode: boolean) => void;
    updateView: (mode: boolean) => void;
    setSelectedRow: (model: TeacherModel | undefined) => void;
    teacher?: TeacherModel;
}

const Teacher: React.FC<TeacherProps> = ({ updateListMode, setSelectedRow, updateView }) => {
    const [teachers, setTeacher] = useState<TeacherModel[]>([]);
    const [dexieUtils] = useState(DexieUtils<TeacherModel>({ tableName: 'teachers' }));
    const notyf = useContext(NotyfContext);

    useEffect(() => {
        const fetchData = async () => {
            await getTeachers()
        };
        fetchData();
    }, []);

    const getTeachers = async () => {
        var list = await dexieUtils.getAll();
        const teachersWithDisplayName = list.map((teacher) => ({
            ...teacher,
            displayName: teacher.firstName + ' ' + teacher.lastName,
        }));

        setTeacher(teachersWithDisplayName)
    }

    const handleOnCreate = async () => {
        updateListMode(false)// show create/edit form             
        setSelectedRow(undefined)
    }

    const handleOnEdit = async (data: any) => {
        updateListMode(false)// show create/edit form             
        setSelectedRow(data as TeacherModel)
    }

    const HandleOnView = async (data: any) => {
        updateView(false)// show student profile/ list
        setSelectedRow(data as TeacherModel)
    }

    const handleOnDelete = async (data: any) => {
        await dexieUtils.deleteEntity(data.id);

        // Show a success message
        notyf.open({
            background: "#4BBF73",
            message: "Teacher deleted!",
            position: {
                x: "right",
                y: "bottom"
            }
        })

        getTeachers()

    }

    return (
        <Card>
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center'>
                    <h4>Teachers</h4>
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
                <MyTable columns={tableColumns}
                    data={teachers as []}
                    // data={teacherInitialData as []}

                    onEdit={(e) => handleOnEdit(e)}
                    onDelete={(e) => handleOnDelete(e)}
                    onView={(e) => HandleOnView(e)}
                />
            </Card.Body>
        </Card>
    )
}

export default Teacher;