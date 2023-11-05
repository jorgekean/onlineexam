import { Button, Card, Col, Dropdown, Row, Container, Table, Form, FormGroup } from 'react-bootstrap'
import { faArrowLeft, faSquare, faBarChart, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import StatsPieChart from '../../../pages/dashboards/Default/StatsPieChart';

interface ExamStatisticProps {
   
}
const Exam_ExamStatistics: React.FC<ExamStatisticProps> = ({  }) => {
    

    return (
        <Card>
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center pt-0' >
                    <h4>Exam Statistics</h4>
                    
                    <div className='d-flex gap-1'>
                        <div className='d-flex gap-1'>
                            {/* <Button onClick={() =>ViewExamStatistic()}><FontAwesomeIcon icon={faArrowLeft} /> Back</Button> */}
                        </div>
                    </div>
                </div>
            </Card.Header>
            <Card.Body className=''>

                <Row>
                    <Col>
                        <div className='ms-3 mt-4'>
                        <h2 className='mb-0'>60%</h2>
                        <p className='border-bottom border-2 d-xl-inline-flex'>Avg Percentages</p>
                        
                        <h2 className='mb-0'>3</h2>
                        <p className='border-bottom border-2 d-xl-inline-flex'>Avg Score</p>

                        <h2 className='mb-0'>57 Seconds</h2>
                        <p className='border-bottom border-2 d-xl-inline-flex'>Avg Time Taken</p>   

                        <h2 className='mb-0'>3</h2>
                        <p className='border-bottom border-2 d-xl-inline-flex'>Exams Attempts</p>    
                        </div>
                    </Col>

                    <Col>                       
                       <StatsPieChart></StatsPieChart>
                    </Col>

                    <Col xs={5}>
                        <div>
                        <Table className="mb-0">
                            <tbody>
                                <tr>
                                    <td className="text-start">
                                        <FontAwesomeIcon icon={faSquare} className="text-success" />{" "}
                                        Pass
                                    </td>
                                    <td className="text-end">67%(2)</td>
                                </tr>
                                <tr>
                                    <td className="text-start">
                                        <FontAwesomeIcon icon={faSquare} className="text-danger" />{" "}
                                        Fail
                                    </td>
                                    <td className="text-end">33%(1)</td>
                                </tr>
                            </tbody>
                        </Table> 
                        </div>
                      
                    </Col>
                    

                    

                </Row>

                
                
                <div className='mt-5'>
                     <Table size='sm'>
                        <thead>
                            <tr>
                                <th className="text-start">Q.Type Q.IDs</th>
                                <th className="text-center">%Correct</th>
                                <th className="text-center">Difficulty (p.value)</th>
                                <th className="text-center">Discrimination (d.value)</th>
                                <th className="text-center">Correct</th>
                                <th className="text-center">Partially Correct</th>
                                <th className="text-center">Incorrect</th>
                                <th className="text-center">Unanswered</th>
                                <th className="text-center">Avg time</th>
                                <th className="text-center">Question Attempts</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-start">144</td>
                                <td className="text-center"> <ProgressBar now={81} label={`${81}%`}/></td>
                                <td className="text-center">0.982</td>
                                <td className="text-center">1</td>
                                <td className="text-center">2</td>
                                <td className="text-center">0</td>
                                <td className="text-center">0</td>
                                <td className="text-center">1</td>
                                <td className="text-center">5 seconds</td>
                                <td className="text-center">3</td>
                            </tr>

                                 <tr>
                                <td className="text-start">143</td>
                                <td className="text-center"> <ProgressBar now={33} label={`${33.33}%`}/></td>
                                <td className="text-center">0.382</td>
                                <td className="text-center">3</td>
                                <td className="text-center">2</td>
                                <td className="text-center">0</td>
                                <td className="text-center">0</td>
                                <td className="text-center">1</td>
                                <td className="text-center">12 seconds</td>
                                <td className="text-center">3</td>
                            </tr>

                                 <tr>
                                <td className="text-start">142</td>
                                <td className="text-center"> <ProgressBar now={76} label={`${76.67}%`}/></td>
                                <td className="text-center">0.998</td>
                                <td className="text-center">1</td>
                                <td className="text-center">5</td>
                                <td className="text-center">0</td>
                                <td className="text-center">0</td>
                                <td className="text-center">1</td>
                                <td className="text-center">15 seconds</td>
                                <td className="text-center">3</td>
                            </tr>

                                 <tr>
                                <td className="text-start">141</td>
                                <td className="text-center"> <ProgressBar now={66} label={`${66.67}%`}/></td>
                                <td className="text-center">0.922</td>
                                <td className="text-center">1</td>
                                <td className="text-center">2</td>
                                <td className="text-center">2</td>
                                <td className="text-center">0</td>
                                <td className="text-center">1</td>
                                <td className="text-center">8 seconds</td>
                                <td className="text-center">3</td>
                            </tr>

                                 <tr>
                                <td className="text-start">140</td>
                                <td className="text-center"> <ProgressBar now={46} label={`${46.67}%`}/></td>
                                <td className="text-center">0.782</td>
                                <td className="text-center">1</td>
                                <td className="text-center">2</td>
                                <td className="text-center">0</td>
                                <td className="text-center">0</td>
                                <td className="text-center">1</td>
                                <td className="text-center">12 seconds</td>
                                <td className="text-center">3</td>
                            </tr>
                        </tbody>
                    </Table>   
                </div>
              
                <div className='d-flex flex-row mt-5 mb-4' style={{ border: '1px solid green', borderRadius: '10px' }}>
                    <Form.Group className='ms-4 mt-4' >
                          <FontAwesomeIcon icon={faFilePdf} size='2x' className='pt-0' />
                    </Form.Group>

                    <FormGroup className='ms-4 mt-2'>
                         <h4 className='pb-0 mb-0 mt-2'>Download Exams Statistics in PDF</h4>
                        <p className=''>Exam Statistics Report</p>
                    </FormGroup>

                    <FormGroup className='ms-auto mt-2'>
                        <Button className='mt-2 me-2' >Download</Button>
                        <Button className='mt-2 me-3' >Email PDF</Button>
                    </FormGroup>
                       
                </div>
            </Card.Body>
        </Card >

    )

}
export default Exam_ExamStatistics
