import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Card } from "react-bootstrap";

interface DoughnutChartProps {
    title: string;
    subtitle: string;
    chartData: any;
    chartOptions: any;
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ title, subtitle, chartData, chartOptions }) => {
    return (
        <Card>
            <Card.Header>
                <Card.Title>{title}</Card.Title>
                <h6 className="card-subtitle text-muted">{subtitle}</h6>
            </Card.Header>
            <Card.Body>
                <div className="chart chart-sm">
                    <Doughnut data={chartData} options={chartOptions} />
                </div>
            </Card.Body>
        </Card>
    );
};

export default DoughnutChart;
