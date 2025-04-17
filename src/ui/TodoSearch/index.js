import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../todoContext";


function TodoSearch() {
	// const [state, setState] = React.useState('Valor inicial del estado');
	// state es inmutable (no se puede modificar directamente)
	// setState es el que modifica el estado, ambos pueden tener el nombre que quieran

	// los estados van de padres a hijos y no al revés

	const { searchValue, setSearchValue } = React.useContext(TodoContext);

	return (
		<input
			placeholder="Buscar ToDo"
			className="input-TodoSearch"
			value={searchValue} // valor que van a ver los usuarios
			onChange={(event) => {
					console.log(event.target.value);
					setSearchValue(event.target.value);
				}}
		/>
	);
}

export { TodoSearch };
