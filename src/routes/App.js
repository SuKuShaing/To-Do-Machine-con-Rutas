import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./home/HomePage";
import { NewToDoPage } from "./new/NewToDoPage";
import { EditToDoPage } from "./edit/EditToDoPage";
import { TodoProvider } from "../ui/todoContext/index.js";

function App() {
	return (
		<HashRouter>
			<TodoProvider>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/new" element={<NewToDoPage />} />
					{/* hay un Hook llamada useParams de react router-dom que permite acceder a los parámetros de la URL */}
					<Route path="/edit/:todoId" element={<EditToDoPage />} />
				</Routes>
			</TodoProvider>
		</HashRouter>
	);
}

export default App;
