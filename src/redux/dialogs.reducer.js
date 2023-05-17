const ADD_MESSAGE ='ADD-MESSAGE'
let initialState = {
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
  ]
}
export const dialogsReducer = (state=initialState,action)=>{
    switch (action.type){
        case ADD_MESSAGE:
            let newMessage = {
              id: state.messagesData[state.messagesData.length-1].id+1,
              message: action.newMessageText,
            }
            return {
              ...state, 
              messagesData: [...state.messagesData, newMessage]}
        default:{
            return  state;
        }
      }
}

export const addMessageActionCreator = (newMessageText)=>(
    {
        type: ADD_MESSAGE,
        newMessageText
    }
  )
  