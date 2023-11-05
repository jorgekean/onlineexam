import { Pie } from "react-chartjs-2";
import React, { useState, useEffect } from "react";
import { Card, Dropdown, Table } from "react-bootstrap";
import { MoreHorizontal } from "react-feather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { ExamResultsModel } from "../../../pages/_studentspages/exams/TakeExam";
import usePalette from "../../../hooks/usePalette";
import DexieUtils from "../../../utils/dexie-utils";

interface pieChartProps {
    userdata: string | undefined;
}

const Piechart : React.FC<pieChartProps>= ({userdata}) => {
    const palette = usePalette();
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
    const FilteredUser = fetchedData.filter(exam => exam.id === userdata);
    const examsWithModifiedData = FilteredUser.map(fetchedData => ({
        ...fetchedData,
    }));
        setUserData(examsWithModifiedData);   
    }

    const data = {
        labels: ["Correct", "Partially Correct", "Incorrect", "Unanswered"],
        datasets: [
            {
                data: [29, 0, 15, 5],
                backgroundColor: [
                    palette.primary,
                    palette.warning,
                    palette.danger,
                    "#E8EAED",
                ],
                borderWidth: 1,
                borderColor: palette.white,
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        cutout: "50%",
        plugins: {
            legend: {
                display: false,
            },
        },
    };
    console.log('Piechart', userdata);
    return (
        <Card className="flex-fill w-100">
            <Card.Header>
                <div className="card-actions float-end">
                    
                </div>
                <Card.Title className="mb-0"></Card.Title>
            </Card.Header>
            <Card.Body className="d-flex">
                {userData.map(examResult => (
                <div key={examResult.id} className="align-self-center w-100">                   
                    <div className="py-3 d-flex">
                        <div className="w-50 mt-5">
                            <h2 className="mb-0">{examResult.totalQuestions}</h2>
                            <p className="border-bottom border-2 d-xl-inline-flex">Total Questions</p>

                                <h2 className="mb-0">{examResult.totalCorrectAnswers}/{examResult.totalQuestions}</h2>
                             <p className="border-bottom border-2 d-xl-inline-flex">Marks</p>

                             <h2 className="mb-0">0%</h2>
                                <p className="border-bottom border-2 d-xl-inline-flex">Negative Marks{}</p>
                            
                            <h2 className="mb-0">{examResult.duration}</h2>
                             <p className="border-bottom border-2 d-xl-inline-flex">Time Taken</p>
                        </div>
                        
                        <div className="chart chart-lg">
                            <Pie data={data} options={options} />
                        </div>

                        <Table className="mb-0">
                            <tbody>
                                <tr>
                                    <td className="text-start">
                                        <FontAwesomeIcon icon={faSquare} className="text-primary" />{" "}
                                        Correct
                                    </td>
                                    <td className="text-end">29</td>
                                </tr>
                                <tr>
                                    <td className="text-start">
                                        <FontAwesomeIcon icon={faSquare} className="text-warning" />{" "}
                                        Partially
                                    </td>
                                    <td className="text-end">0</td>
                                </tr>
                                <tr>
                                    <td className="text-start">
                                        <FontAwesomeIcon icon={faSquare} className="text-danger" />{" "}
                                        Incorrect
                                    </td>
                                    <td className="text-end">15</td>
                                </tr>
                                <tr>
                                    <td className="text-start">
                                        <FontAwesomeIcon icon={faSquare} className="iconCustomColor" />{" "}
                                        Unanswered
                                    </td>
                                    <td className="text-end">5</td>
                                </tr>
                                <tr>
                                    <td className="text-start">
                                        Total
                                    </td>
                                    <td className="text-end">49</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                    <h4 className=" mt-5 mb-2 ms-2"><b>Section Wise Summary</b></h4>
                    <Table className="mb-0">
                        <thead>
                            <tr>
                                <th className="text-start">Section</th>
                                <th className="text-end">%Correct</th>
                                <th className="text-end">Correct</th>
                                <th className="text-end">Partially</th>
                                <th className="text-end">Incorrect</th>
                                <th className="text-end">Unanswered</th>
                                <th className="text-end">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-start">
                                    <FontAwesomeIcon icon={faSquare} className="text-primary" />{" "}
                                    Math
                                </td>
                                <td className="text-end">100%</td>
                                <td className="text-end">1</td>
                                <td className="text-end">0</td>
                                <td className="text-end">0</td>
                                <td className="text-end">0</td>
                                <td className="text-end text-success">1</td>
                            </tr>
                            <tr>
                                <td className="text-start">
                                    <FontAwesomeIcon icon={faSquare} className="text-warning" />{" "}
                                    Math (Grade 1)
                                </td>
                                <td className="text-end">60%</td>
                                <td className="text-end">9</td>
                                <td className="text-end">0</td>
                                <td className="text-end">1</td>
                                <td className="text-end">5</td>
                                <td className="text-end text-success">15</td>
                            </tr>
                            <tr>
                                <td className="text-start">
                                    <FontAwesomeIcon icon={faSquare} className="text-primary" />{" "}
                                    Math (Grade 4)
                                </td>
                                <td className="text-end">60%</td>
                                <td className="text-end">18</td>
                                <td className="text-end">0</td>
                                <td className="text-end">12</td>
                                <td className="text-end">0</td>
                                <td className="text-end text-success">3</td>
                            </tr>
                            <tr>
                                <td className="text-start">
                                    <FontAwesomeIcon icon={faSquare} className="text-warning" />{" "}
                                    Math (Grade 4)
                                </td>
                                <td className="text-end">33%</td>
                                <td className="text-end">1</td>
                                <td className="text-end">0</td>
                                <td className="text-end">2</td>
                                <td className="text-end">0</td>
                                <td className="text-end text-success">3</td>
                            </tr>
                        </tbody>
                    </Table>
                    </div>
                    ))}
            </Card.Body>
        </Card>
    );
};

export default Piechart;
