import "./CreateTodoButton.css";

function CreateTodoButton(props) {
	return (
		<button
			className="CreateTodoButton"
			onClick={props.onClick}
                // () => {
                    // props.setOpenModal(state => !state);
					// console.log("Crear una nueva tarea");
                    // console.log(event);
                    // console.log(event.target);
                // }}
		>
			+
		</button>
	);
}

export { CreateTodoButton };
