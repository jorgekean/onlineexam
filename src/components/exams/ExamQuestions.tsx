import { faGear, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Col, Dropdown, Modal, Row } from 'react-bootstrap'
import MyTable, { SelectColumnFilter } from '../tables/MyTable'
import NotyfContext from '../../contexts/NotyfContext';
import DexieUtils from '../../utils/dexie-utils'

import { Column } from 'react-table'
import { QuestionModel } from '../questions/QuestionsForm'

const tableColumns: Column[] | any = [
    // {
    //     Header: "",
    //     id: "checkbox",
    //     accessor: "",
    //     Cell: ({ row }: { row: any }) => {
    //         return (
    //             <input type="checkbox" />
    //         );
    //     },
    //     filterable: false,
    //     headerCheckboxProps: {
    //         indeterminate: true, // When some but not all rows are selected
    //     }
    // },
    {
        Header: "",
        accessor: "id"
    },
    {
        Header: "Section",
        accessor: "section",
        filter: true,
        Filter: SelectColumnFilter
    },
    {
        Header: "Question Type",
        accessor: "questionTypeDesc",
        filter: true,
        Filter: SelectColumnFilter
    },
    {
        Header: "Question Text",
        accessor: "questionText",
    }
];
interface ExamQuestionsProps {
    show: boolean;
    onClose: () => void;
    onSave: (questions: QuestionModel[]) => void;
}


const ExamQuestions: React.FC<ExamQuestionsProps> = ({ show, onClose, onSave }) => {
    const [questions, setQuestions] = useState<QuestionModel[]>([]);
    const [dexieUtils] = useState(DexieUtils<QuestionModel>({ tableName: 'questions' }));
    const notyf = useContext(NotyfContext);
    const [selectedQuestions, setSelectedQuestions] = useState<QuestionModel[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            await getQuestions()
        };
        fetchData();
    }, []);

    const getQuestions = async () => {
        await dexieUtils.getAll().then(setQuestions)
    }

    const handleSelectedQuestionsChange = (items: QuestionModel[]) => {
        setSelectedQuestions(items);
    };

    const handleOnSave = () => {
        onSave(selectedQuestions)
    }

    return (
        <>
            <Row>
                <Col>
                    <Button type='button' size="sm" variant="primary me-2" onClick={() => { }}>Pick Questions</Button>
                </Col>
            </Row>
            <Row>
                <MyTable columns={tableColumns} data={[]}></MyTable>
            </Row>
        </>

    )
}

export default ExamQuestions;
