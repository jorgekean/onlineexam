import { faGear, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Col, Dropdown, Row } from 'react-bootstrap'
import MyTable from '../tables/MyTable'
import { SectionModel } from './SectionsForm'
import DexieUtils from '../../utils/dexie-utils'
import NotyfContext from '../../contexts/NotyfContext';
import { sectionInitialData } from '../../initialdata'

// import { tableData, tableColumns } from "./data";

const tableColumns = [
    {
        Header: "Lesson Section Name",
        accessor: "sectionName",
    },
    {
        Header: "Lesson Section Path",
        accessor: "sectionPath",
    }
];

interface SectionsProps {
    // listMode?: boolean;
    updateListMode: (mode: boolean) => void;
    setSelectedRow: (model: SectionModel | undefined) => void;
}

const Sections: React.FC<SectionsProps> = ({ updateListMode, setSelectedRow }) => {
    const [sections, setSections] = useState<SectionModel[]>([]);
    const [dexieUtils] = useState(DexieUtils<SectionModel>({ tableName: 'sections' }));
    const notyf = useContext(NotyfContext);

    useEffect(() => {
        const fetchData = async () => {
            await getSections();
        };
        fetchData();
    }, []);

    const getSections = async () => {
        await dexieUtils.getAll().then(setSections)
    }

    const handleOnCreate = async () => {
        updateListMode(false)// show create/edit form 
        setSelectedRow(undefined)
    }

    const handleOnEdit = async (data: any) => {
        updateListMode(false)// show create/edit form             
        setSelectedRow(data as SectionModel)
    }

    const handleOnDelete = async (data: any) => {
        const shouldDelete = window.confirm("Are you sure you want to delete this item?");
        if (shouldDelete) {
            await dexieUtils.deleteEntity(data.id);

            // Show a success message
            notyf.open({
                background: "#4BBF73",
                message: "Section deleted!",
                position: {
                    x: "right",
                    y: "bottom"
                }
            })
        }

        getSections()
    }


    return (
        <Card>
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center'>
                    <h4>Lesson Sections</h4>
                    <div className='d-flex gap-1'>
                        <Button onClick={() => handleOnCreate()}><FontAwesomeIcon icon={faPlus} /> Create</Button>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <MyTable
                    columns={tableColumns}
                    // data={sectionInitialData as []}
                    data={sections as []}
                    onEdit={(e) => handleOnEdit(e)}
                    onDelete={(e) => handleOnDelete(e)} />
            </Card.Body>
        </Card>
    )
}

export default Sections