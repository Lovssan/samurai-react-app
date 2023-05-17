import './Post.css'

function Post(props){
    return(
        <div className='post-item'>
            <img src='https://upload.wikimedia.org/wikipedia/ru/f/f9/Philadelphia_Eagles_primary_logo.png' 
            alt='avatarka' />
            {props.message}
            <div>
                <span>Like {props.likes} </span>
                
            </div>
            
        </div>
    )
    }
    
    export default Post