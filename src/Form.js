
import React, {useState} from "react";

const Form = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const login = (e) => {
        e.preventDefault() //страница не обнавнлялась при click
        if (username === 'admin' && password === 'admin') {
            setMessage('Welcome!')
        } else {
            setMessage('Данные неверны!')
        }
        setUsername('')
        setPassword('')
    }
    const changeUsername = (e) => {
        setUsername(e.target.value)
    }
    const changePassword = (e) => {
        setPassword(e.target.value)
    }
    return (
        <form>
            <label htmlFor="username">Username</label>
            <input type="text" value={username} id='username' onChange={changeUsername}/>
            <label htmlFor="password">Password</label>
            <input type="password" value={password} id='password' onChange={changePassword}/>
            <button onChange={login}>Login</button>
            <div>{message}</div>
        </form>

    )
}
export default Form