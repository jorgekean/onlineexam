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
        Header: "",
        accessor: "selected",
        disableSortBy: true
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
interface PickQuestionProps {
    show: boolean;
    onClose: () => void;
    onSave: (questions: QuestionModel[]) => void;
    initialSelectedQuestions?: QuestionModel[];
}


const PickQuestionModal: React.FC<PickQuestionProps> = ({ show, onClose, onSave, initialSelectedQuestions }) => {
    const [questions, setQuestions] = useState<QuestionModel[]>([]);
    const [dexieUtils] = useState(DexieUtils<QuestionModel>({ tableName: 'questions' }));
    const notyf = useContext(NotyfContext);
    const [selectedQuestions, setSelectedQuestions] = useState<QuestionModel[] | undefined>(initialSelectedQuestions);

    useEffect(() => {
        const fetchData = async () => {
            await getQuestions()
        };
        fetchData();
    }, [initialSelectedQuestions]);

    const getQuestions = async () => {
        const data = await dexieUtils.getAll()
        // Update the 'selected' property of each object in the 'data' array
        if (initialSelectedQuestions) {
            data.forEach(d => {
                d.selected = !!initialSelectedQuestions.find(f => f.id === d.id);
            });
        }

        setQuestions(data)
        // console.log(data, selectedQuestions, initialSelectedQuestions, "selectedQuestions")
    }

    const handleSelectedQuestionsChange = (items: QuestionModel[]) => {
        setSelectedQuestions(items);
    };

    const handleOnSave = () => {
        onSave(selectedQuestions as QuestionModel[])
    }

    return (
        <>
            <Modal show={show} onHide={onClose} size='lg'>
                <Modal.Header closeButton><h3>Pick Questions</h3></Modal.Header>
                <Modal.Body className="text-center m-3">
                    <MyTable
                        columns={tableColumns}
                        data={(questions.sort((a, b) => a.section.localeCompare(b.section))) as []}// fixed ordering for now
                        // onEdit={(e) => handleOnEdit(e)}
                        // onDelete={(e) => handleOnDelete(e)}
                        useDangerouslySetInnerHTM={true}
                        onSelectedItemsChange={handleSelectedQuestionsChange}
                        showCheckboxSelection={true}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>
                        Close
                    </Button>{" "}
                    <Button variant={"primary"} onClick={handleOnSave}>
                        Save changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}

export default PickQuestionModal;
