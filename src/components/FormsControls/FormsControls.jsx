import './FormControls.css'

export const FormControlTag = ({input, meta, ...props})=>{
    const hasError = meta.touched&&meta.error
    return (
        <div className={`form-control ${hasError?'error':''}`}>
            <div>
                <props.elementtype {...input} {...props}/>
            </div>
            {hasError&&<span>{meta.error}</span>}
        </div>
    )
}
