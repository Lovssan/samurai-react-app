import React, { useEffect, useState } from 'react'
import './ProfileInfo.css'

const  ProfileStatusWithHook = (props)=>{ 
    let [editMode,setEditMode] = useState(false)
    let [status,setStatus] = useState(props.status)
    useEffect(()=>{
        setStatus(props.status)
    },[props.status])
    const activateMode =()=>{
        setEditMode(true)
    }
    const deactivateMode =()=>{
        setEditMode(false)
        props.updateUserStatus(status)
    }
    const onStatusChange=(e)=>{
        setStatus(e.currentTarget.value)
    }
    return( 
        <div>
            {
                editMode&&<div>
                    <input autoFocus={true} onBlur={deactivateMode} value={status} 
                    onChange={onStatusChange}/>
                    <button onClick={deactivateMode}>Save</button>
                </div>}
                {!editMode&&<div>
                    <span onDoubleClick={activateMode}>
                        {props.status||'---'}
                    </span>
                </div>}
        </div>
    )
}
    
export default ProfileStatusWithHook