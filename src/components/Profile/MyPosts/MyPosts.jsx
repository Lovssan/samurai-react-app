import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../../utils/validator'
import { FormControlTag } from '../../FormsControls/FormsControls'
import './MyPosts.css'
import Post from './Post/Post'

const maxLength20 = maxLengthCreator(20)
const MyPosts =React.memo(props=>{
    console.log('render')
    let postsElements = props.postsData
    .map(post=><Post message={post.message} key = {post.id} likes = {post.likesCount} />)
    const addNewPost=(newPostText)=>{
        props.addPost(newPostText.newPostText)
    }
    return(
        <div className='posts-block'>
            <h3>MyPosts</h3> 
            <div>
                <NewPostReduxForm onSubmit={addNewPost}/>  
            </div>
            <div className='posts'>
                {postsElements}
            </div>
        </div>
    )
})
const newPostTextForm = (props)=>{
    return (
        <form onSubmit={props.handleSubmit}>
            <Field 
                validate={[required, maxLength20]} component={FormControlTag} 
                elementtype={'textarea'} name={'newPostText'} 
                placeholder={'Enter new post text...'}/>
            <button>Add post</button>
        </form >
    )
}
const NewPostReduxForm = reduxForm({form: 'newPostTextForm'})(newPostTextForm)

export default MyPosts