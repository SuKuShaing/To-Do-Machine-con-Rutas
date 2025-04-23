import React from "react";
import { TodoForm } from "../../ui/TodoForm";
import { ContainerWhite } from "../../ui/ContainerWhite";
import { Background } from "../../ui/ContainerWhite/Background";
import { TodoContext } from "../../ui/todoContext";

function NewToDoPage() {
	const { addTodo  } = React.useContext(TodoContext);

	return (
		<>
			<ContainerWhite>
				<TodoForm
                    label="Escribe tu nuevo To Do"
                    submitText="Crear TODO"
                    submitEvent={(newText) => addTodo(newText)} // le pasamos el texto a la función que agrega el nuevo TODO
                />
			</ContainerWhite>
			<Background />
		</>
	);
}

export { NewToDoPage };
