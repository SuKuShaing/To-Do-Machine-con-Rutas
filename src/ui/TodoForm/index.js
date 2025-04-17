import React from "react";
import { TodoContext } from "../todoContext";
import "./TodoForm.css";

function TodoForm() {
	const { 
		addTodo,
		setOpenModal
	} = React.useContext(TodoContext);

	const [newTdodoValue, setNewTodoValue] = React.useState("");

	const onSubmit = (event) => {
		event.preventDefault(); // evita los valores por defecto entre ellos el recargar la pagina
 		addTodo(newTdodoValue); // agregamos el nuevo TODO al contexto global
		setOpenModal(false); // cerramos el modal
	}
	
	const onCancel = () => {
		setOpenModal(false); // cerramos el modal
	}

	const onChange = (event) => {
		setNewTodoValue(event.target.value);
	}

	return (
		<form onSubmit={onSubmit}>
			<label>Escribe tu nuevo ToDo</label>
			<textarea 
				placeholder="Escribe lo que tienes que hacer"
				value={newTdodoValue}
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
					Crear TODO
				</button>
			</div>
		</form>
	);
}

export { TodoForm };
