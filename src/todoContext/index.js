import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext()

function TodoProvider( { children } ) {
    // Estados
	const {
		item: todos,
		iSaveItem: saveTodos,
		loading,
		error
	} = useLocalStorage('todosEnLocalStorage', []); // al estado de Todos le pasamos el array de defaultTodos
	const [searchValue, setSearchValue] = React.useState("");
	// console.log("Los usuarios buscan todos de " + searchValue);
	const [openModal, setOpenModal] = React.useState(false);


	// Estados derivados
	const completedTodos = todos.filter((todo) => !!todo.completed).length; // !! convierte el valor devuelto a booleano
	const totalTodos = todos.length;
	const searchedTodos = todos.filter((todo) => {
		const todoText = todo.text ? todo.text.toLowerCase() : ""; // Verifica si todo.text existe
		const searchText = searchValue.toLowerCase();
		return todoText.includes(searchText);
	});


	// React.useEffect(() => {
	// 	console.log('Log 2: Dentro del useEffect');
	// }, []);  // si le pasamos un array vacio, el useEffect se ejecutará solo una vez

	// React.useEffect(() => {
	// 	console.log('Log 2: Dentro del useEffect');
	// }, [totalTodos]);  // si le pasamos un array con una variable, el useEffect se ejecutará solo cuando esa variable cambie


	// Funciones
	const iCompletedTodo = (text) => {
		const newTodos = [...todos]; // copiamos el array de ToDos
		const todoIndex = newTodos.findIndex((todo) => todo.text === text);
		if (newTodos[todoIndex].completed) {
			newTodos[todoIndex].completed = false;
		} else {
			newTodos[todoIndex].completed = true;
		}
		saveTodos(newTodos);
	};

	const iDeleteTodo = (text) => {
		const newTodos = [...todos];
		const todoIndex = newTodos.findIndex((todo) => todo.text === text);
		newTodos.splice(todoIndex, 1); // splice elimina un elemento de un array en el indice que le indiquemos y avanza la cantidad de elementos que le indiquemos
			saveTodos(newTodos);
	};

	const addTodo = (text) => {
		const newTodos = [...todos]; // copiamos el array de ToDos
		newTodos.push({
			text,
			completed: false,
		});
		saveTodos(newTodos);
	};

    return (
        <TodoContext.Provider value={{
			loading,
			error,
			completedTodos,
			totalTodos,
			searchValue,
			setSearchValue,
			searchedTodos,
			iCompletedTodo,
			iDeleteTodo,
			addTodo,
			openModal,
			setOpenModal,
		}}>
			{children}
		</TodoContext.Provider>
        // <TodoContext.Consumer></TodoContext.Consumer>
    )
}

export { TodoContext, TodoProvider };