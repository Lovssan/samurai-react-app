import { stopSubmit } from "redux-form";
import { authAPI} from "../api/api";

const SET_USER_DATA ='SET_USER_DATA'

let initialState = {
  userId:null,
  email: null,
  login: null,
  isAuth: false
}
export const authReducer = (state=initialState,action)=>{
    switch (action.type){
        case SET_USER_DATA:
          return {
            ...state,
            ...action.payload,
          }
        default:{
          return  state;
        }
      }
}

export const setAuthUserData = (userId, login, email, isAuth)=>(
    {
       type: SET_USER_DATA,
       payload:{
        userId, login, email, isAuth
       }
    }
 )

export const authUserLogin = ()=>(
  async (dispatch)=>{
    let response = await authAPI.isAuthUserData()
    if(response.resultCode===0){
        let {id, login, email} =response.data
        dispatch(setAuthUserData(id, login, email, true))
    }
  }
)
export const login = (email, password, rememberMe)=>(
  async (dispatch)=>{
    let response = await authAPI.loginUserData(email, password, rememberMe)
    if(response.data.resultCode===0){
      dispatch(authUserLogin())
    }else {
      let message = response.data.messages.length?response.data.messages[0]:'Some error'
      dispatch(stopSubmit('login',{_error:message}))
    }
  }
)
export const logout = ()=>(
  async (dispatch)=>{
    let response = await authAPI.logoutUserData()
    if(response.data.resultCode===0){
      dispatch(setAuthUserData(null, null, null, false))
    }
  }
)