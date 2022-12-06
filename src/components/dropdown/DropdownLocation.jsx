import DropdownContent from "./DropdownContent";
import {Link} from "react-router-dom";
import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleUp, faAngleDown} from '@fortawesome/free-solid-svg-icons'
import '../../styles/Dropdown.css'

const Dropdown = (props) => {
    const [isContentVisible, setIsContentVisible] = useState(true);
    const handleClick = () => {
        setIsContentVisible(!isContentVisible);
    }
    return (
        <div className={`dropdown${props.sizeClass ? ' dropdown--' + props.sizeClass : ''}`}>
            <Link to="#" className="dropdown__header__location" onClick={handleClick}>
                <span className="dropdown__name__location">{props.title}</span>
                <FontAwesomeIcon {...isContentVisible ? {icon: faAngleUp} : {icon: faAngleDown}} />
            </Link>
            <div className="dropdown__content__location" style={{display: isContentVisible ? 'block' : 'none' }}>
                {
                    props.item ? <p>{props.item}</p> : <DropdownContent items={props.items} />
                }
            </div>
        </div>
    )
}

export default Dropdown;