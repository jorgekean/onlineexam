import { faGear, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useContext, useState } from 'react'
import { Button, Card, Col, Dropdown, Row } from 'react-bootstrap'
import MyTable from '../tables/MyTable'
import { SubjecModel } from './SubjectForm'
import DexieUtils from '../../utils/dexie-utils'
import NotyfContext from '../../contexts/NotyfContext'
import { StudentModel } from '../students/StudentsForm'
import { subjectInitialData } from '../../initialdata'

// import { tableData, tableColumns } from "./data";

const tableColumns = [
    {
        Header: "Subject Name",
        accessor: "subject",
    },
    {
        Header: "Description",
        accessor: "description",
    },
    {
        Header: "Students",
        accessor: "students",
    },
];

interface SubjectProps {
    // listMode?: boolean;
    updateListMode: (mode: boolean) => void;
    updateViewMode: (mode: boolean) => void;
    setSelectedRow: (model: SubjecModel | undefined) => void;
}

const Subjects: React.FC<SubjectProps> = ({ updateListMode, setSelectedRow, updateViewMode }) => {
    const [subjects, setSubjects] = useState<SubjecModel[]>([]);
    const [dexieUtils] = useState(DexieUtils<SubjecModel>({ tableName: 'subjects' }));

    const notyf = useContext(NotyfContext);

    useEffect(() => {
        const fetchData = async () => {
            await getSubjects()
        };
        fetchData();
    }, []);

    const getSubjects = async () => {
        await dexieUtils.getAll().then(setSubjects);
    }

    const handleOnCreate = async () => {
        updateListMode(false)// show create/edit form             
        setSelectedRow(undefined)
    }

    const handleOnEdit = async (data: any) => {
        updateListMode(false)// show create/edit form             
        setSelectedRow(data as SubjecModel)
    }

    const handleOnView = async (data: any) => {
        // show create/edit form     
        updateViewMode(false)
        setSelectedRow(data as SubjecModel)
    }

    const handleOnDelete = async (data: any) => {
        await dexieUtils.deleteEntity(data.id);

        // Show a success message
        notyf.open({
            background: "#4BBF73",
            message: "Subject deleted!",
            position: {
                x: "right",
                y: "bottom"
            }
        })

        getSubjects()
    }

    // const displayCount = (dexieUtil: any, values: any, setTo: any) => {

    //     const getnum = async () => {
    //         let list = await dexieUtil.getAll();
    //         let count = list.map((values: any) => ({
    //             ...values,
    //             count: list.length
    //         }));

    //         setTo(count)
    //     }

    //     useEffect(() => {
    //         async function fetchData() {
    //             await getnum();
    //         }
    //         fetchData();
    //     }, []);
    // }

    return (
        <Card>
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center'>
                    <h4>Subjects</h4>
                    <div className='d-flex gap-1'>
                        <Button onClick={() => handleOnCreate()}><FontAwesomeIcon icon={faPlus} /> Create</Button>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <MyTable
                    columns={tableColumns}
                    // data={subjectInitialData as []}
                    data={subjects as []}

                    // onView={(e) => handleOnView(e)}
                    onEdit={(e) => handleOnEdit(e)}
                    onDelete={(e) => handleOnDelete(e)}
                />
            </Card.Body>
        </Card>

    )
}

export default Subjects