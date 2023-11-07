import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from '../../style/style.module.scss'
import icon from '../../assets/User.png'
import { useDispatch, useSelector } from 'react-redux'
import { createPost } from './actions'

function Add() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userData = JSON.parse(localStorage.getItem('user')) || {}

    const [newPost, setNewPost] = useState({
        title: '',
        imageUrl: '',
        authorId: userData.id,
        date: '20 Mei 2023',
        description: '',
        shortDescription: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewPost({ ...newPost, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createPost(newPost))
        navigate('/')
    }

    const handleLogout = () => {
        localStorage.removeItem('user')
        navigate('/login')
    }

    return (
        <div className={style.homeContainer}>
            <div className={style.headerAfter}>
                <div className={style.navbarAfter}>
                    <p onClick={() => navigate('/')}>the journey</p>
                    <div className={style.navRight}>
                        <div className={style.foto} onClick={() => navigate('/profile')}>
                            <img src={icon} alt="" />
                        </div>
                        <p onClick={() => navigate('/bookmark')}>bookmark</p>
                        <p onClick={handleLogout}>log Out</p>
                    </div>
                </div>
            </div>
            <div className={style.addContent}>
                <h1>New Journey</h1>
                <form action="" className={style.addForm} onSubmit={handleSubmit}>
                    <label htmlFor="">Title</label>
                    <input type="text"
                        name='title'
                        onChange={handleChange}
                        value={newPost.title}
                    />
                    <label htmlFor="">Image</label>
                    <input type="text"
                        name='imageUrl'
                        onChange={handleChange}
                        value={newPost.imageUrl}
                    />
                    <label htmlFor="">Short Description</label>
                    <input type="text"
                        name='shortDescription'
                        onChange={handleChange}
                        className={style.formShort}
                        value={newPost.shortDescription}
                    />
                    <label htmlFor="">Description</label>
                    <input type="text"
                        name='description'
                        onChange={handleChange}
                        className={style.formDesc}
                        value={newPost.description}
                    />
                    <button type='submit'>Add</button>
                </form>
            </div>

        </div>
    )
}

export default Add