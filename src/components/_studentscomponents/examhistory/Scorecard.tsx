import React, { useState, useEffect } from "react";
import { ReactNode } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import MyTable from "../../tables/MyTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import DexieUtils from '../../../utils/dexie-utils';
import { ExamResultsModel } from "../../../pages/_studentspages/exams/TakeExam";
import { Link, useNavigate } from 'react-router-dom';
import { myAppConfig } from '../../../config';
import ExamStatistics from "../../statistics/ExamStatistics";
import { useParams } from 'react-router-dom';

import Piechart from "./PieChart";


interface ScorecardProps {
    data: string | undefined;
}

export interface ScoreCardModel {
    // userDisplayName: string;
    // duration: number;
}

const Scorecard: React.FC<ScorecardProps> = ({ data }) => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState<ExamResultsModel[]>([]);
    const [dexieUtils] = useState(DexieUtils<ExamResultsModel>({ tableName: 'examresults' }));


    useEffect(() => {
        const fetchData = async () => {
            await getStudentData()
        };
        fetchData();
    }, []);

    const getStudentData = async () => {
        const fetchedData = await dexieUtils.getAll();
        const FilteredUser = fetchedData.filter(exam => exam.id === data);
        const examsWithModifiedData = FilteredUser.map(fetchedData => ({
            ...fetchedData,
        }));
        setUserData(examsWithModifiedData);
    }

    return (
        <Card>
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center'>
                    <h3 className="mt-4">{ }</h3>
                </div>
            </Card.Header>
            <Card.Body>
                {userData.map(datauser => (
                    <div key={datauser.id} className="d-flex flex-row justify-content-center" style={{ border: '1px solid black' }}>
                        <div className="mt-3">
                            <h4 className="mt-0 mb-0 pb-0">{datauser.userDisplayName}</h4>
                        </div>

                        <div className="mt-3 ms-6">
                            <h4 className="mt-0 mb-0 pb-0">{datauser.startDateAndTime}</h4>
                            <p>Start Time</p>
                        </div>

                        <div className="mt-3 ms-6">
                            <h4 className="mt-0 mb-0 pb-0">{datauser.startDateAndTime}</h4>
                            <p>End Time</p>
                        </div>

                        <div className="mt-3 ms-6">
                            <h4 className="mt-0 mb-0 pb-0">{datauser.duration}</h4>
                            <p>Exam Duration</p>

                        </div>
                        {/* totalQuestions //
                        negativemarks
                        marks //
                        time taken //
                        */}


                    </div>
                ))}


                <Piechart userdata={data} />

            </Card.Body>
        </Card>
    )
}

export default Scorecard