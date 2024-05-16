import { useEffect, useState } from "react";
import Tower from "./components/Tower/Tower";
import "./App.scss";
import Elevator from "./components/Elevator/Elevator";
import RequestTable from "./components/RequestTable/RequestTable";
import Board from "./components/Board/Board";

function App() {
    //#region variables
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

    //#endregion

    //#region funciones

    //useEffect que se ejecuta cada vez que se presiona un boton interno o externo del elevador o cuando el elevador llega a un piso
    useEffect(() => {
        //Si hace match con el piso actual
        if (isPressed()) {
            if (itIsOnTheFloor()) {
                //debugger;
                (async () => {
                    //Abre y cierra puertas
                    await functionOpentehDoors();
                    //Apagar botones externos
                    await offButton();
                })();
            }
            //Si no hace match con el piso actual
            if (!itIsOnTheFloor()) {
                //Si hay botones internos o externos presionados
                if (isPressed()) {
                    //Hacer ruta del elevador
                    route();
                }
            }
        }
    }, [currentFloor, externalButons, internalButons]);

    //Funcion que verifica si hay botones internos o externos presionados
    const isPressed = () => {
        let hasTrueInternalButtons = internalButons.some((value) => value);
        let hasTrueExternalButtons = externalButons.some((value) => value);
        if (hasTrueInternalButtons || hasTrueExternalButtons) {
            return true;
        }
    };

    // Funcion que simula el abrir y cerrar de las puertas
    const functionOpentehDoors = async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setOpenDoor(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setOpenDoor(false);
        await new Promise((resolve) => setTimeout(resolve, 1000));
    };

    //FFuncion para apagar botones externos
    const offButton = () => {
        let botonesExternosAux = externalButons;
        if (currentFloor === 1 && externalButons[11]) {
            botonesExternosAux[11] = false;
        } else if (currentFloor === 7 && externalButons[0]) {
            botonesExternosAux[0] = false;
        }
        if (isGoingUp) {
            //debugger;
            switch (currentFloor) {
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
                    break;
            }
        }

        setExternalButons([...botonesExternosAux]);
    };

    // Funcion de validacion por piso
    const itIsOnTheFloor = () => {
        let flag: boolean = false;
        let botonesExternosAux = externalButons;
        if (currentFloor === 1 && externalButons[11]) {
            flag = true;
        } else if (currentFloor === 7 && externalButons[0]) {
            flag = true;
        }
        if (isGoingUp) {
            switch (currentFloor) {
                case 1:
                    if (externalButons[11]) {
                        flag = true;
                    }
                    break;

                case 2:
                    if (externalButons[9]) {
                        flag = true;
                    }
                    break;

                case 3:
                    if (externalButons[7]) {
                        flag = true;
                    }
                    break;
                case 4:
                    if (externalButons[5]) {
                        flag = true;
                    }
                    break;

                case 5:
                    if (externalButons[3]) {
                        flag = true;
                    }
                    break;

                case 6:
                    if (externalButons[1]) {
                        flag = true;
                    }
                    break;
                default:
                    break;
            }
        } else {
            switch (currentFloor) {
                case 2:
                    if (externalButons[10]) {
                        flag = true;
                    }
                    break;

                case 3:
                    if (externalButons[8]) {
                        flag = true;
                    }
                    break;

                case 4:
                    if (externalButons[6]) {
                        flag = true;
                    }
                    break;
                case 5:
                    if (externalButons[4]) {
                        flag = true;
                    }
                    break;

                case 6:
                    if (externalButons[2]) {
                        flag = true;
                    }
                    break;

                case 7:
                    if (externalButons[0]) {
                        flag = true;
                    }
                    break;
                default:
                    break;
            }
        }

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

    //#endregion

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
                        setlistButons={setExternalButons}
                        listButons={externalButons}></RequestTable>
                </div>
                <Board
                    floor={currentFloor}
                    internalButons={internalButons}></Board>
            </div>
        </>
    );
}

export default App;
