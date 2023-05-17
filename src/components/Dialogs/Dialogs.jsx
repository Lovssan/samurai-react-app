import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../utils/validator'
import { FormControlTag } from '../FormsControls/FormsControls'
import DialogItem from './DialogItem/DialogItem'
import './Dialogs.css'
import Message from './Message/Message'

const Dialogs = (props)=>{   
    let dialogsElements = props.messagesPage.dialogsData
        .map(user=><DialogItem userName = {user.name} key = {user.id} id={user.id} />)
    let messages = props.messagesPage.messagesData
        .map(el=><Message message={el.message} key = {el.id}/>)

    const addNewMessage=(values)=>{
        props.sendMessage(values.newMessageText)
    }

    return(
        <div className='dialogs'>
           <div className = 'dialogs-items'>
              {dialogsElements}
           </div>
           <div className='send-message'>
              <div className='messages'>
              {messages}
              </div>
              <DialogsReduxForm onSubmit={addNewMessage}/>
           </div>     
        </div>
    )
}
const maxlength100 = maxLengthCreator(100)
const dialogsForm = (props)=>{
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={FormControlTag}  validate={[required,maxlength100]} name={'newMessageText'}
           placeholder = 'Send message...' elementtype={'textarea'}/>
            <button>Send</button>
        </form>
    )
}

const DialogsReduxForm = reduxForm({form:'dialogAddMessageForm'})(dialogsForm)

export default Dialogs