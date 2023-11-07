import React, { useEffect } from 'react'
import style from '../../style/style.module.scss'
import icon from '../../assets/User.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getPostByAuthor } from './actions'

function Profile() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userData = JSON.parse(localStorage.getItem('user')) || {};
    const postAuthor = useSelector((state) => state.profileReducer.post);

    console.log(postAuthor, "<<<<<<<<<<<<<<<<<");

    useEffect(() => {
        dispatch(getPostByAuthor(userData.id))
    }, [userData.id])


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
            <div className={style.profileContent}>
                <h1>Profile</h1>
                <div className={style.profilePic}>
                    <div className={style.fotoProfile}>
                        <img src={userData.image} alt="" />
                        <h3>{userData.fullname}</h3>
                        <p>{userData.email}</p>
                        <button onClick={() => navigate('/add')}>add new post</button>
                    </div>
                    <div className={style.listCardProfile} >
                        {
                            postAuthor?.map((el) => (
                                <div className={style.cardProfile}
                                    onClick={() => navigate(`/detail/${el.id}`)}>
                                    <img src={el.imageUrl} />
                                    <div className={style.isiProfile}>
                                        <p className={style.titleProfile}>{el.title}</p>
                                        <p className={style.dateProfile}>{el.date}, {userData.fullname}</p>
                                        <p className={style.descriptionProfile}>{el.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Profile