
import { Card, Col, Row, Table } from "react-bootstrap";
import usePalette from "../../../hooks/usePalette";
import { Pie ,Bar } from "react-chartjs-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";


const StatsPieChart = () => { 
const palette = usePalette();

    const data = {
        labels: ["Pass", "Fail"],
        datasets: [
            {
                data: [67, 33],
                backgroundColor: [
                    palette.success,
                    palette.danger,
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
            <Pie data={data} options={options} />
        </div>
    )
}
export default StatsPieChart