import Preloader from '../../preloaders/preloader'
import './ProfileInfo.css'
// import ProfileStatus from './ProfileStatus.jsx'
import ProfileStatusWithHook from './ProfileStatusWithHooks'

function ProfileInfo(props){
    console.log('renderInfoProfile')
    if(!props.profile){
        return <Preloader />
    }
    return(
        <div>
            {/* <div className='profile-bck'><img
                src='https://img.lovepik.com/background/20211021/large/lovepik-science-and-technology-business-internet-background-image_400134645.jpg' 
                alt='background.png'/>
            </div> */}
            <div className='description-block'>
                <img src={props.profile.photos.large} alt='img'/>
                <ProfileStatusWithHook status={props.status} updateUserStatus={props.updateUserStatus}/>
                <section>
                    {props.profile.aboutMe}
                    <ul>
                        <li>{props.profile.lookingForAJob?'I work':'I never work'}</li>
                        <li>{props.profile.lookingForAJobDescription}</li>
                        <li>{props.profile.fullName}</li>
                        </ul>    
                </section>
            </div>
        </div>
    )
    }
    
    export default ProfileInfo