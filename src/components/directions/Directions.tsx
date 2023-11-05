import { faGear, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState, useContext } from 'react'
import { Button, Card, Col, Dropdown, Row } from 'react-bootstrap'
import MyTable from '../tables/MyTable'
import { DirectionModel } from './DirectionsForm'
import DexieUtils from '../../utils/dexie-utils'
import NotyfContext from '../../contexts/NotyfContext';
import { Form } from 'react-bootstrap';
import { directionInitialData } from '../../initialdata'

// import { tableData, tableColumns } from "./data";


const tableColumns = [
    // {
    //     Header: (
    //         <Form.Check
    //             type='checkbox'
    //         />
    //     ),
    //     accessor: "chessckbox",

    // },

    {
        Header: "Direction Name",
        accessor: "directionName",
    }
];

interface DirectionProps {
    // listMode?: boolean;
    updateListMode: (mode: boolean) => void;
    setSelectedRow: (model: DirectionModel | undefined) => void;

}

const Direction: React.FC<DirectionProps> = ({ updateListMode, setSelectedRow }) => {
    const [directions, setDirections] = useState<DirectionModel[]>([]);
    const [dexieUtils] = useState(DexieUtils<DirectionModel>({ tableName: 'directions' }));
    const notyf = useContext(NotyfContext);
    useEffect(() => {
        const fetchData = async () => {
            await dexieUtils.getAll().then(setDirections);
        };
        fetchData();
    }, []);

    const handleOnEdit = async (data: any) => {
        updateListMode(false)// show create/edit form             
        setSelectedRow(data as DirectionModel)
    }
    const HandleOnCreate = async (data: any) => {
        updateListMode(false)// show create/edit form             
        setSelectedRow(undefined)
    }
    const handleOnDelete = async (data: any) => {

        const shouldDelete = window.confirm("Are you sure you want to delete this item?");
        if (shouldDelete) {
            await dexieUtils.deleteEntity(data.id);
            notyf.open({
                background: "#4BBF73",
                message: "Direction deleted!",
                position: {
                    x: "right",
                    y: "bottom"
                }
            })
        }
        // Show a success message

        await dexieUtils.getAll().then(setDirections);

    }

    return (
        <Card>
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center'>
                    <h4>Directions</h4>
                    <div className='d-flex gap-1'>
                        <Button onClick={() => HandleOnCreate(false)}><FontAwesomeIcon icon={faPlus} /> Create</Button>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <MyTable columns={tableColumns}
                    data={directions as []}
                    // data={directionInitialData as []}
                    onEdit={(e) => handleOnEdit(e)}
                    onDelete={(e) => handleOnDelete(e)} />
            </Card.Body>
        </Card>

    )
}

export default Direction