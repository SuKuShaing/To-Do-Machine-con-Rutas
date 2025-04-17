import React from "react";
import { AppUI } from "./AppUI.js";

import "./App.css";
import { TodoProvider } from "../ui/todoContext/index.js";

function App() {
	return (
		<TodoProvider>
			<AppUI />
		</TodoProvider>
	)
}

export default App;
