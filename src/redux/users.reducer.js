import { usersAPI } from "../api/api"
import { updateObjectArray } from "../utils/object.helpers"

const FOLLOW ='FOLLOW'
const UNFOLLOW  ='UNFOLLOW'
const SET_USERS  ='SET-USERS'
const SET_CURRENT_PAGE  ='SET-CURRENT-PAGE'
const SET_TOTAL_COUNT  ='SET_TOTAL_COUNT'
const TOOGLE_ISFETCHING  ='TOOGLE_ISFETCHING'
const TOOGLE_IS_FOLLOWING_PROGRESS  ='TOOGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
  users: [
    // {id: 1, name: 'Alteir Kuular', old: 2, followed: true, photos: {small: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg', large: null} ,
    //  status: 'I love my mum and daddy=)' , location : {country: 'Russia',city: 'Tomsk'}},
    // {id: 2, name: 'Ailan Mongush', old: 48, followed: true, photos: {small: null, large: null},
    // status: 'i am happy grandmother!' , location : {country: 'Russia', city: 'Kyzyl'}},
    // {id: 3, name: 'Lovsan Kuular', old: 24, followed: true, photos: {small: null, large: null},
    // status: 'I am center of world -_-' , location : {country: 'Russia', city: 'Tomsk'}},
    // {id: 4, name: 'Saglash Mongush', old: 23, followed: true, photos: {small: null, large: null},
    // status: 'I am happy mum!!))' , location : {country: 'Russia',city: 'Tomsk'}},
    // {id: 5, name: 'Sayan Homushku', old: 24, followed: true, photos: {small: null, large: null},
    // status: 'I am ludoman(((' , location : {country: 'Russia',city: 'Tomsk'}},
    // {id: 6, name: 'Sayan Saryglar', old: 28, followed: true, photos: {small: null, large: null},
    // status: 'Love funny jokes =D' , location : {country: 'Russia',city: 'Tomsk'}},
    // {id: 7, name: 'Nazyn Hoyr-ool', old: 26, followed: true, photos: {small: null, large: null},
    // status: 'I will winner International of Dota 2!!!' , location : {country: 'Russia',city: 'Tomsk'}},
    // {id: 8, name: 'Jacky Chan', old: 56, followed: false, photos: {small: null, large: null},
    // status: 'Kung-fu Forever!!!' , location : {country: 'China',city: 'Pekin'}},
  ],
  pageSize: 50,
  totalUsersCount:0,
  currentPage:1,
  isFetching: true,
  followingInProgress: [],
  portionSize: undefined
}
export const usersReducer = (state=initialState,action)=>{
    switch (action.type){
        case FOLLOW:    
            return {
                ...state,
                users: updateObjectArray(state.users,action.userID,'id',{followed: true})
              }
        case UNFOLLOW: 
            return {
                ...state,
                users: updateObjectArray(state.users,action.userID,'id',{followed: false})
              }
        case SET_USERS:
            return {
                ...state,
                users: [/*...state.users,*/ ...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
        }
        case TOOGLE_ISFETCHING:
            return {
                ...state,
                isFetching: action.isFetching
        }
        case TOOGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                ?[...state.followingInProgress, action.userId]
                :[...state.followingInProgress.filter(id=>id!==action.userId)]  
        }
        default:{
            return  state;
        }
      }
}
export const follow = (userID)=>(
    {
        type: FOLLOW,
        userID
    }
  )
  
export const unfollow = (userID)=>(
     {
        type: UNFOLLOW,
        userID
     }
  )

export const setUsers = (users)=>(
    {
       type: SET_USERS,
       users
    }
 )

export const setCurrentPage = (currentPage)=>(
    {
       type: SET_CURRENT_PAGE,
       currentPage
    }
)
export const setTotalUsersCount = (totalCount)=>(
    {
       type: SET_TOTAL_COUNT,
       totalCount
    }
)
export const toogleIsFetching = (isFetching)=>(
    {
       type: TOOGLE_ISFETCHING,
       isFetching
    }
)
export const toogleFollowingProgress = (isFetching, userId)=>(
    {
       type: TOOGLE_IS_FOLLOWING_PROGRESS,
       isFetching, userId
    }
)

export const getUsers =(page, pageSize)=>{
    return async (dispatch)=>{
        dispatch(toogleIsFetching(true))
        dispatch(setCurrentPage(page))
        let response = await usersAPI.getUsers(page,pageSize)
        dispatch(toogleIsFetching(false))
        dispatch(setUsers(response.items))
        dispatch(setTotalUsersCount(response.totalCount))
}}

export const followedUser =(userId, isFollowed)=>{
    return async (dispatch)=>{
        dispatch(toogleFollowingProgress(true, userId))
        if(isFollowed){
            let response = await usersAPI.unfollowUser(userId)
                if(response.resultCode===0) dispatch(unfollow(userId))
                dispatch(toogleFollowingProgress(false, userId))
        }
        else {
            let response = await usersAPI.followUser(userId)
                if(response.resultCode===0) dispatch(follow(userId))
                dispatch(toogleFollowingProgress(false, userId))
        }
}}
