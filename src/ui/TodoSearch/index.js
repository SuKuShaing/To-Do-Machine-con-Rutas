import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../todoContext";
import { useSearchParams } from "react-router-dom";

function TodoSearch() {
	// const [state, setState] = React.useState('Valor inicial del estado');
	// state es inmutable (no se puede modificar directamente)
	// setState es el que modifica el estado, ambos pueden tener el nombre que quieran

	// los estados van de padres a hijos y no al revés

	const { searchValue, setSearchValue } = React.useContext(TodoContext);
	let [searchParams, setSearchParams] = useSearchParams();
	console.log("🚀 ~ HomePage ~ searchParams:", searchParams);

	// Inicializa el estado con el parámetro "Search" de la URL (si existe)
	React.useEffect(() => {
		const query = searchParams.get("Search") || "";
		setSearchValue(query);
	}, [searchParams, setSearchValue]);

	const handleChange = (event) => {
		const newValue = event.target.value;
		setSearchValue(newValue);

		// Actualiza la URL: si hay búsqueda, agrega o actualiza el parámetro "Search"; de lo contrario, lo remueve
		if (newValue) {
			setSearchParams({ Search: newValue });
		} else {
			setSearchParams({});
		}
	};

	return (
		<input
			placeholder="Buscar ToDo"
			className="input-TodoSearch"
			value={searchValue} // valor que van a ver los usuarios
			onChange={handleChange} // función que se ejecuta cuando el usuario escribe en el input
			// onChange={(event) => {
			// 	console.log(event.target.value);
			// 	setSearchValue(event.target.value);
			// }}
		/>
	);
}

export { TodoSearch };
