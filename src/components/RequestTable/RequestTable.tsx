import React, { FC } from "react";
import btnArribaApagado from "../../assets/externalButons/boton-arriba-apagado.png";
import btnArribaEncendido from "../../assets/externalButons/boton-arriba-encendido.png";
import btnAbajoApagado from "../../assets/externalButons/boton-abajo-apagado.png";
import btnAbajoEncendido from "../../assets/externalButons/boton-abajo-encendido.png";
import "./RequestTable.scss";

interface RequestTableProps {}

const RequestTable: FC<RequestTableProps> = (props: any) => {
    let changeButton = (index: number) => {
        let listaTemporal = props.listButons;
        listaTemporal[index] = true;
        props.onClickButon();
        props.setlistButons([...listaTemporal]);
    };
    return (
        <ul className="requestTable">
            {props.listButons.map((item: any, index: number) => (
                <li key={index} className="requestTable__item">
                    <button onClick={() => changeButton(index)}>
                        {item ? (
                            index % 2 === 0 ? (
                                <img
                                    src={btnAbajoEncendido}
                                    alt="Button Down On"
                                />
                            ) : (
                                <img
                                    src={btnArribaEncendido}
                                    alt="Button Up On"
                                />
                            )
                        ) : index % 2 === 0 ? (
                            <img src={btnAbajoApagado} alt="Button Down Off" />
                        ) : (
                            <img src={btnArribaApagado} alt="Button Up Off" />
                        )}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default RequestTable;
