import { faGear, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Col, Dropdown, Row } from 'react-bootstrap'
import MyTable from '../../tables/MyTable'
import { NotificationModel } from './StudentNotificationsForm'
import DexieUtils from '../../../utils/dexie-utils'
import NotyfContext from '../../../contexts/NotyfContext';
import useAuth from '../../../hooks/useAuth'

// import { tableData, tableColumns } from "./data";

const tableColumns = [
    {
        Header: "Date Created",
        accessor: "dateCreated",
    },
    {
        Header: "Subject",
        accessor: "subjectText",
    }
];

interface NotificationProps {
    // listMode?: boolean;
    updateListMode: (mode: boolean) => void;
    setSelectedRow: (model: NotificationModel | undefined) => void;
}

const StudentNotifications: React.FC<NotificationProps> = ({ updateListMode, setSelectedRow }) => {
    const [notifications, setNotifications] = useState<NotificationModel[]>([]);
    const [dexieUtils] = useState(DexieUtils<NotificationModel>({ tableName: 'notifications' }));
    const notyf = useContext(NotyfContext);
    const { user } = useAuth()

    useEffect(() => {
        const fetchData = async () => {
            await getNotifications();
        };
        fetchData();
    }, []);

    const getNotifications = async () => {
        await dexieUtils.getAll().then(setNotifications)
    }

    const handleOnCreate = async () => {
        updateListMode(false)// show create/edit form             
        setSelectedRow(undefined)
    }

    const handleOnEdit = async (data: any) => {
        updateListMode(false)// show create/edit form             
        setSelectedRow(data as NotificationModel)
    }

    const handleOnDelete = async (data: any) => {
        const shouldDelete = window.confirm("Are you sure you want to delete this item?");

        if (shouldDelete) {
            await dexieUtils.deleteEntity(data.id);

            // Show a success message
            notyf.open({
                background: "#4BBF73",
                message: "Notification deleted!",
                position: {
                    x: "right",
                    y: "bottom"
                }
            })
        }

        getNotifications()
    }



    return (

        <Card>
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center'>
                    <h4>Notification (0)</h4>
                    <div className='d-flex gap-1'>
                        {user && user.role !== "student" && <Button onClick={() => handleOnCreate()}><FontAwesomeIcon icon={faPlus} /> Create</Button>}
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <MyTable
                    columns={tableColumns}
                    data={notifications as []}
                    onEdit={user && user.role !== "student" ? (e) => handleOnEdit(e) : undefined}
                    onDelete={user && user.role !== "student" ? (e) => handleOnDelete(e) : undefined}
                    useDangerouslySetInnerHTM={true} />
            </Card.Body>
        </Card>

    )
}

export default StudentNotifications