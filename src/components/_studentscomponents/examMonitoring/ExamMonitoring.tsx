import { faClock, faGear, faPlus, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useContext, useState } from 'react'
import { Button, Card, Col, Dropdown, Row } from 'react-bootstrap'
import { ExamModel } from '../../exams/ExamsForm';
import DexieUtils from '../../../utils/dexie-utils';
import MyTable from '../../tables/MyTable';
import { Link, useNavigate } from 'react-router-dom';
import { myAppConfig } from '../../../config';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useParams } from "react-router";
import { ExamResultsModel } from '../../../pages/_studentspages/exams/TakeExam';
import Exams from '../../exams/Exams';



interface ExamMonitoringProps {

}

const ExamMonitoring: React.FC<ExamMonitoringProps> = ({  }) => {
   
    const [ExamResultdexieUtils] = useState(DexieUtils<ExamResultsModel>({ tableName: 'examresults' }));
    const [exams] = useState(DexieUtils<ExamResultsModel>({ tableName: 'exams' }));
    const [examsResult, setExamsResult] = useState<ExamResultsModel[]>([]);
    const [examsName, setExamsName] = useState<ExamResultsModel[]>([]);

    const navigate = useNavigate();

    const { id } = useParams();
    console.log("id: ",id)


    useEffect(() => {
        const fetchData = async () => {
            await getExamsResult()
        };
        fetchData();
    }, []);

     const getExamsResult = async () => {
         const fetchedExamsResult = await ExamResultdexieUtils.getAll();
         const filteredExamResultData = fetchedExamsResult.map(exam => {
             
             let time = exam.startDateAndTime
             if (time) {
            const commaIndex = time.indexOf(",");
            
            if (commaIndex !== -1) {
                time = time.slice(commaIndex + 1).trim();
            }
        }
            return {
                ...exam,
                 
              time: time
                
            };
            
            
         });
            const fetchedexams = await exams.getAll();
            const filterExamResultData = fetchedexams.filter(exam => exam.id === id) 
            const filteredExamNameData = filterExamResultData.map(exam => {
            return {
                ...exam,
                
            };
            
        });
         setExamsResult(filteredExamResultData);
         setExamsName(filteredExamNameData)
    }
        console.log(examsResult)

    const GotoExamMonitoring = () => {
        navigate(`${myAppConfig.baseURL}/exams`);
    }

    const tableColumns = [
        {
            Header: "Student Name",
            accessor: "userDisplayName",
        },
        {
            Header: "Time Started",
            accessor: "time",
        },
        {
            Header: "Questions Answered",
            accessor: "totalCorrectAnswers",
        },
        {
            Header: "Progress",
            accessor: "progress",
            Cell: ({ value }: {value: any}) => (
            <ProgressBar now={value} label={`${value}%`} variant='success' />
        ),
        },
        
    ];
    const examname = examsName.map((exam) => (exam.examName))
    const FinalExamName = examname[0]
    console.log(FinalExamName)
    return (
        <>
            <Card>
                <Card.Header>
                    <div className='d-flex justify-content-between align-items-center'>
                             <h4>Exam Monitoring - ({FinalExamName})</h4>

                        <div className='d-flex gap-1'>
                            <Button onClick={() => GotoExamMonitoring()}><FontAwesomeIcon icon={faArrowLeft} />{" "}Back</Button>
                    </div>
                    </div>
             
                </Card.Header>
                <Card.Body>
                    <MyTable columns={tableColumns} data={examsResult as []} />
                    <div>
                        
                    </div>
                </Card.Body>
                
            </Card>
        </>
    )
}

export default ExamMonitoring