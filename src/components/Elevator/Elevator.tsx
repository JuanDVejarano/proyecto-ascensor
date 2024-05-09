import React, { FC } from "react";
import "./Elevator.scss";

interface ElevatorProps {}

const Elevator: FC<ElevatorProps> = () => (
    <div className="elevator">
        <div className="doors">
            <div className="doors__left"></div>
            <div className="doors__right"></div>
        </div>
    </div>
);

export default Elevator;
