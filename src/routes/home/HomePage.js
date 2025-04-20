import React from "react";

import { TodoCounter } from "../../ui/TodoCounter";
import { TodoSearch } from "../../ui/TodoSearch";
import { TodoList } from "../../ui/TodoList";
import { TodoItem } from "../../ui/TodoItem";
import { CreateTodoButton } from "../../ui/CreateTodoButton";
import { Background } from "../../ui/ContainerWhite/Background";
import { ContainerWhite } from "../../ui/ContainerWhite";
import { TodosLoading } from "../../ui/TodosLoading";
import { TodosError } from "../../ui/TodosError";
import { EmptyTodos } from "../../ui/EmptyTodos";
import { Modal } from "../../ui/Modal";
import { TodoForm } from "../../ui/TodoForm";

import { TodoContext } from "../../ui/todoContext";

import "./homePage.css";

function HomePage() {
	const {
		loading,
		error,
		searchedTodos,
		iCompletedTodo,
		iDeleteTodo,
		openModal,
		setOpenModal
	} = React.useContext(TodoContext);

	return (
		<>
			<ContainerWhite>
				<TodoCounter/>

				<div className="Search-Create">
					<TodoSearch/>
					<CreateTodoButton setOpenModal={setOpenModal} />

					{openModal && (
                        <Modal onClose={() => setOpenModal(false)}>
                            <TodoForm />
                        </Modal>
                    )}
				</div>

				<TodoList>
					{loading && <TodosLoading />}
					{error && <TodosError />}
					{!loading && !searchedTodos.length && <EmptyTodos />}

					{searchedTodos.map((props) => (
						<TodoItem
							key={props.text}
							text={props.text}
							completed={props.completed}
							onComplete={() => iCompletedTodo(props.text)} // onComplete es una función que se ejecuta cuando se hace click en el icono de check
							onEdit={() => console.log("Soy el ConsoleLog de Editar")}
							onDelete={() => iDeleteTodo(props.text)}
						/>
					))}
				</TodoList>
			</ContainerWhite>

			<Background />
		</>
	);
}

export { HomePage };
