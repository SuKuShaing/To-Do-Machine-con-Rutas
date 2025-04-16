import "./EmptyTodos.css";


function EmptyTodos() {
	return (
		<li className="TodoItem-empty">
			<p className="TodoEmpty-p" >Crea tu Primer ToDo presionando el botón +</p>
		</li>
	);
}

export { EmptyTodos };
