import React from 'react'


export const Test = (props)=>{
    const {user, onClick, onChangeUer, password, changePassword} = props
    return (
        <>
            <input placeholder="user" value={user} onChange={onChangeUer}/>
            <br></br>
            <input placeholder="password" value={password} onChange={changePassword}/>
            <button onClick={() => onClick(user, password)}>
                送信
            </button>
        </>
    )
}