import { useEffect, useState } from "react";
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

    // el elevador va subiendo o bajando?
    let [isGoingUp, setIsGoingUp] = useState<boolean>(true);

    let [currentFloor, setCurrentFloor] = useState<number>(1); //piso del elevador

    let [openDoor, setOpenDoor] = useState<boolean>(false); //puerta del elevador abierta o cerrada

    //Funcion que verifica si hay botones internos o externos presionados
    const moveMost = () => {
        let hasTrueInternalButtons = internalButons.some((value) => value);
        let hasTrueExternalButtons = externalButons.some((value) => value);
        if (hasTrueInternalButtons || hasTrueExternalButtons) {
            return true;
        }
    };

    const functionOpentehDorrs = async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setOpenDoor(true);
        console.log(openDoor);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setOpenDoor(false);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        onClickRoute();
    };

    //useEffect que se ejecuta cada vez que se presiona un boton
    useEffect(() => {
        if (validationByFloor()) {
            if (moveMost()) {
                route();
            }
        } else {
            //debugger;
            matchfloorButons();
            functionOpentehDorrs();
            //console.log("No se puede ir a este piso");
        }
    }, [currentFloor]);

    const onClickRoute = () => {
        matchfloorButons();
        if (validationByFloor()) {
            route();
        }
    };

    //Funcion cambiar boton en caso de considencia de piso
    const matchfloorButons = () => {
        let botonesExternosAux = externalButons;
        if (isGoingUp) {
            //debugger;
            switch (currentFloor) {
                case 1:
                    if (externalButons[11]) {
                        botonesExternosAux[11] = false;
                    }
                    break;

                case 2:
                    if (externalButons[9]) {
                        botonesExternosAux[9] = false;
                    }
                    break;

                case 3:
                    if (externalButons[7]) {
                        botonesExternosAux[7] = false;
                    }
                    break;
                case 4:
                    if (externalButons[5]) {
                        botonesExternosAux[5] = false;
                    }
                    break;

                case 5:
                    if (externalButons[3]) {
                        botonesExternosAux[3] = false;
                    }
                    break;

                case 6:
                    if (externalButons[1]) {
                        botonesExternosAux[1] = false;
                    }
                    break;
                default:
                    console.log("otropiso");
                    break;
            }
        } else {
            switch (currentFloor) {
                case 2:
                    if (externalButons[10]) {
                        botonesExternosAux[10] = false;
                    }
                    break;

                case 3:
                    if (externalButons[8]) {
                        botonesExternosAux[8] = false;
                    }
                    break;
                case 4:
                    if (externalButons[6]) {
                        botonesExternosAux[6] = false;
                    }
                    break;

                case 5:
                    if (externalButons[4]) {
                        botonesExternosAux[4] = false;
                    }
                    break;

                case 6:
                    if (externalButons[2]) {
                        botonesExternosAux[2] = false;
                    }
                    break;
                default:
                    console.log("otropiso");
                    break;
            }
        }

        setExternalButons([...botonesExternosAux]);
    };

    // Funcion de validacion por piso
    const validationByFloor = () => {
        let flag: boolean = true;
        if (moveMost()) {
            if (isGoingUp) {
                switch (currentFloor) {
                    case 1:
                        if (externalButons[11]) {
                            flag = false;
                        }
                        break;

                    case 2:
                        if (externalButons[9]) {
                            flag = false;
                        }
                        break;

                    case 3:
                        if (externalButons[7]) {
                            flag = false;
                        }
                        break;
                    case 4:
                        if (externalButons[5]) {
                            flag = false;
                        }
                        break;

                    case 5:
                        if (externalButons[3]) {
                            flag = false;
                        }
                        break;

                    case 6:
                        if (externalButons[1]) {
                            flag = false;
                        }
                        break;
                    default:
                        console.log("otropiso");
                        break;
                }
            } else {
                switch (currentFloor) {
                    case 2:
                        if (externalButons[10]) {
                            flag = false;
                        }
                        break;

                    case 3:
                        if (externalButons[8]) {
                            flag = false;
                        }
                        break;

                    case 4:
                        if (externalButons[6]) {
                            flag = false;
                        }
                        break;
                    case 5:
                        if (externalButons[4]) {
                            flag = false;
                        }
                        break;

                    case 6:
                        if (externalButons[2]) {
                            flag = false;
                        }
                        break;

                    case 7:
                        if (externalButons[0]) {
                            flag = false;
                        }
                        break;
                    default:
                        console.log("otropiso");
                        break;
                }
            }
        } else flag = false;

        return flag;
    };

    //Funcion que simula el movimiento del elevador
    const route = async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        if (isGoingUp) {
            if (currentFloor < 7) {
                setCurrentFloor(currentFloor + 1);
            } else {
                isGoingUp = false;
                setIsGoingUp(false);
                setCurrentFloor(currentFloor - 1);
            }
        } else {
            if (currentFloor > 1) {
                setCurrentFloor(currentFloor - 1);
            } else {
                isGoingUp = true;
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
                        <Elevator
                            stateDoor={openDoor}
                            floor={currentFloor}></Elevator>
                    </div>
                    <RequestTable
                        onClickButon={onClickRoute}
                        setlistButons={setExternalButons}
                        listButons={externalButons}></RequestTable>
                </div>
            </div>
        </>
    );
}

export default App;
