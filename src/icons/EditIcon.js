import React from "react";
import { TodoIcon } from "./TodoIcons";

function EditIcon({ onEdit }) {
	return (
		<TodoIcon
            type="edit"
            onClick={onEdit}
        />
	);
}

export { EditIcon };
