import React, { useEffect } from 'react'
import style from '../../style/style.module.scss'
import icon from '../../assets/User.png'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getPostById } from './actions'


function Detail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const postById = useSelector((state) => state.detailReducer.post);

    useEffect(() => {
        dispatch(getPostById(id));
    }, [id]);

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
            <div className={style.detailContent}>
                <div className={style.detailHeader}>
                    <div className={style.detailTitle}>
                        <h1>{postById?.title}</h1>
                        <p>{postById?.date}</p>
                    </div>
                    <p>fadhil</p>
                </div>
                <div className={style.detailImage}>
                    <img src={postById?.imageUrl} alt="" />
                </div>
                <div className={style.detailDesc}>
                    <p>
                        {postById?.description}
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Detail