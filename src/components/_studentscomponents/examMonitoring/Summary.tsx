import React, { CSSProperties } from "react";
import { Pie } from "react-chartjs-2";

import { Card, Dropdown, ListGroup, Table } from "react-bootstrap";

import { MoreHorizontal } from "react-feather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

import usePalette from "../../../hooks/usePalette";


const SummaryChart = () => {
    const palette = usePalette();

    const data = {
        labels: ["Taking", "Finished", "Dropped", "Terminated"],
        datasets: [
            {
                data: [1, 1, 0, 0],
                backgroundColor: [
                    palette.primary,
                    palette.success,
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
                <div className="">
                     <h4>Progress Summary</h4>
                </div>
            </Card.Header>
            <Card.Body className="d-flex">
                <div className="align-self-center w-100">
                    
                    <div>
                        <div className="py-3 d-flex">
                            <div className="chart chart-xs">
                                <Pie data={data} options={options} />
                            </div>
                            <Table className="mb-0">
                                <tbody>
                                    <tr>
                                        <td className="text-start">
                                            <FontAwesomeIcon icon={faSquare} className="text-primary" />{" "}
                                            Taking
                                        </td>
                                        <td className="text-end">1</td>
                                    </tr>
                                    <tr>
                                        <td className="text-start">
                                            <FontAwesomeIcon icon={faSquare} className="text-success" />{" "}
                                            Finished
                                        </td>
                                        <td className="text-end">1</td>
                                    </tr>
                                    <tr>
                                        <td className="text-start">
                                            <FontAwesomeIcon icon={faSquare} className="text-danger" />{" "}
                                            Dropped
                                        </td>
                                        <td className="text-end">0</td>
                                    </tr>
                                    <tr>
                                        <td className="text-start">
                                            <FontAwesomeIcon icon={faSquare} className="iconCustomColor" />{" "}
                                            Terminated
                                        </td>
                                        <td className="text-end">0</td>
                                    </tr>
                                    
                                </tbody>
                            </Table>
                        </div>
                    </div>
                
                </div>
            </Card.Body>
        </Card>
    );
};

export default SummaryChart;
