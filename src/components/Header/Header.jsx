import { NavLink } from 'react-router-dom'
import './Header.css'

function Header(props){
return(
    <header className='header'>
        <img src='https://upload.wikimedia.org/wikipedia/ru/f/f9/Philadelphia_Eagles_primary_logo.png' alt="logo.png"/>
        <div className='login-block'>
            {props.isAuth
            ?<div><div>{props.login}</div><button onClick={props.logout}>Log Out</button></div>
            :<NavLink to={'/login'}>Login</NavLink>}
            
        </div>
    </header>
)
}

export default Header