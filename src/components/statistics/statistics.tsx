import { Button, Card, Col, Dropdown, Row, Container, Form } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async';
import { faGear, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MyTable from '../tables/MyTable';
import { StudentDataModel } from '../students/StudentsProfile';
import React, { useContext, useEffect, useState } from 'react'
import BarChart from '../../pages/dashboards/Default/BarChart';
import SimpleBarChart from '../../pages/dashboards/Default/SimpleBarChart';
import SelectAdapter from '../finalformadapter/SelectAdapter';
import { Form as FinalForm, Field, FormRenderProps, FormSpy } from 'react-final-form';
interface StatisticProps {
    updateListMode: (mode: boolean) => void;
    UpdateItemStatisticsView: (mode: boolean) => void;
    UpdateExamStatisticsView: (mode: boolean) => void;
    UpdateCandidateStatisticsView: (mode: boolean) => void;
    UpdateExamHistoryView: (mode: boolean) => void;
    UpdateMeritListView: (mode: boolean) => void;
}
const Statistics: React.FC<StatisticProps> = ({ updateListMode, UpdateItemStatisticsView, UpdateExamStatisticsView, UpdateCandidateStatisticsView, UpdateExamHistoryView, UpdateMeritListView }) => {
    const [statistics, setStatistics] = useState<StudentDataModel[]>([]);

    const ViewStatisticPerformance = async () => {
        updateListMode(false)// show create/edit form 
    }

    const ViewItemStatistics = async () => {
        UpdateItemStatisticsView(false)// show create/edit form 
    }

    const ViewExamStatistics = async () => {
        UpdateExamStatisticsView(false)// show create/edit form 
    }

    const ViewCandidateStatistics = async () => {
        UpdateCandidateStatisticsView(false)// show create/edit form 
    }

    const ViewExamHistory = async () => {
        UpdateExamHistoryView(false)// show create/edit form 
    }
    const ViewMeritList = async () => {
        UpdateMeritListView(false)// show create/edit form 
    }
    


    return (
        <Card >
            <Card.Header className=''>
                <div className='pt-0 mb-0 w-25'>
                    <h4>Statistics</h4>
                    <Form.Label className='mt-3 ms-1'>SCHOOL YEAR</Form.Label>
                </div>
              <div className='w-25'>
            <Form.Select aria-label="" className=''>
                <option>2023</option>
                <option value="1">2022</option>
                <option value="2">2021</option>
                <option value="3">2020</option>
            </Form.Select> 
                </div>
            </Card.Header>
            <Card.Body className=''>
               
                <div className='ms-3 d-flex flex-row'>
                    <div className='mt-7'>
                        <h1 className='mt-7'>58%</h1>
                        <p className='mb-0'>Average Percentage</p>
                        <p className=''>Comprising all the exams</p>
                    </div>            
                    <div className='ms-auto me-5 mt-0'>
                        <p className='text-center mb-0'><b>Average Score Per Exam</b></p>
                        <SimpleBarChart></SimpleBarChart>
                    </div>
                </div>

                <div className='mt-4 border-top border-2 '>
                <Row className='mt-4'>
                    <Col>
                        <Button onClick={() => ViewItemStatistics()} variant="link" size='lg'>Item Statistics</Button>
                        <p className='ms-4'>Display section and question wise statistics.
                         this helps to identify the weak areasand assists
                         a lot in the quality improvement
                        </p>

                        <Button onClick={() => ViewExamStatistics()} variant="link" size='lg'>Exam Statistics</Button>
                        <p className='ms-4'>Show the overall statistics for one specific exam.
                         Displays the average time, marks and the questions attempted by the candidates
                        </p>

                        <Button onClick={() => ViewStatisticPerformance()} variant="link" size='lg'>Overall Performance Report</Button>
                        <p className='ms-4'>Shows the overall exam performance report for all
                         the exams, section & questions with the number of times attemted by
                         all the candidates
                        </p>
                    </Col>

                     <Col>
                        <Button onClick={() => ViewCandidateStatistics()} variant="link" size='lg'>Candidate Statistics</Button>
                        <p className='ms-4'>Shows the candidate's total exam This report
                         also displays the average score of each candidate.
                        </p>

                        <Button onClick={() => ViewMeritList()} variant="link" size='lg'>Merit List</Button>
                        <p className='ms-4'>Displays the candidate ranking details for an exam.
                         this report will give you the merit list according to the best performer
                         in the exam.
                        </p>

                        <Button onClick={() => ViewExamHistory()} variant="link" size='lg'>Exam History(Result)</Button>
                        <p className='ms-4'>Displays the result details of one exam.
                            This is the most useful report for you and the end users.
                        </p>
                    </Col>
                </Row>
                </div>
            </Card.Body>   
        </Card >

    )
}
export default Statistics