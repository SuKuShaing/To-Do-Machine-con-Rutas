import { CompleteIcon } from '../icons/CompleteIcon';
import { DeleteIcon } from '../icons/DeleteIcon';
import './TodoItem.css';

function TodoItem(props) {
	return (
		<li className="TodoItem">
			<CompleteIcon 
				completed={props.completed}
				onComplete={props.onComplete} // onComplete es una función que se ejecuta cuando se hace click en el icono de check
			/>
			<p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
			<DeleteIcon 
				onDelete={props.onDelete} // onDelete es una función que se ejecuta cuando se hace click en el icono de eliminar
			/>
		</li>
	);
}

export { TodoItem };
