import { connect } from "react-redux"
import { Field, reduxForm } from "redux-form"
import { required } from "../../utils/validator"
import { FormControlTag } from "../FormsControls/FormsControls"
import {login} from '../../redux/auth.reducer'
import { Navigate } from "react-router-dom"
import './../FormsControls/FormControls.css'

const LoginForm=({handleSubmit,error})=>{
    return (
           <form onSubmit={handleSubmit}> 
                <div>
                    <Field name="email" placeholder="Email" component={FormControlTag} 
                    validate={[required]} elementtype={'input'}/>
                </div>
                <div>
                    <Field name="password" placeholder="Password" component={FormControlTag}
                    validate={[required]} elementtype={'input'} type={'password'}/>
                </div>
                <div>
                    <Field name="rememberMe" type={'checkbox'} component={'input'}/>Remember me
                </div>
                {error&&<div className="form-summary-error">
                   {error}
                </div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
        
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
const Login = (props)=>{
    const onSubmit = (formData)=>{
        let {email, password, rememberMe}=formData
        console.log(email, password, rememberMe)
        props.login(email, password, rememberMe)
    }

    if(props.isAuth){
        return <Navigate to={'/profile'}/>
    }
    
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}
const mapStateToProps = (state)=>({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps,{login})(Login)