import React, { CSSProperties } from "react";
import { Pie } from "react-chartjs-2";

import { Card, Dropdown, Table } from "react-bootstrap";

import { MoreHorizontal } from "react-feather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

import usePalette from "../../hooks/usePalette";



const PerformancePieChart = () => {
    const palette = usePalette();

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

    return (
        <Card className="flex-fill w-100">
            <Card.Header>
                <div className="card-actions float-end">
                    
                </div>
                <Card.Title className="mb-0"></Card.Title>
            </Card.Header>
            <Card.Body className="d-flex">
                <div className="align-self-center w-100">
                    
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
                </div>
            </Card.Body>
        </Card>
    );
};

export default PerformancePieChart;
