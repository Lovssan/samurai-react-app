import { addMessageActionCreator } from '../../redux/dialogs.reducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux' 
import { withAuthRedirect } from '../../HOC/withAuthRedirect'
import { compose } from 'redux'

const mapStateToProps = (state)=>{
    return {
        messagesPage: state.messagesPage,
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        sendMessage : (newMessageText)=>{
            dispatch(addMessageActionCreator(newMessageText))
        }
    }
}


export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect)(Dialogs) 