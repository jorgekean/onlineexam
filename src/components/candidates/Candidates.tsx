import { faGear, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Dropdown, Row } from 'react-bootstrap'
import MyTable from '../tables/MyTable'
import { CandidateModel } from './CandidatesCreate'
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
        accessor: "candidateGroup",
    }
];

interface CandidatesProps {
    // listMode?: boolean;
    updateListMode: (mode: boolean) => void;
}

const Candidates: React.FC<CandidatesProps> = ({ updateListMode }) => {
    const [candidates, setCandidates] = useState<CandidateModel[]>([]);
    const [dexieUtils] = useState(DexieUtils<CandidateModel>({ tableName: 'candidates' }));

    useEffect(() => {
        const fetchData = async () => {
            var list = await dexieUtils.getAll();
            const candidatesWithDisplayName = list.map((candidate) => ({
                ...candidate,
                displayName: candidate.firstName + ' ' + candidate.lastName,
            }));

            setCandidates(candidatesWithDisplayName)
        };
        fetchData();
    }, []);

    return (
        <Card>
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center'>
                    <h4>Candidates</h4>
                    <div className='d-flex gap-1'>
                        <Button onClick={() => updateListMode(false)}><FontAwesomeIcon icon={faPlus} /> Create</Button>
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
                <MyTable columns={tableColumns} data={candidates as []} onEdit={(e) => console.log(e)} onDelete={(e) => console.log(e)} />
            </Card.Body>
        </Card>

    )
}

export default Candidates