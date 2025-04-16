import "./CreateTodoButton.css";

function CreateTodoButton({ setOpenModal }) {
	return (
		<button
			className="CreateTodoButton"
			onClick={
                () => {
                    setOpenModal(state => !state);
					// console.log("Crear una nueva tarea");
                    // console.log(event);
                    // console.log(event.target);
                }}
		>
			+
		</button>
	);
}

export { CreateTodoButton };
