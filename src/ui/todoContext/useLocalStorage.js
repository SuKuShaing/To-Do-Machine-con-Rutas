import React from "react";

// Custom Hook
// Hook personalizado para guardar los todos en el localStorage
function useLocalStorage(itemName, initialValue) {
	const [item, setItem] = React.useState(initialValue); // declaramos un estado para guardar los todos
	const [loading, setLoading] = React.useState(true); // declaramos un estado para saber si los todos se están cargando
	const [error, setError] = React.useState(false); // declaramos un estado para saber si hubo un error al cargar los todos

	React.useEffect(() => {
		setTimeout(() => {
			try {
				const localStorageItem = localStorage.getItem(itemName); // obtenemos los todos del localStorage

				let parsedItem; // declaramos una variable para guardar los todos del localStorage

				if (!localStorageItem) {
					localStorage.setItem(itemName, JSON.stringify(initialValue)); // si no hay todos en el localStorage, creamos un valor inicial que nos enviaron
					parsedItem = initialValue;
				} else {
					parsedItem = JSON.parse(localStorageItem); // convertimos los todos del localStorage a un array de objetos
					setItem(parsedItem); // setTodos es la función que actualiza el estado de todos
				}

				setLoading(false); // cambiamos el estado de loading a false
			} catch (error) {
				setLoading(false); // cambiamos el estado de loading a false
				setError(true); // si hay un error al cargar los todos, cambiamos el estado de error a true
			}
		}, 1000);
	}, []); // si le pasamos un array vacio, el useEffect se ejecutará solo una vez

	const iSaveItem = (newItem) => {
		// función para guardar los todos en el localStorage y actualizar el estado de todos
		localStorage.setItem(itemName, JSON.stringify(newItem)); // guardamos los todos en el localStorage
		setItem(newItem); // setTodos es la función que actualiza el estado de todos
	};

	return {
		item,
		iSaveItem,
		loading,
		error,
	}; // retornamos los estados y la función para guardar los todos
}

export { useLocalStorage }; // exportamos el Hook personalizado




// const defaultTodos = [
// 	{ text: "Cortar cebolla", completed: false },
// 	{ text: "Tomar el curso de introducción a React.js", completed: false },
// 	{ text: "Llorar con la llorona", completed: false },
// 	{ text: "Otra tarea", completed: false },
// 	{ text: "Cortar el pasto", completed: false },
// 	{ text: "barrer la calle", completed: false },
// 	{ text: "Aprender estados", completed: true },
// 	{ text: "Usar estados deribados", completed: true },
// ];

// localStorage.setItem('todosEnLocalStorage', JSON.stringify(defaultTodos)); // guardamos los todos en el localStorage
