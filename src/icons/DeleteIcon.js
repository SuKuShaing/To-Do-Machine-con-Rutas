import React from "react";
import { TodoIcon } from "./TodoIcons";

function DeleteIcon({ onDelete }) {
	return (
		<TodoIcon
            type="delete"
            color="gray"
            onClick={onDelete}
        />
	);
}

export { DeleteIcon };
