import React from "react";
import { TodoForm } from "../../ui/TodoForm";
import { ContainerWhite } from "../../ui/ContainerWhite";
import { Background } from "../../ui/ContainerWhite/Background";

function NewToDoPage() {
	return (
		<>
			<ContainerWhite>
				<TodoForm
                    label="Escribe tu nuevo To Do"
                    submitText="Crear TODO"
                    submitEvent={() => console.log("Llamar a addTodo")}
                />
			</ContainerWhite>
			<Background />
		</>
	);
}

export { NewToDoPage };
