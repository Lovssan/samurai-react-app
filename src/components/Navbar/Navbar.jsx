import { NavLink } from 'react-router-dom'
import './Navbar.css'
function Navbar(){
    return(
        <nav className='nav'>
            <div className='left-menu-item'><NavLink  to='/profile'>Profile</NavLink></div>
            <div className='left-menu-item'><NavLink to='/dialogs'>Messages</NavLink></div>
            <div className='left-menu-item'><NavLink to='/news'>News</NavLink></div>
            <div className='left-menu-item'><NavLink  to='/music'>Music</NavLink></div>
            <div className='left-menu-item'><NavLink  to='/users'>Users</NavLink></div>
            <div className='left-menu-item'><NavLink  to='/settings'>Settings</NavLink></div>
        </nav>
    )
    }
    
    export default Navbar