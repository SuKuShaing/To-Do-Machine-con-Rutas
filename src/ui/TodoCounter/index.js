import React from "react";
import { TodoContext } from "../todoContext";
import "./TodoCounter.css";

// const estilos = {
// 	backgroundColor: "red",
// };

function TodoCounter() {
	const { completedTodos, totalTodos, loading } = React.useContext(TodoContext);

	return (
		loading ? 
		<h1>
			Cargando Todos
		</h1>
		:
			completedTodos === totalTodos
			? <h1>
				Has completado todos los TODOs
			</h1>
			: <h1>
				Has completado {completedTodos} de {totalTodos} TODOs
			</h1>
	);
}

export { TodoCounter };
