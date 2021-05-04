import React from 'react'
import {useHistory} from 'react-router-dom'

export default function Authoption(){

    const history = useHistory();

    const register = ()=> history.push("/api/register");
    const login = ()=> history.push("/api/register/login")

    return(
        <div>
            <button className="btn btn-warning btn-rounded btn-sm waves-effect waves-light auth-modal-toggle" 
            onClick ={register}>Register</button>
            <button className="btn btn-warning btn-rounded btn-sm waves-effect waves-light auth-modal-toggle" onClick ={login}>Login</button>
        </div>
    )
}