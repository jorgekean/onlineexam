import { faGear, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useContext, useState } from 'react'
import { Button, Card, Col, Dropdown, Row, Tabs } from 'react-bootstrap'
import MyTable from '../tables/MyTable'
import { ExamModel } from './ExamsForm'
import DexieUtils from '../../utils/dexie-utils'
import NotyfContext from '../../contexts/NotyfContext'
import { Form } from 'react-bootstrap';
import StatisticSubjectPieChart from '../../pages/dashboards/Default/StatisticSubjectPieChart'
import Tab from 'react-bootstrap/Tab';
import ExamHistory from '../_studentscomponents/examhistory/ExamHistory'
import OngoingExamPage from '../../pages/_studentspages/exams/OngoingExam'
import UpcomingExams from '../_studentscomponents/exam/Exam'
import OngoingExam from '../_studentscomponents/ongoing-exam/ongoing-exam'
import ExamsForm from './ExamsForm'
import useAuth from '../../hooks/useAuth'
const tableColumns = [
    // {
    //     Header: <Form.Check type='checkbox' />,
    //     accessor: "chessckbox",
    //     Cell: () => (
    //         <Form.Check type='checkbox' />
    //     ),
    // },
    {
        Header: "Exam Name",
        accessor: "examName",
    },
    {
        Header: "Duration",
        accessor: "duration",
    },
    {
        Header: "Questions",
        accessor: "questionsCount",
    }
];

interface ExamsProps {
    // listMode?: boolean;
    // updateViewMode: (mode: boolean) => void;
    updateListMode: (mode: boolean) => void;
    setSelectedRow: (model: ExamModel | undefined) => void;
}

const Exams: React.FC<ExamsProps> = ({ updateListMode, setSelectedRow }) => {
    const [exams, setExams] = useState<ExamModel[]>([]);
    const [dexieUtils] = useState(DexieUtils<ExamModel>({ tableName: 'exams' }));
    const notyf = useContext(NotyfContext);
    const [listMode, setListMode] = useState<boolean>(true);
    const [ViewMode, setViewMode] = useState<boolean>(true);
    const { user } = useAuth()
    // const [selectedRow, setSelectedRow] = useState<ExamModel | undefined>(undefined);


    const [activeTab, setActiveTab] = useState('ongoingExams');

    const [student, setStudent] = useState<ExamModel | undefined>(undefined)

    useEffect(() => {
        const fetchData = async () => {
            await getExams()

            // Retrieve the active tab key from sessionStorage
            const storedActiveTab = sessionStorage.getItem('activeTab');
            if (storedActiveTab) {
                setActiveTab(storedActiveTab);
            }
        };
        fetchData();
    }, []);

    const getExams = async () => {
        const fetchedExams = await dexieUtils.getAll();
        const examsWithData = fetchedExams.map(exam => {
            const questionsCount = exam.selectedQuestions ? exam.selectedQuestions.length : 0;

            return {
                ...exam,
                examResultId: exam.id,
                questionsCount: questionsCount // Set questionsCount property
            };
        });

        setExams(examsWithData);
    }

    const handleTabSelect = (selectedTab: string | null) => {
        if (selectedTab) {
            // Store the active tab key in sessionStorage
            sessionStorage.setItem('activeTab', selectedTab);
            setActiveTab(selectedTab);
        }
    };

    const handleOnCreate = async () => {
        updateListMode(false)
        setSelectedRow(undefined)
    }

    const handleOnEdit = async (data: any) => {
        console.log(data, "exam - data")
        updateListMode(false)// show create/edit form             
        setSelectedRow(data as ExamModel)
    }

    const handleOnDelete = async (data: any) => {
        await dexieUtils.deleteEntity(data.id);

        // Show a success message
        notyf.open({
            background: "#4BBF73",
            message: "Exams deleted!",
            position: {
                x: "right",
                y: "bottom"
            }
        })

        getExams()
    }

    return (
        <Card>
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center'>
                    <h4>Exams</h4>
                    <div className='d-flex gap-1'>
                        {user && user.role !== "student" && <Button onClick={() => handleOnCreate()}><FontAwesomeIcon icon={faPlus} /> Create</Button>}
                    </div>
                </div>
            </Card.Header>
            <Tabs
                defaultActiveKey="ongoingExams"
                id="uncontrolled-tab-example"
                onSelect={handleTabSelect}
                activeKey={activeTab}
                className="mb-3 mt-2"
            >
                {/* <Tab eventKey="exams" title="Exams">
                    
                        <Card.Body>
                            <MyTable
                                columns={tableColumns} data={exams as []}
                                onDelete={(e) => handleOnDelete(e)}
                                onEdit={(e) => handleOnEdit(e)}
                            />
                        </Card.Body>
                </Tab>
                 */}
                <Tab eventKey="ongoingExams" title="Ongoing Exams">
                    <OngoingExam />
                </Tab>


                <Tab eventKey="upcomingExams" title="Upcoming Exam">
                    <UpcomingExams updateListMode={updateListMode} setSelectedRow={setSelectedRow}></UpcomingExams>
                    {/* <MyTable
                        columns={tableColumns} data={exams as []}

                        onDelete={(e) => handleOnDelete(e)}
                        // onView={(e) => { HandleOnView(e); }}
                        onEdit={(e) => handleOnEdit(e)}
                    /> */}
                    {/* {listMode ? <UpcomingExams setSelectedRow={setSelectedRow} /> : <ExamsForm updateListMode={updateListMode} exam={selectedRow} />} */}
                </Tab>

                <Tab eventKey="examHistory" title="Completed Exams">
                    <ExamHistory />
                </Tab>

            </Tabs>
        </Card>

    )
}

export default Exams