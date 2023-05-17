import './Message.css'

const Message = (props)=>{
    return(
        <div className='messsage'>
            {props.message}
        </div>
    )
}


export default Message