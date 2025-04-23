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
	} = useLocalStorage('todosEnLocalStorage_v2', []); // al estado de Todos le pasamos el array de defaultTodos
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
	const iCompletedTodo = (id) => {
		const newTodos = [...todos]; // copiamos el array de ToDos
		const todoIndex = newTodos.findIndex((todo) => todo.id === id);
		if (newTodos[todoIndex].completed) {
			newTodos[todoIndex].completed = false;
		} else {
			newTodos[todoIndex].completed = true;
		}
		saveTodos(newTodos);
	};

	const iEditTodo = (id, newText) => {		
		const newTodos = [...todos]; // copiamos el array de ToDos
		const todoIndex = newTodos.findIndex((todo) => todo.id === id);

		if (todoIndex === -1) {
			console.error("No se encontró el todo con id:", id);
			return;
		}
		
		newTodos[todoIndex].text = newText;

		saveTodos(newTodos);
	};

	const iDeleteTodo = (id) => {
		const newTodos = [...todos];
		const todoIndex = newTodos.findIndex((todo) => todo.id === id);
		newTodos.splice(todoIndex, 1); // splice elimina un elemento de un array en el indice que le indiquemos y avanza la cantidad de elementos que le indiquemos
		saveTodos(newTodos);
	};

	const addTodo = (text) => {
		const id = newTodoId(todos);
		const newTodos = [...todos]; // copiamos el array de ToDos
		newTodos.push({
			text,
			completed: false,
			id,
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
			iEditTodo,
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

// Genera un nuevo ID para el nuevo ToDo
function newTodoId(todoList) {
	if (!todoList.length) {
		return 1; // si no hay ToDos, el primer ID será 1
	}

	const idList = todoList.map((todo) => todo.id); // aquí retornamos un array con los ids de los todos así [1, 2, 3, 4]
	const idMax = Math.max(...idList) + 1;
	return idMax;

};

export { TodoContext, TodoProvider };