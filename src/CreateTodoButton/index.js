import { MdAdd } from "react-icons/md";
import './CreateTodoButton.css';
function CreateTodoButton() {
    return (
        <button className="CreateTodoButton"
            onClick={
                (event) => {
                    console.log('Creando nuevo TODO')
                    console.log(event)
                    console.log(event.target)
                }
            }>
        <MdAdd />
        </button>
    );
}
export { CreateTodoButton };