import { faGear, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Col, Dropdown, Row } from 'react-bootstrap'
import MyTable from '../tables/MyTable'
import { CandidateModel } from './CandidatesForm'
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
        accessor: "candidateGroup",
    }
];

interface CandidatesProps {
    // listMode?: boolean;
    updateListMode: (mode: boolean) => void;
    setSelectedRow: (model: CandidateModel | undefined) => void;
}

const Candidates: React.FC<CandidatesProps> = ({ updateListMode, setSelectedRow }) => {
    const [candidates, setCandidates] = useState<CandidateModel[]>([]);
    const [dexieUtils] = useState(DexieUtils<CandidateModel>({ tableName: 'candidates' }));
    const notyf = useContext(NotyfContext);

    useEffect(() => {
        const fetchData = async () => {
            await getCandidates()
        };
        fetchData();
    }, []);

    const getCandidates = async () => {
        var list = await dexieUtils.getAll();
        const candidatesWithDisplayName = list.map((candidate) => ({
            ...candidate,
            displayName: candidate.firstName + ' ' + candidate.lastName,
        }));

        setCandidates(candidatesWithDisplayName)
    }

    const handleOnCreate = async () => {
        updateListMode(false)// show create/edit form             
        setSelectedRow(undefined)
    }

    const handleOnEdit = async (data: any) => {
        updateListMode(false)// show create/edit form             
        setSelectedRow(data as CandidateModel)
    }

    const handleOnDelete = async (data: any) => {
        await dexieUtils.deleteEntity(data.id);

        // Show a success message
        notyf.open({
            background: "#4BBF73",
            message: "Candidates deleted!",
            position: {
                x: "right",
                y: "bottom"
            }
        })

        getCandidates()

    }

    return (
        <Card>
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center'>
                    <h4>Candidates</h4>
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
                <MyTable columns={tableColumns} data={candidates as []} onEdit={(e) => handleOnEdit(e)} onDelete={(e) => handleOnDelete(e)} />
            </Card.Body>
        </Card>

    )
}

export default Candidates