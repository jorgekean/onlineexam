import { faGear, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Dropdown, Row } from 'react-bootstrap'
import MyTable from '../tables/MyTable'
import { SectionModel } from './SectionsForm'
import DexieUtils from '../../utils/dexie-utils'

// import { tableData, tableColumns } from "./data";

const tableColumns = [
    {
        Header: "Section Name",
        accessor: "sectionName",
    },
    {
        Header: "Section Path",
        accessor: "sectionPath",
    }
];

interface SectionsProps {
    // listMode?: boolean;
    updateListMode: (mode: boolean) => void;
}

const Sections: React.FC<SectionsProps> = ({ updateListMode }) => {
    const [Sections, setSections] = useState<SectionModel[]>([]);
    const [dexieUtils] = useState(DexieUtils<SectionModel>({ tableName: 'sections' }));

    useEffect(() => {
        const fetchData = async () => {
            await dexieUtils.getAll().then(setSections);
        };
        fetchData();
    }, []);

    return (
        <Card>
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center'>
                    <h4>Sections</h4>
                    <div className='d-flex gap-1'>
                        <Button onClick={() => updateListMode(false)}><FontAwesomeIcon icon={faPlus} /> Create</Button>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <MyTable columns={tableColumns} data={Sections as []} onEdit={(e) => console.log(e)} onDelete={(e) => console.log(e)} />
            </Card.Body>
        </Card>

    )
}

export default Sections