import React, { ReactNode, useState, useEffect } from 'react'
import { Container, Row, Col, Card, Tabs } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async';
import Tab from 'react-bootstrap/Tab';
import { StudentDataModel } from '../students/StudentsProfile';
import PerformancePieChart from './PerformancePieChart';
import DexieUtils from '../../utils/dexie-utils';
import DidYouKnow from '../wiki/DidYouKnow';
import RelatedTasks from '../relatedtask/RelatedTasks';

interface PerformanceSummaryProps {
    children?: ReactNode;
    studentID?: string;
}
const asd = [
'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Nulla facilisi. Sed tincidunt nisl sed ipsum interdum, at suscipit quam facilisis.',
    'Fusce dapibus ex eget justo venenatis, sit amet bibendum dolor consectetur.',
    'Duis vel dolor dapibus, iaculis sem at, commodo sapien. Aenean vitae quam ex.',
    'Integer vitae elit ut nisl pharetra dictum eget at mauris. Cras nec fermentum eros.'
];

const PerformanceSummary: React.FC<PerformanceSummaryProps> = ({ children, studentID }) => {
    const [students, setStudents] = useState<StudentDataModel[]>([]);
    const [dexieUtils] = useState(DexieUtils<StudentDataModel>({ tableName: 'students' }));
    const [viewProfile, setViewProfile] = useState<boolean>(true);

        const onViewProfile = (mode: boolean) => {
        setViewProfile(mode);
    };
    useEffect(() => {
        const fetchData = async () => {
            await getStudents()
        };
        fetchData();
    }, []);
        const getStudents = async () => {
        var list = await dexieUtils.getAll();
        const studentsPerGroup = list.filter((student) => student.id === studentID);

        const studentsWithDisplayName = list.map((student) => ({
            ...student,
            displayName: student.firstName + ' ' + student.lastName,
        }));

        const studentsToShow = studentsPerGroup.map(student => {
            const matchingStudent = studentsWithDisplayName.find(s => s.id === student.id);
            return matchingStudent || student;

        });

        setStudents(studentsToShow);

    };


    console.log('performance', students)
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col Col="lg">
                    
            <Card>
                <Card.Header>
                 {students.map((student) => (
                     <Card.Body key={student.id}>
                    <div  className="d-flex flex-row justify-content-left"> 
                    <div className="mt-3">
                        <h3 className="mt-0 mb-0 pb-0">{student.displayName}</h3>
                        <p>({student.displayName} section)</p>
                    </div>

                    <div className="mt-3 ms-7">
                        <h3 className="mt-0 mb-0 pb-0">{student.studentSubject}</h3>
                        <p>Subject</p>
                    </div>
   
                </div>
                        {/* <Row>
                            <h3 className="mt-0 mb-0 pb-0">{student.studentSubject}</h3>
                            <p>Subject</p>
                        </Row>

                        <Row>
                            <h3 className="mt-4 mb-0 pb-0">{student.displayName}</h3>
                            <p>({student.displayName} section)</p>
                         </Row> */}
                  <PerformancePieChart/>
                     </Card.Body>
                    ))
                }
                </Card.Header>
                        </Card>
                    </Col>
                    <Col lg="4">
                        <DidYouKnow onViewProfile={onViewProfile} items={asd}></DidYouKnow>
                        <RelatedTasks></RelatedTasks>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
        
    )
}

export default PerformanceSummary