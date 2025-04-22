import React from "react";
import { TodoForm } from "../../ui/TodoForm";
import { ContainerWhite } from "../../ui/ContainerWhite";
import { Background } from "../../ui/ContainerWhite/Background";

function EditToDoPage() {
    return (
		<>
			<ContainerWhite>
				<TodoForm
                    label="Edita tu To Do"
                    submitText="Editar"
                    submitEvent={() => console.log("Llamar a editTodo")}
                />
			</ContainerWhite>
			<Background />
		</>
    );
};

export { EditToDoPage };