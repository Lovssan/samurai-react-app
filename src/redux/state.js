import { dialogsReducer } from "./dialogs.reducer"
import { profileReducer } from "./profile.reducer"
import { sideBarReducer } from "./sidebar.reducer"

const store = {
  _state : {
    profilePage: {
      postsData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 24},
        {id: 2, message: "It's, how are you?", likesCount: 32},
        {id: 3, message: 'Hi, how are you?', likesCount: 54},
      ],
     
      newPostText: 'Lovsn',
      
    },
    messagesPages:{
      dialogsData: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Alteir'},
        {id: 3, name: 'Saglash'},
        {id: 4, name: 'Sayan'},
        {id: 5, name: 'Nazyn'},
      ],
      messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Кээ Кэээ'},
        {id: 3, message: 'Чудр'},
      ],
      newMessageText: '',
    },
    sideBar:{}
  },
  _callSubscriber(){
    console.log('Alteir')
  },

  get state(){
    return this._state
  },
  subscribe(observer){
    this._callSubscriber = observer
  },

  dispatch(action){
    this._state.profilePage=profileReducer(this._state.profilePage,action)
    this._state.messagesPages=dialogsReducer(this._state.messagesPages,action)
    this._state.sideBar=sideBarReducer(this._state.sideBar,action)
    this._callSubscriber(this._state)
  }
}




window.store = store
// export default store