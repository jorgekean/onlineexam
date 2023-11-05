import { faUsers, faHome, faBook, faGear, faQuestion, faBarChart, faBell, faFolder, faDirections, faUserGraduate, faBookBookmark, faUserClock, faHistory, faUser, faQuestionCircle, faBarsProgress, faDesktop, faChalkboardUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useEffect, useState, CSSProperties } from 'react';
import { Button, Card, Col, Form, Row, Container, Badge } from 'react-bootstrap'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';
import Select from "react-select";
import DexieUtils from '../../utils/dexie-utils';
import NotyfContext from '../../contexts/NotyfContext';
import { SubjecModel } from '../subjects/SubjectForm';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import OverAllPieChart from '../../pages/dashboards/Default/OverAllPieChart';
import StudentExamHistory from '../students/StudentExamHistory';
import StudenPerformanceHistory from '../students/StudentHistoryPerformance';
import StudentHistoryPerformancePieChart from '../../pages/dashboards/Default/StudentHistoryPerformancePieChart';
import Sections from '../sections/Sections';
import SectionsForm, { SectionModel } from '../sections/SectionsForm';
import DirectionForm, { DirectionModel } from '../directions/DirectionsForm';
import SectionsPage from '../../pages/sections/Sections';
import Direction from '../../pages/directions/Directions';
import QuestionsPage from '../../pages/questions/Questions';
import RelatedTasks from '../relatedtask/RelatedTasks';
import DidYouKnow from '../wiki/DidYouKnow';
import { QuestionModel } from '../questions/QuestionsForm';
import { DollarSign, ShoppingBag } from 'react-feather';




const SummaryQuestion = () => {

    const [dexieUtilsSection] = useState(DexieUtils<SectionModel>({ tableName: 'sections' }));
    const [sections, setSections] = useState<SectionModel[]>([]);

    const [dexieUtilDirection] = useState(DexieUtils<DirectionModel>({ tableName: 'directions' }))
    const [directions, setDirections] = useState<DirectionModel[]>([]);

    const [dexieQuestion] = useState(DexieUtils<QuestionModel>({ tableName: 'questions' }));
    const [questions, setQuestions] = useState<QuestionModel[]>([]);

    const displayCount = (dexieUtil: any, values: any, setTo: any) => {

        const getSections = async () => {
            let list = await dexieUtil.getAll();
            let count = list.map((values: any) => ({
                ...values,
                count: list.length
            }));

            setTo(count)
        }

        useEffect(() => {
            async function fetchData() {
                await getSections();
            }
            fetchData();
        }, []);
    }

    displayCount(dexieUtilsSection, sections, setSections);
    displayCount(dexieUtilDirection, directions, setDirections);
    displayCount(dexieQuestion, questions, setQuestions);

    const [activeTab, setActiveTab] = useState('summary');

    const handleTabSelect = (tab: any) => {
        setActiveTab(tab);
    };

    const openQuestionsTab = (tab: any) => {
        setActiveTab(tab);
    };

    return (
        <Card>
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <h4>Questions</h4>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <Tabs
                    activeKey={activeTab}
                    id="uncontrolled-tab-example"
                    className="mb-3"
                    onSelect={handleTabSelect}
                >
                    <Tab eventKey="summary" title="Summary">
                        <Row>
                            <Col>
                                <Card className="flex-fill" onClick={() => openQuestionsTab('section')} style={{ cursor: "pointer" }}>
                                    <Card.Body className=" py-4">
                                        <div className="d-flex align-items-start">
                                            <div className="flex-grow-1">
                                                <h3 className="mb-2">{sections.length}</h3>
                                                <p className="mb-2">Number of Lesson Sections</p>
                                            </div>
                                            <div className="d-inline-block ms-3">
                                                <div className="stat">
                                                    <FontAwesomeIcon icon={faFolder} className="align-middle text-success" />
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="flex-fill" onClick={() => openQuestionsTab('directions')} style={{ cursor: "pointer" }}>
                                    <Card.Body className=" py-4">
                                        <div className="d-flex align-items-start">
                                            <div className="flex-grow-1">
                                                <h3 className="mb-2">{directions.length}</h3>
                                                <p className="mb-2">Number of Directions</p>
                                            </div>
                                            <div className="d-inline-block ms-3">
                                                <div className="stat">
                                                    <FontAwesomeIcon icon={faDirections} className="align-middle text-success" />
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="flex-fill" onClick={() => openQuestionsTab('questions')} style={{ cursor: "pointer" }}>
                                    <Card.Body className=" py-4">
                                        <div className="d-flex align-items-start">
                                            <div className="flex-grow-1">
                                                <h3 className="mb-2">{questions.length}</h3>
                                                <p className="mb-2">Number of Questions</p>
                                            </div>
                                            <div className="d-inline-block ms-3">
                                                <div className="stat">
                                                    <FontAwesomeIcon icon={faQuestion} className="align-middle text-success" />
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="section" title="Sections">
                        <SectionsPage />
                    </Tab>
                    <Tab eventKey="directions" title="Directions">
                        <Direction />
                    </Tab>
                    <Tab eventKey="questions" title="Questions Database">
                        <QuestionsPage />
                    </Tab>
                </Tabs>
            </Card.Body>
        </Card>

    )
}

export default SummaryQuestion


