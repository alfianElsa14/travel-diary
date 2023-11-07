import React, { useState, useEffect } from 'react'
import style from '../../style/style.module.scss'
import { useNavigate } from 'react-router-dom'
import icon from '../../assets/User.png'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getAllPost } from './actions'

function Home() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const listPost = useSelector((state) => state.homeReducer.posts)
    const [search, setSearch] = useState('')

    useEffect(() => {
        dispatch(getAllPost())
    }, [])

    const user = JSON.parse(localStorage.getItem('user'))

    const handleLogout = () => {
        localStorage.removeItem('user')
        navigate('/')
    }

    const filterPost = listPost.filter((post) =>
        post?.title.toLowerCase().includes(search.toLowerCase()))

    const handleChangeInput = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className={style.homeContainer}>
            {
                user ? (
                    <div className={style.headerAfter}>
                        <div className={style.navbarAfter}>
                            <p>the journey</p>
                            <div className={style.navRight}>
                                <div className={style.foto} onClick={() => navigate('/profile')}>
                                    <img src={icon} alt="" />
                                </div>
                                <p onClick={() => navigate('/bookmark')}>bookmark</p>
                                <p onClick={handleLogout}>log Out</p>
                            </div>

                        </div>
                    </div>
                ) : (
                    <div className={style.headerBefore}>
                        <div className={style.navbar}>
                            <p>the journey</p>
                            <div className={style.button}>
                                <button className={style.login} onClick={() => navigate("/login")}>login</button>
                                <button className={style.register} onClick={() => navigate("/register")}>register</button>
                            </div>

                        </div>
                        <div className={style.banner}>
                            <div className={style.headBanner}>
                                <p>The Journey</p>
                                <p>you ever dream of</p>
                            </div>
                            <p className={style.lowBaner}>
                                We made a tool so you can easily keep & share your travel memories.
                                But there is a lot more</p>
                        </div>
                    </div>
                )
            }

            <div className={style.homeContent}>
                <h1>Journey</h1>
                <div className={style.search}>
                    <input type="search" value={search} onChange={handleChangeInput} />
                    <button>search</button>
                </div>
                <div className={style.listCard}>
                    {
                        filterPost?.map((el) => (
                            <div className={style.card}
                                onClick={() => navigate(`/detail/${el.id}`)}>
                                <img src={el.imageUrl} />
                                <div className={style.isi} >
                                    <p className={style.title}>{el.title}</p>
                                    <p className={style.date}>{el.date}, {el.authorId}</p>
                                    <p className={style.description}>{el.description}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Home