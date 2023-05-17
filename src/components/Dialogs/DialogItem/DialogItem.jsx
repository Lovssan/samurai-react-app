import { NavLink } from 'react-router-dom'
import './DialogItem.css'

const DialogItem = (props)=>{
return (
    <div className = 'dialog '>
        <NavLink to={`/dialogs/${props.id}`}>{props.userName}</NavLink> 
    </div>
)
}


export default DialogItem