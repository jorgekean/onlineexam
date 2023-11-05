import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { Card } from "react-bootstrap";

interface TimerProps {
    duration: number
}

const Timer: React.FC<TimerProps> = ({ duration }) => {

    const [durationInSeconds, setDurationInSeconds] = useState<number>(duration * 60);
    const [timerText, setTimerText] = useState<string>("");

    useEffect(() => {
        const interval = setInterval(() => {
            setDurationInSeconds(prevDuration => prevDuration - 1);
        }, 1000);

        if (durationInSeconds <= 0) {
            clearInterval(interval);
            setTimerText("Time's up!");
        } else {
            const hours = Math.floor(durationInSeconds / 3600);
            const minutes = Math.floor((durationInSeconds % 3600) / 60);
            const seconds = durationInSeconds % 60;

            let text = "";
            if (hours > 0) {
                text += `${hours} hr${hours === 1 ? "" : "s"} `;
            }
            if (minutes > 0) {
                text += `${minutes} min${minutes === 1 ? "" : "s"} `;
            }
            if (seconds > 0) {
                text += `${seconds} sec${seconds === 1 ? "" : "s"}`;
            }

            setTimerText(text);
        }

        return () => {
            clearInterval(interval);
        };
    }, [durationInSeconds]);

    return (
        <React.Fragment>
            <FontAwesomeIcon icon={faClock} /> {timerText}
        </React.Fragment>
    );
};

export default Timer;
