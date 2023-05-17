import { profileAPI } from "../api/api"

const ADD_POST ='ADD-POST'
const SET_USER_PROFILE  ='SET_USER_PROFILE'
const SET_STATUS  ='SET_STATUS'
let initialState = {
  postsData: [
    {id: 1, message: 'Hi, how are you?', likesCount: 24},
    {id: 2, message: "It's, how are you?", likesCount: 32},
    {id: 3, message: 'Hi, how are you?', likesCount: 54},
  ],
  profile:null,
  status:''
}
export const profileReducer = (state=initialState,action)=>{
    switch (action.type){
        case ADD_POST:
          let newPost = {
            id: state.postsData[state.postsData.length-1].id+1,
            message: action.newPostText,
            likesCount: 0,
          }
          return {
            ...state,
            postsData: [...state.postsData, newPost],
          }
        case SET_USER_PROFILE:
          return {
            ...state,
            profile: action.profile
        }
        case SET_STATUS:
          return {
            ...state,
            status: action.status
        }
        default:{
          return  state;
        }
      }
}
export const addPostActionCreator = (newPostText)=>(
    {
        type: ADD_POST,
        newPostText
    }
)
export const setUserProfile = (profile)=>(
    {
       type: SET_USER_PROFILE,
       profile
    }
)
export const setStatus = (status)=>(
  {
     type: SET_STATUS,
     status
  }
)
export const userProfile = (userId)=>{
  return async (dispatch)=>{
    let response = await profileAPI.getUserProfile(userId)
    dispatch(setUserProfile(response))}
}
export const getUserStatus = (userId)=>{
  return async (dispatch)=>{
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))}
}
export const updateUserStatus = (status)=>{
  return async (dispatch)=>{
    let response = await profileAPI.updateStatus(status)
    if(!response.data.resultCode) dispatch(setStatus(status))}
}

