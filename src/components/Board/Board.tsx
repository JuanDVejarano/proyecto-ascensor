import "./Board.scss";

const Board = (props) => (
    <div className="board">
        <div className="floor">
            <p className="floor__p">{props.floor}</p>
        </div>
        <ul className="list">
            {props.internalButons.map(
                (internalButons: boolean, index: number) => (
                    <li
                        key={index}
                        className={
                            internalButons ? "list__button--on" : "list__button"
                        }>
                        <button>{index + 1}</button>
                    </li>
                )
            )}
        </ul>
    </div>
);

export default Board;
