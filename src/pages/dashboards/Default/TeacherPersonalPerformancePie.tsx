import React, { CSSProperties, useState } from "react";
import { Pie } from "react-chartjs-2";

import { Button, Card, Dropdown, Table } from "react-bootstrap";

import { MoreHorizontal } from "react-feather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSquare, faList } from "@fortawesome/free-solid-svg-icons";

import usePalette from "../../../hooks/usePalette";

const overAllPerformaceContainer: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
}

const overAllPerformanceStyle: CSSProperties = {
    textAlign: 'center',
    padding: '20px',
    margin: '0px 10% 0px 10%',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)'
};

const iconCustomColor: CSSProperties = {
    color: '#E8EAED'
}

const tdCloseGap: CSSProperties = {
    padding: '0',
    margin: '0'
}

interface TeachersProps {
    // listMode?: boolean;
}

const TeacherPersonalPerformancePie: React.FC<TeachersProps> = () => {
    const palette = usePalette();

    const data = {
        labels: ["Correct", "Partially", "Incorrect", "Unanswered"],
        datasets: [
            {
                data: [98, 27, 53, 5],
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

    return (
        <Card className="flex-fill w-100">
            <Card.Header>
                <div className="card-actions float-end">
                    <Dropdown align="end" className="d-flex justify-content-start gap-1">
                        <Dropdown.Toggle as="a" bsPrefix="-">
                            <MoreHorizontal />
                        </Dropdown.Toggle>
                    </Dropdown>
                </div>
                <Card.Title className="mb-0">Overall Performace</Card.Title>
            </Card.Header>
            <Card.Body className="d-flex">
                <div className="align-self-center w-100">
                    <div style={overAllPerformaceContainer}>
                        <div style={overAllPerformanceStyle}>
                            <h2>Overall Performance 53%</h2>
                        </div>
                    </div>
                    <div className="py-3 d-flex">
                        <div className="chart chart-xs">
                            <Pie data={data} options={options} />
                        </div>

                        <Table className="mb-0">
                            <tbody>
                                <tr>
                                    <td className="text-start">
                                        <FontAwesomeIcon icon={faSquare} className="text-primary" />{" "}
                                        Correct
                                    </td>
                                    <td className="text-end">98</td>
                                </tr>
                                <tr>
                                    <td className="text-start">
                                        <FontAwesomeIcon icon={faSquare} className="text-warning" />{" "}
                                        Partially
                                    </td>
                                    <td className="text-end">27</td>
                                </tr>
                                <tr>
                                    <td className="text-start">
                                        <FontAwesomeIcon icon={faSquare} className="text-danger" />{" "}
                                        Incorrect
                                    </td>
                                    <td className="text-end">53</td>
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
                                    <td className="text-end">183</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                    <Table className="mb-0">
                        <thead>
                            <tr>
                                <th className="text-start">Subject</th>
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
                                    PE
                                </td>
                                <td className="text-end">100%</td>
                                <td className="text-end">34</td>
                                <td className="text-end">5</td>
                                <td className="text-end">3</td>
                                <td className="text-end">1</td>
                                <td className="text-end text-success">43</td>
                            </tr>
                            <tr>
                                <td className="text-start">
                                    <FontAwesomeIcon icon={faSquare} className="text-warning" />{" "}
                                    Philosophy
                                </td>
                                <td className="text-end">60%</td>
                                <td className="text-end">19</td>
                                <td className="text-end">20</td>
                                <td className="text-end">7</td>
                                <td className="text-end">3</td>
                                <td className="text-end text-success">49</td>
                            </tr>
                            <tr>
                                <td className="text-start">
                                    <FontAwesomeIcon icon={faSquare} className="text-primary" />{" "}
                                    Algebra
                                </td>
                                <td className="text-end">60%</td>
                                <td className="text-end">45</td>
                                <td className="text-end">2</td>
                                <td className="text-end">43</td>
                                <td className="text-end">1</td>
                                <td className="text-end text-success">91</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Card.Body>
        </Card>
    );
};

export default TeacherPersonalPerformancePie;
