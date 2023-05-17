import { authUserLogin } from "./auth.reducer";

const SET_INITIAL ='SET_INITIAL'

let initialState = {
  initialized:false
}
export const appReducer = (state=initialState,action)=>{
    switch (action.type){
        case SET_INITIAL:
          return {
            ...state,
            initialized: true
          }
        default:{
          return  state;
        }
      }
}

export const initializedSuccess = ()=>(
    {
       type: SET_INITIAL,
    }
 )

export const initializedApp = ()=>(
  (dispatch)=>{
    dispatch(authUserLogin())
    .then(()=>dispatch(initializedSuccess())
    )
  }
)
