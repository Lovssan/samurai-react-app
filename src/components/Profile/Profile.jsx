import './Profile.css'
import ProfileInfo from './PRofileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPosts.container'

const Profile=(props=>{
    console.log('renderProfile')
    return(
        <div>
            <ProfileInfo profile={props.profile} status={props.status}
            updateUserStatus={props.updateUserStatus}/>
            <MyPostsContainer />       
        </div>
    )
})
    
    export default Profile