import React, { ReactNode, useState } from 'react'
import { Button, Card, Container, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async';
import DidYouKnow from '../../components/wiki/DidYouKnow';
import RelatedTasks from '../../components/relatedtask/RelatedTasks';
import Statistics from '../../components/statistics/statistics';
import StatisticPerformanceReport from '../../components/statistics/StatisticPerformanceReport';

import ItemStatistics from '../../components/statistics/ItemStatistics';
import ExamStatistics from '../../components/statistics/ExamStatistics';
import CandidateStatistics from '../../components/statistics/CandidateStatistics';
import ExamHistory from '../../components/statistics/ExamHistory';
import MeritList from '../../components/statistics/MeritList';


const wikiItems = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Nulla facilisi. Sed tincidunt nisl sed ipsum interdum, at suscipit quam facilisis.',
    'Fusce dapibus ex eget justo venenatis, sit amet bibendum dolor consectetur.',
    'Duis vel dolor dapibus, iaculis sem at, commodo sapien. Aenean vitae quam ex.',
    'Integer vitae elit ut nisl pharetra dictum eget at mauris. Cras nec fermentum eros.'
];
interface StatisticProps {
    children?: ReactNode;
}

const StatisticsPage: React.FC<StatisticProps> = ({ children }) => {
    const [listMode, setListMode] = useState<boolean>(true);
    const [itemStatisticsView, setItemStatisticsView] = useState<boolean>(true);
    const [examStatisticsView, setExamStatisticsView] = useState<boolean>(true);
    const [CandidateStatisticsView, setCandidateStatisticsView] = useState<boolean>(true);
    const [ExamHistoryView, setExamHistoryView] = useState<boolean>(true);
    const [MeritListView, setMeritListView] = useState<boolean>(true);



    const ViewStatisticPerformance = (mode: boolean) => {
        setListMode(mode)//  Show/hide StatisticPerformance
    }

    const ViewItemStatisctics = (mode: boolean) => {
        setItemStatisticsView(mode)// Show/hide ItemStatistics
    }

    const ViewExamStatisctics = (mode: boolean) => {
        setExamStatisticsView(mode)// Show/hide ItemStatistics
    }

    const ViewCandidateStatistics = (mode: boolean) => {
        setCandidateStatisticsView(mode)// Show/hide ItemStatistics
    }

    const ViewExamHistory = (mode: boolean) => {
        setExamHistoryView(mode)// Show/hide ItemStatistics
    }

     const ViewMeritList = (mode: boolean) => {
        setMeritListView(mode)// Show/hide ItemStatistics
    }


    return (
        <React.Fragment>
            <Helmet title="Student" />
            <Container fluid className="p-0">
                <Row>
                    <Col lang='8'>
                        {listMode ? (
                            itemStatisticsView ? (
                                examStatisticsView ? (
                                    CandidateStatisticsView ? (
                                        ExamHistoryView ? (
                                            MeritListView ? (
                                         <Statistics updateListMode={ViewStatisticPerformance}
                                            UpdateItemStatisticsView={ViewItemStatisctics}
                                            UpdateExamStatisticsView={ViewExamStatisctics}
                                            UpdateCandidateStatisticsView={ViewCandidateStatistics}
                                            UpdateExamHistoryView={ViewExamHistory}
                                            UpdateMeritListView={ViewMeritList}/>
                                            ) :
                                                (<MeritList UpdateMeritListView={ViewMeritList} />      
                                            )
      
                                        ) : (<ExamHistory UpdateExamHistoryView={ViewExamHistory} />           
                                    )
                                    ): (<CandidateStatistics UpdateCandidateStatisticsView={ViewCandidateStatistics}/>)
                                ) :
                                    (<ExamStatistics UpdateExamStatisticsView={ViewExamStatisctics} />)
                            ) : (<ItemStatistics UpdateItemStatisticsView={ViewItemStatisctics} />) 
                        ) : (<StatisticPerformanceReport updateListMode={ViewStatisticPerformance} />)
                        }
                    </Col>

                    
                    <Col lg="4">
                        <DidYouKnow items={wikiItems} onViewProfile={function (mode: boolean): void {
                            throw new Error('Function not implemented.');
                        }} />
                        <RelatedTasks></RelatedTasks>

                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default StatisticsPage

