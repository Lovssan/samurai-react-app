import {createSelector} from 'reselect'

export const getUsersSelect = (state)=>{
    return state.usersPage.users
}
export const getUserSelector = (state)=>{
    return getUsersSelect(state).filter(u=>true)
}
export const getUsersSuper = createSelector(getUsersSelect,(users)=>{
    return users.filter(u=>true)
})

export const getPageSize = (state)=>{
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state)=>{
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state)=>{
    return state.usersPage.currentPage
}
export const getisFetching = (state)=>{
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state)=>{
    return state.usersPage.followingInProgress
}