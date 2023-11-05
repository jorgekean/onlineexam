// <FontAwesomeIcon icon={faArrowLeft} />
import { faList, faQuestion, faQuestionCircle, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useEffect, useState, CSSProperties } from 'react';
import { Button, Card, Col, Form, Row, Container } from 'react-bootstrap'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';
import Select from "react-select";
import DexieUtils from '../../utils/dexie-utils';
import NotyfContext from '../../contexts/NotyfContext';
import { SubjecModel } from '../subjects/SubjectForm';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// import OverAllPieChart from '../../pages/dashboards/Default/OverAllPieChart';
import OverAllPieChart from '../../pages/dashboards/Default/OverAllPieChart';
import StatisticSectionPieChart from '../../pages/dashboards/Default/StatisticSectionPieChart';
import StatisticSubjectPieChart from '../../pages/dashboards/Default/StatisticSubjectPieChart';
import StudentExamHistory from '../students/StudentExamHistory';

interface StudentsProps {
    // listMode: boolean;
    updateListMode: (mode: boolean) => void;


}



const StatisticPerformanceReport: React.FC<StudentsProps> = ({ updateListMode }) => {

    const ViewStatisticPerformance = async () => {
        updateListMode(true)// show create/edit form 

    }

    // Handle changes in form inputs and update the form state


    return (
        <Card>
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <h4>Performance Report</h4>
                    </div>

                    <div className='d-flex gap-1'>
                        <Button onClick={() => ViewStatisticPerformance()}><FontAwesomeIcon icon={faArrowLeft} /> Back</Button>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <Tabs
                    defaultActiveKey="sectionWise"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="sectionWise" title="Section Wise">
                        <StatisticSectionPieChart />
                    </Tab>
                    <Tab eventKey="subjectWise" title="Subject Wise">
                        {/* <StudentExamHistory
                            updateListMode={updateListMode}
                            setSelectedRow={setSelectedRow}
                            updateview={updateview}
                        /> */}
                        <StatisticSubjectPieChart />
                    </Tab>
                </Tabs>
            </Card.Body>
        </Card>

    )

}

export default StatisticPerformanceReport


