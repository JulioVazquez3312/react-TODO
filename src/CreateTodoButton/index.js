import { MdAdd } from "react-icons/md";
import './CreateTodoButton.css';
function CreateTodoButton({ setOpenModal }) {
    return (
        <button className="CreateTodoButton"
            onClick={() => setOpenModal(state => !state)}>
            <MdAdd />
        </button>
    );
}
export { CreateTodoButton };