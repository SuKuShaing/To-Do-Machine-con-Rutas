import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';
import { ReactComponent as EditSVG } from './edit.svg';
import './TodoIcons.css';

const inconTypes = {
    "check": (color) => <CheckSVG className='Icon-svg' fill={color}/>,
    "edit": (color) => <EditSVG className='Icon-svg Icon-svg--edit' fill={color}/>,
    "delete": (color) => <DeleteSVG className='Icon-svg' fill={color}/>,
}

function TodoIcon({ type, color = "gray", onClick }) {
    return (
        <span
            className={` Icon-container Icon-container-${type}`}
            onClick={onClick}
        >
            {inconTypes[type](color)}
        </span>
    )
}

export { TodoIcon };