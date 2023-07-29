import { faGear, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Dropdown, Row } from 'react-bootstrap'
import MyTable from '../tables/MyTable'
import { GroupModel } from './GroupsCreate'
import DexieUtils from '../../utils/dexie-utils'

// import { tableData, tableColumns } from "./data";

const tableColumns = [
    {
        Header: "Group Name",
        accessor: "group",
    },
    {
        Header: "Description",
        accessor: "description",
    }
];

interface GroupsProps {
    // listMode?: boolean;
    updateListMode: (mode: boolean) => void;
}

const Groups: React.FC<GroupsProps> = ({ updateListMode }) => {
    const [groups, setGroups] = useState<GroupModel[]>([]);
    const [dexieUtils] = useState(DexieUtils<GroupModel>({ tableName: 'groups' }));

    useEffect(() => {
        const fetchData = async () => {
            await dexieUtils.getAll().then(setGroups);
        };
        fetchData();
    }, []);

    return (
        <Card>
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center'>
                    <h4>Groups</h4>
                    <div className='d-flex gap-1'>
                        <Button onClick={() => updateListMode(false)}><FontAwesomeIcon icon={faPlus} /> Create</Button>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <MyTable columns={tableColumns} data={groups as []} onEdit={(e) => console.log(e)} onDelete={(e) => console.log(e)} />
            </Card.Body>
        </Card>

    )
}

export default Groups