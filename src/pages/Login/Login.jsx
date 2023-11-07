import React, { useEffect, useState } from 'react'
import style from '../../style/style.module.scss'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { loginRequest } from './actions'


function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const loginStatus = useSelector((state) => state.loginReducer.user)

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(loginRequest(formData))
    }

    useEffect(() => {
        if (loginStatus) {
            navigate("/")
        }
    }, [loginStatus, navigate])

    return (
        <div className={style.loginContainer}>
            <div className={style.cardLogin}>
                <h2>Login</h2>
                <div className={style.inputEmail}>
                    <label htmlFor="">Email</label>
                    <input type="text" onChange={handleChange} name='email' id='email' value={formData.email} />
                </div>
                <div className={style.inputEmail}>
                    <label htmlFor="">Password</label>
                    <input type="password" onChange={handleChange} name='password' id='password' value={formData.password} />
                </div>
                <button onClick={handleLogin}>Login</button>
                <p>Dont have account? Click <a onClick={() => navigate("/register")} href="">Here</a></p>
            </div>
        </div>
    )
}

export default Login