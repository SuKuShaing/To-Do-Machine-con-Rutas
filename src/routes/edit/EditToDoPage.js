import React from "react";
import { TodoForm } from "../../ui/TodoForm";
import { ContainerWhite } from "../../ui/ContainerWhite";
import { Background } from "../../ui/ContainerWhite/Background";
import { TodoContext } from "../../ui/todoContext";
import { useParams } from "react-router-dom";

function EditToDoPage() {
    const { todoId } = useParams();
    const { iEditTodo  } = React.useContext(TodoContext);
    console.log("🚀 ~ EditToDoPage ~ todoId:", todoId)
    
	return (
		<>
			<ContainerWhite>
				<TodoForm
					label="Edita tu To Do"
					submitText="Editar"
					submitEvent={(newText) => iEditTodo(Number(todoId), newText)}
                    />
			</ContainerWhite>
			<Background />
		</>
	);
}

export { EditToDoPage };
