import { CompleteIcon } from '../../icons/CompleteIcon';
import { DeleteIcon } from '../../icons/DeleteIcon';
import { EditIcon } from '../../icons/EditIcon';
import './TodoItem.css';

function TodoItem(props) {
	return (
		<li className="TodoItem">
			<CompleteIcon 
				completed={props.completed}
				onComplete={props.onComplete} // onComplete es una función que se ejecuta cuando se hace click en el icono de check
			/>
			<p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
			<EditIcon
				className="TodoItem-edit"
				onEdit={props.onEdit} // onEdit es una función que se ejecuta cuando se hace click en el icono de editar
			/>
			<DeleteIcon 
				onDelete={props.onDelete} // onDelete es una función que se ejecuta cuando se hace click en el icono de eliminar
			/>
		</li>
	);
}

export { TodoItem };
