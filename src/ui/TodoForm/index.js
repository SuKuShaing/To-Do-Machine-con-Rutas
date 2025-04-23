import React from "react";
import { useNavigate } from "react-router-dom";

import { TodoContext } from "../todoContext";

import "./TodoForm.css";

function TodoForm(props) {
	const { 
		addTodo,
		setOpenModal
	} = React.useContext(TodoContext);

	const [newTodoValue, setNewTodoValue] = React.useState("");

	const Navigate = useNavigate();

	const onSubmit = (event) => {
		event.preventDefault(); // evita los valores por defecto entre ellos el recargar la pagina
 		// addTodo(newTodoValue); // agregamos el nuevo TODO al contexto global
		props.submitEvent(newTodoValue); // llamamos a la función que viene del padre y le pasamos el nuevo TODO
		Navigate('/');
		// setOpenModal(false); // cerramos el modal
	}
	
	const onCancel = () => {
		Navigate('/');
		// setOpenModal(false); // cerramos el modal
	}

	const onChange = (event) => {
		setNewTodoValue(event.target.value);
	}

	return (
		<form onSubmit={onSubmit}>
			<label>{props.label}</label>
			<textarea 
				placeholder="Escribe lo que tienes que hacer"
				value={newTodoValue}
				onChange={onChange}
				required
			/>
			<div className="TodoForm-buttonContainer">
				<button
					type="buton" // submit es el valor por defecto
					className="TodoForm-button TodoForm-button--cancel"
					onClick={onCancel}
				>
					Cancelar
				</button>
				<button
					type="submit"
					className="TodoForm-button TodoForm-button--add">
					{props.submitText}
				</button>
			</div>
		</form>
	);
}

export { TodoForm };
