import { Button, Card, Col, Dropdown, Row, Container, Table, Form } from 'react-bootstrap'
import { faArrowLeft, faSquare, faBarChart, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
;
// import Barchart from '../Barchart';


interface ItemStatisticsProps {
    UpdateItemStatisticsView: (mode: boolean) => void;
}
const ItemStatistics: React.FC<ItemStatisticsProps> = ({ UpdateItemStatisticsView }) => {

    const ViewItemStatistic = async () => {
        UpdateItemStatisticsView(true)// show create/edit form 
    }

    return (
        <Card >
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center pt-0' >
                    <h4>Item Statistics</h4>
                    <div className='d-flex gap-1'>

                        <div className='d-flex gap-1'>
                            <Button onClick={() => ViewItemStatistic()}><FontAwesomeIcon icon={faArrowLeft} /> Back</Button>
                        </div>

                    </div>
                </div>
            </Card.Header>
            <Card.Body className=''>
                <Row>
                    <p>
                        This area gives you a look at the statistics of the exams taken.
                        specific analysis on candidates, sections,questions, answers can be availed.
                        This helps a lot in the quality improvement
                    </p>
                    <p className='pt-3'>
                        <b>Challenge Quotient (CQ)</b> is the ratio of numbers of times a question asked and answered incorrectly.
                    </p>

                    <Table className="mb-0 mt-5" responsive="sm" >
                        <thead>
                            <tr>
                                <th className="text-start">Section</th>
                                <th className="text-end">%Total</th>
                                <th className="text-end">Asked</th>
                                <th className="text-end">Correct</th>
                                <th className="text-end">Partially</th>
                                <th className="text-end">Incorrect</th>
                                <th className="text-end">Unans</th>
                                <th className="text-end">CQ</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-start">Star Section</td>
                                <td className="text-end">3</td>
                                <td className="text-end">3</td>
                                <td className="text-end">1</td>
                                <td className="text-end">0</td>
                                <td className="text-end">2</td>
                                <td className="text-end">0</td>
                                <td className="text-end">66.67%</td>
                            </tr>
                        </tbody>
                    </Table>

                    <div className='mt-7 d-flex flex-row'>
                    <Form.Group className=''>
                       <Button className='' variant='link' size='sm'>
                                Download this report in PDF
                            </Button>
                        </Form.Group>
                        <Form.Group>
                            <p className='mt-1'>|</p>
                        </Form.Group>

                    <Form.Group className=''>
                        <Button className='' variant='link' size='sm'>
                                Download this report in Excel
                            </Button>
                    </Form.Group>
                       
                </div>
                   
                   <div className='mt-3 mb-4 d-flex flex-row justify-content-between' style={{ border: '1px solid green', borderRadius: '10px' }}>
                    <Form.Group className='ms-4 mt-4' >
                        <FontAwesomeIcon icon={faBarChart} size='2x' className='mt-0' />    
                    </Form.Group>

                    <Form.Group className='ms-0 mt-2'>
                        <h4 className='pb-0 mb-0 ms-4 mt-2'>Overall Progress Report</h4>
                        <p className='ms-4'>See overall performance of your sections</p>
                    </Form.Group>

                    <Form.Group className='ms-auto mt-2'>
                        <Button className='mt-2 me-2' >View Report</Button>
                    </Form.Group>
                       
                </div>
                </Row>
            </Card.Body>
        </Card >

    )

}
export default ItemStatistics