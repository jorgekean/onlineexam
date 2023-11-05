
import { Card, Col, Row, Table } from "react-bootstrap";
import usePalette from "../../../hooks/usePalette";
import { Pie ,Bar } from "react-chartjs-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";


const SimpleBarChart = () => { 
const palette = usePalette();

    const data = {
        labels: ["Prelim", "Mid-terms","Finals"],
        datasets: [
            {
                data: [50, 10,0],
                backgroundColor: [
                    palette.success,
                    palette.danger,
                    palette["gray-100"]
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
    }

    return (
         
        <div className="chart chart-xls">
            <Bar data={data} options={options} />
        </div>
    )
}
export default SimpleBarChart