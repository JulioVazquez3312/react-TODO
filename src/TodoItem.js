import { BsXCircleFill } from "react-icons/bs";
import { GoCheckCircle } from "react-icons/go";
import './TodoItem.css';

function TodoItem(props) {
    return (
        <li className="TodoItem">
            <span 
                className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
                onClick={props.onComplete}
            >
                <GoCheckCircle />
            </span>
            <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
                {props.text}
            </p>
            <span className="Icon Icon-delete"
                onClick={props.onDelete}
            >
                <BsXCircleFill />
            </span>
        </li>
    );
}

export { TodoItem };