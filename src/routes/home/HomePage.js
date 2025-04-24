import React from "react";
import { useNavigate } from "react-router-dom";

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
		// openModal,
		// setOpenModal
	} = React.useContext(TodoContext);

	const navigate = useNavigate();

	return (
		<>
			<ContainerWhite>
				<TodoCounter/>

				<div className="Search-Create">
					<TodoSearch/>
					<CreateTodoButton
						onClick={() => navigate('/new')}
						// setOpenModal={setOpenModal}
					/>

					{/* {openModal && (
                        <Modal onClose={() => setOpenModal(false)}>
                            <TodoForm />
                        </Modal>
                    )} */}
				</div>

				<TodoList>
					{loading && <TodosLoading />}
					{error && <TodosError />}
					{!loading && !searchedTodos.length && <EmptyTodos />}

					{searchedTodos.map((toDo) => (
						<TodoItem
							key={toDo.id}
							text={toDo.text}
							completed={toDo.completed}
							onComplete={() => iCompletedTodo(toDo.id)} // onComplete es una función que se ejecuta cuando se hace click en el icono de check
							onEdit={() => navigate(`/edit/${toDo.id}`, {
								state: { toDo },
							})} // onEdit es una función que se ejecuta cuando se hace click en el icono de editar
							onDelete={() => iDeleteTodo(toDo.id)}
						/>
					))}
				</TodoList>
			</ContainerWhite>

			<Background />
		</>
	);
}

export { HomePage };
