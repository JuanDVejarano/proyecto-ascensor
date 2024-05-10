import { useState } from "react";
import Tower from "./components/Tower/Tower";
import "./App.scss";
import Elevator from "./components/Elevator/Elevator";
import RequestTable from "./components/RequestTable/RequestTable";

function App() {
    //let [listTask, setListTask] = useState<string[]>([]);
    let [externalButons, setExternalButons] = useState<boolean[]>([
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
    ]); // botones externos del elevador
    let [internalButons, setInternalButons] = useState<boolean[]>([
        false,
        false,
        false,
        false,
        false,
        false,
        false,
    ]); // botones internos del elevador

    let [isGoingUp, setIsGoingUp] = useState<boolean>(true); // el elevador va subiendo o bajando?

    let [currentFloor, setCurrentFloor] = useState<number>(1); //piso del elevador

    const route = () => {
        if (isGoingUp) {
            if (currentFloor < 7) {
                setCurrentFloor(currentFloor + 1);
            } else {
                setIsGoingUp(false);
                setCurrentFloor(currentFloor - 1);
            }
        } else {
            if (currentFloor > 1) {
                setCurrentFloor(currentFloor - 1);
            } else {
                setIsGoingUp(true);
                setCurrentFloor(currentFloor + 1);
            }
        }
    };

    return (
        <>
            <div className="viewDinamic">
                <div className="towerButtons">
                    <div className="building">
                        <Tower></Tower>
                        <Elevator floor={currentFloor}></Elevator>
                    </div>
                    <RequestTable
                        setlistButons={setExternalButons}
                        onClickRoute={() => route()}
                        listButons={externalButons}></RequestTable>
                </div>
            </div>
        </>
    );
}

export default App;
