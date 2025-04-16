import React from "react";

import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Background } from "../ContainerWhite/Background";
import { ContainerWhite } from "../ContainerWhite";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

import { TodoContext } from "../todoContext";

function AppUI() {
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
				<TodoCounter
				// loading={loading}
				// completed={completedTodos}
				// total={totalTodos}
				/>

				<div className="Search-Create">
					<TodoSearch
					// searchValue={searchValue} // enviamos el estado a traves de la propiedad
					// setSearchValue={setSearchValue}
					/>
					<CreateTodoButton setOpenModal={setOpenModal} />

					{openModal && (
                        <Modal onClose={() => setOpenModal(false)}>
                            <TodoForm />
                        </Modal>
                    )}
				</div>

				<TodoList>
					{/* React necesita una key cuando itera desde un array */}
					{/* defaultTodos */}
					{loading && <TodosLoading />}
					{error && <TodosError />}
					{!loading && !searchedTodos.length && <EmptyTodos />}

					{searchedTodos.map((props) => (
						<TodoItem
							key={props.text}
							text={props.text}
							completed={props.completed}
							onComplete={() => iCompletedTodo(props.text)} // onComplete es una función que se ejecuta cuando se hace click en el icono de check
							onDelete={() => iDeleteTodo(props.text)}
						/>
					))}
				</TodoList>
			</ContainerWhite>

			<Background />
		</>
	);
}

export { AppUI };
