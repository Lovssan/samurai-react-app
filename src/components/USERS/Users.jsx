import './Users.css'
import ava from '../../assets/photos/no-avatar.webp'
import { NavLink } from 'react-router-dom';
import Paginator from './Pagination';



const Users = (props)=>{
    return (
        <div className = ''>
            <Paginator onPageChanged={props.onPageChanged} 
                        currentPage={props.currentPage} 
                        totalItemsCount={props.totalUsersCount} 
                        pageSize={props.pageSize}
                        portionSize={props.portionSize}/>
            {
                props.users.map(u=><div key ={u.id}>
                <span>
                    <div className='user-image'>
                        <NavLink to={'/profile/'+u.id}>
                            <img src={u.photos.small?u.photos.small:ava} alt="avatarka"/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                        ?<button disabled={props.followingInProgress.some((id)=>id===u.id)} onClick={()=>{
                            props.followedUser(u.id, true)
                            }}>Unfollow</button>
                        :<button disabled={props.followingInProgress.some((id)=>id===u.id)} onClick={()=>{
                            props.followedUser(u.id, false)  
                            }}>Follow</button>}
                    </div>
                </span>
                <span className='user-main-info'>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    {u.location
                    ?(<span className='user-info-area'>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>)
                    :null }
                </span>
                </div>)
            }
    </div>)
}

export default Users


