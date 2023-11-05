import React, { CSSProperties } from "react";
import { Pie } from "react-chartjs-2";

import { Card, Dropdown, Table } from "react-bootstrap";

import { MoreHorizontal } from "react-feather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

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

const OverAllPieChart = () => {
  const palette = usePalette();

  const data = {
    labels: ["Correct", "Partially", "Incorrect", "Unanswered"],
    datasets: [
      {
        data: [2, 0, 2, 0],
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
        <Card.Title className="mb-0">Overall Performace</Card.Title>
      </Card.Header>
      <Card.Body className="d-flex">

        <div className="align-self-center w-100">
          <div style={overAllPerformaceContainer}>
            <div style={overAllPerformanceStyle}>
              <h2>Overall Performance 50%</h2>
              <p>All Sections, all attempts</p>
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
                  <td className="text-end">2</td>
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
                  <td className="text-end">2</td>
                </tr>
                <tr>
                  <td className="text-start">
                    <FontAwesomeIcon icon={faSquare} className="iconCustomColor" />{" "}
                    Unanswered
                  </td>
                  <td className="text-end">0</td>
                </tr>
                <tr>
                  <td className="text-start">
                    Total
                  </td>
                  <td className="text-end">4</td>
                </tr>
              </tbody>
            </Table>
          </div>

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
                  Start Section
                </td>
                <td className="text-end">33%</td>
                <td className="text-end">1</td>
                <td className="text-end">0</td>
                <td className="text-end">2</td>
                <td className="text-end">0</td>
                <td className="text-end text-success">3</td>
              </tr>
              <tr>
                <td className="text-start">
                  <FontAwesomeIcon icon={faSquare} className="text-warning" />{" "}
                  Math
                </td>
                <td className="text-end">100%</td>
                <td className="text-end">1</td>
                <td className="text-end">0</td>
                <td className="text-end">0</td>
                <td className="text-end">0</td>
                <td className="text-end text-success">1</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
};

export default OverAllPieChart;
