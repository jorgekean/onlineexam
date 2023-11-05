import React, { ReactNode, useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async';

import Exams from '../../components/exams/Exams';
import DidYouKnow from '../../components/wiki/DidYouKnow';
import RelatedTasks from '../../components/relatedtask/RelatedTasks';
import { QuestionModel } from '../../components/questions/QuestionsForm';
import EssayScoring from '../../components/essayscoring/EssayScoring';
import { useParams } from 'react-router-dom';
import { ExamResultsModel } from '../_studentspages/exams/TakeExam';
import MyTable from '../../components/tables/MyTable';

const wikiItems = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Nulla facilisi. Sed tincidunt nisl sed ipsum interdum, at suscipit quam facilisis.',
];

interface EssayScoringExamProps {
    children?: ReactNode;
}

const EssayScoringExamPage: React.FC<EssayScoringExamProps> = ({ children }) => {

    const { examId } = useParams();

    const tableColumns = [
        {
            Header: "",
            accessor: "id"
        },
        {
            Header: "Essay Name",
            accessor: "examName",
        },
        {
            Header: "Students Number",
            accessor: "endDate",
        },
        {
            Header: "Scored/Total",
            accessor: "progress",
        },
        {
            Header: "",
            accessor: "button",
            className: "text-end",
            disableSortBy: true
        }
    ];

    // const [listMode, setListMode] = useState<boolean>(true);
    // const [essays, setEssays] = useState<QuestionModel | undefined>(undefined)

    return (
        <Card>
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center'>
                    <h4>Essay</h4>
                    <div className='d-flex gap-1'>
                        {/* <Button onClick={() => handleOnCreate()}><FontAwesomeIcon icon={faPlus} /> Create</Button> */}
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <MyTable columns={tableColumns} data={[]} />
            </Card.Body>
        </Card>
    )
}

export default EssayScoringExamPage