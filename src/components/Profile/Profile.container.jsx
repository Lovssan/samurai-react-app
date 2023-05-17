import React from 'react'
import Profile from './Profile'
import { connect } from "react-redux"
import { userProfile, getUserStatus, updateUserStatus} from '../../redux/profile.reducer'
import { useLocation, useNavigate, useParams} from 'react-router-dom'
import { withAuthRedirect } from '../../HOC/withAuthRedirect'
import { compose } from 'redux'

class ProfileContainer extends React.Component{
    componentDidMount(){
        let userId = this.props.router.params.userId
        if(!userId) userId=this.props.authUserId
        this.props.userProfile(userId)
        this.props.getUserStatus(userId)
    }
    render(){
        return(
            <Profile {...this.props} profile={this.props.profile}
            updateUserStatus={this.props.updateUserStatus}/>
        )
    }
   
}
const mapStateToProps = (state)=>({
    profile: state.profilePage.profile,
    authUserId: state.auth.userId,
    status: state.profilePage.status
})
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}
export default compose(
    connect(mapStateToProps,{userProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect)(ProfileContainer) 