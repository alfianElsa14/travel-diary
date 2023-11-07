import React from 'react'
import style from '../../style/style.module.scss'
import { useDispatch } from 'react-redux'
import { registerMethod } from '../../domain/api'
import { useNavigate } from 'react-router-dom'

function Register() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleRegister = (userData) => {
        dispatch(registerMethod(userData));

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const fullname = e.target.fullname.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const userData = {
            fullname,
            email,
            password,
        };
        console.log(userData, "<<<<<<<<<<<<");
        handleRegister(userData);
        navigate('/login')
    }

    return (
        <div className={style.registerContainer}>
            <div className={style.cardRegister}>
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className={style.inputEmail}>
                        <label htmlFor="">Fullname</label>
                        <input type="text" id="fullname" name="fullname" />
                    </div>
                    <div className={style.inputEmail}>
                        <label htmlFor="">Email</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className={style.inputEmail}>
                        <label htmlFor="">Password</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <button type='submit'>Register
                    </button>
                    <p>If you already have account, click<a onClick={() => navigate("/login")} href=""> Here</a> or <a onClick={() => navigate("/")} href="">Back</a></p>
                </form>

            </div>
        </div>
    )
}

export default Register