import { connect } from "react-redux"
import { follow, unfollow, getUsers,followedUser } from "../../redux/users.reducer"
import React from 'react'
import Users from './Users'
import Preloader from "../preloaders/preloader"
import { compose } from "redux"
import { getCurrentPage, getFollowingInProgress, getisFetching, getPageSize, getTotalUsersCount, getUsersSelect } from "../../redux/users.selectors"

class UsersContainer extends React.Component{
    componentDidMount(){
        this.props.getUsers(this.props.currentPage,this.props.pageSize)
    }
    onPageChanged = (currentPage)=>{
        this.props.getUsers(currentPage,this.props.pageSize)
    }
    
    render(){
        return (<>
            {this.props.isFetching
                ?<Preloader />
                :null}
            <Users 
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users = {this.props.users}
            follow = {this.props.follow}
            unfollow = {this.props.unfollow}
            followingInProgress={this.props.followingInProgress}
            followedUser={this.props.followedUser}
            portionSize={this.props.portionSize}/></>)
         
    }
}

const mapStateToProps=(state)=>{
    return{
        users: getUsersSelect(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getisFetching(state),
        followingInProgress: getFollowingInProgress(state),
        portionSize: state.usersPage.portionSize
    }
}

export default compose(
    connect(mapStateToProps, {
        follow, unfollow,
        getUsers, followedUser
    })
)(UsersContainer)