import "./Elevator.scss";

const Elevator = (props: any) => {
    const { floor } = props;

    let elevatorClass = "elevator";
    switch (floor) {
        case 1:
            elevatorClass += "--first";
            break;
        case 2:
            elevatorClass += "--second";
            break;
        case 3:
            elevatorClass += "--third";
            break;
        case 4:
            elevatorClass += "--fourth";
            break;
        case 5:
            elevatorClass += "--fifth";
            break;
        case 6:
            elevatorClass += "--sixth";
            break;
        case 7:
            elevatorClass += "--seventh";
            break;
        default:
            break;
    }

    return (
        <div className={elevatorClass}>
            <div className={props.stateDoor ? "doors--open" : "doors"}>
                <div className="doors__left"></div>
                <div className="doors__right"></div>
            </div>
        </div>
    );
};

export default Elevator;
