import React from "react";
import { Pie } from "react-chartjs-2";
import { Card } from "react-bootstrap";

interface PieChartProps {
    title: string;
    subtitle: string;
    chartData: any;
    chartOptions: any;
}

const PieChart: React.FC<PieChartProps> = ({ title, subtitle, chartData, chartOptions }) => {
    return (
        <Card>
            <Card.Header>
                <Card.Title>{title}</Card.Title>
                <h6 className="card-subtitle text-muted">{subtitle}</h6>
            </Card.Header>
            <Card.Body>
                <div className="chart chart-sm">
                    <Pie data={chartData} options={chartOptions} />
                </div>
            </Card.Body>
        </Card>
    );
};

export default PieChart;
