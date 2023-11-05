import { faGear, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Col, Dropdown, Row } from 'react-bootstrap'
import MyTable, { SelectColumnFilter } from '../tables/MyTable'
import { QuestionModel } from './QuestionsForm'
import NotyfContext from '../../contexts/NotyfContext';
import DexieUtils from '../../utils/dexie-utils';
import { questionInitialData } from '../../initialdata'
// import { tableData, tableColumns } from "./data";

import './questions.css'
import { Column } from 'react-table'

const tableColumns: Column[] | any = [
    {
        Header: "Question Type",
        accessor: "questionTypeDesc",
        filter: true,
        Filter: SelectColumnFilter
    },
    {
        Header: "Section",
        accessor: "section",
        filter: true,
        Filter: SelectColumnFilter
    },
    {
        Header: "Question Text",
        accessor: "questionText",
    }
];

interface QuestionsProps {
    // listMode?: boolean;
    updateListMode: (mode: boolean) => void;
    setSelectedRow: (model: QuestionModel | undefined) => void;
}

const Questions: React.FC<QuestionsProps> = ({ updateListMode, setSelectedRow }) => {
    const [questions, setQuestions] = useState<QuestionModel[]>([]);
    const [dexieUtils] = useState(DexieUtils<QuestionModel>({ tableName: 'questions' }));
    const notyf = useContext(NotyfContext);

    useEffect(() => {
        const fetchData = async () => {
            await getQuestions()
        };
        fetchData();
    }, []);

    const getQuestions = async () => {
        await dexieUtils.getAll().then(setQuestions)
    }

    const handleOnCreate = async () => {
        updateListMode(false)// show create/edit form             
        setSelectedRow(undefined)
    }

    const handleOnEdit = async (data: any) => {
        updateListMode(false)// show create/edit form             
        setSelectedRow(data as QuestionModel)
    }

    const handleOnDelete = async (data: any) => {
        await dexieUtils.deleteEntity(data.id);

        // Show a success message
        notyf.open({
            background: "#4BBF73",
            message: "Questions deleted!",
            position: {
                x: "right",
                y: "bottom"
            }
        })

        getQuestions()
    }

    return (
        <Card>
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center'>
                    <h4>Questions</h4>
                    <div className='d-flex gap-1'>
                        <Button onClick={() => handleOnCreate()}><FontAwesomeIcon icon={faPlus} /> Create</Button>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <MyTable
                    columns={tableColumns}
                    // data={questionInitialData as []}
                    data={questions as []}
                    onEdit={(e) => handleOnEdit(e)}
                    onDelete={(e) => handleOnDelete(e)}
                    useDangerouslySetInnerHTM={true}
                />
            </Card.Body>
        </Card>

    )
}

export default Questions