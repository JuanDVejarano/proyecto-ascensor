import React, { FC } from "react";
import "./Tower.scss";

interface TowerProps {}

const Tower: FC<TowerProps> = () => (
    <ul className="tower">
        <li className="floor">
            <div className="floor__view"></div>
            <div className="floor__buttons"></div>
        </li>
        <li className="floor">
            <div className="floor__view"></div>
            <div className="floor__buttons"></div>
        </li>
        <li className="floor">
            <div className="floor__view"></div>
            <div className="floor__buttons"></div>
        </li>
        <li className="floor">
            <div className="floor__view"></div>
            <div className="floor__buttons"></div>
        </li>
        <li className="floor">
            <div className="floor__view"></div>
            <div className="floor__buttons"></div>
        </li>
        <li className="floor">
            <div className="floor__view"></div>
            <div className="floor__buttons"></div>
        </li>
        <li className="floor">
            <div className="floor__view"></div>
            <div className="floor__buttons"></div>
        </li>
    </ul>
);

export default Tower;
