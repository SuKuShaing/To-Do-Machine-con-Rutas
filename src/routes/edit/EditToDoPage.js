import React, { use } from "react";
import { TodoForm } from "../../ui/TodoForm";
import { ContainerWhite } from "../../ui/ContainerWhite";
import { Background } from "../../ui/ContainerWhite/Background";
import { TodoContext } from "../../ui/todoContext";
import { useLocation, useParams } from "react-router-dom";

function EditToDoPage() {
	const location = useLocation();
	const { todoId } = useParams();
	const { loading, iEditTodo, getToDo } = React.useContext(TodoContext);

	let todoText;

	if (location.state?.todo) { // sí existe, es decir, venimos del home, el texto que trae se lo pasamos al todoText
		todoText = location.state.todo.text; // el todoText es quien colocará el texto por default en el input del formulario

	} else if (loading) { // sí no viene del home, sino que entró directamente a esta URL, esperamos que se carguen los ToDo al contexto 
		return (
			<>
				<ContainerWhite>
					<p
						style={{
							textAlign: "center",
							fontSize: "24px",
							fontWeight: "bold",
							color: "#fff",
							marginTop: "20px",
						}}
					>Cargando...</p>
				</ContainerWhite>
				<Background />
			</>
		);
	} else { // una vez terminó de cargar, se revalúa el componente y ahora sí ya tenemos el ToDo en el contexto
		const toDo = getToDo(Number(todoId)); // Obtenemos el ToDo a editar
		todoText = toDo.text;
	}

	return (
		<>
			<ContainerWhite>
				<TodoForm
					label="Edita tu To Do"
					defaultToDoText={todoText}
					submitText="Editar"
					submitEvent={(newText) => iEditTodo(Number(todoId), newText)}
				/>
			</ContainerWhite>
			<Background />
		</>
	);
}

export { EditToDoPage };
