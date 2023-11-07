import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from '../../style/style.module.scss'
import icon from '../../assets/User.png'

function Bookmark() {
    const navigate = useNavigate()
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
            <div className={style.bookmarkContent}>
                <h1>Bookmark</h1>
                <div className={style.listCardBookmark} onClick={() => navigate('/detail')}>
                    <div className={style.cardBookmark}>
                        <img src="https://cdn1-production-images-kly.akamaized.net/QH-trJKyaMfmzi-zoVkg6GxV25A=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2952777/original/064510900_1572339600-indonesia-4559057_1920.jpg" />
                        <div className={style.isiBookmark}>
                            <p className={style.titleBookmark}>bersemayam di tanah dewata</p>
                            <p className={style.dateBookmark}>20 mei 2021, kiyomasa</p>
                            <p className={style.descriptionBookmark}>Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata Bali.  Sampai lah saya malam itu di Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan.."</p>
                        </div>
                    </div>
                    <div className={style.cardBookmark}>
                        <img src="https://cdn1-production-images-kly.akamaized.net/QH-trJKyaMfmzi-zoVkg6GxV25A=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2952777/original/064510900_1572339600-indonesia-4559057_1920.jpg" />
                        <div className={style.isiBookmark}>
                            <p className={style.titleBookmark}>bersemayam di tanah dewata</p>
                            <p className={style.dateBookmark}>20 mei 2021, kiyomasa</p>
                            <p className={style.descriptionBookmark}>Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata Bali.  Sampai lah saya malam itu di Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan.."</p>
                        </div>
                    </div>
                    <div className={style.cardBookmark}>
                        <img src="https://cdn1-production-images-kly.akamaized.net/QH-trJKyaMfmzi-zoVkg6GxV25A=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2952777/original/064510900_1572339600-indonesia-4559057_1920.jpg" />
                        <div className={style.isiBookmark}>
                            <p className={style.titleBookmark}>bersemayam di tanah dewata</p>
                            <p className={style.dateBookmark}>20 mei 2021, kiyomasa</p>
                            <p className={style.descriptionBookmark}>Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata Bali.  Sampai lah saya malam itu di Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan.."</p>
                        </div>
                    </div>
                    <div className={style.cardBookmark}>
                        <img src="https://cdn1-production-images-kly.akamaized.net/QH-trJKyaMfmzi-zoVkg6GxV25A=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2952777/original/064510900_1572339600-indonesia-4559057_1920.jpg" />
                        <div className={style.isiBookmark}>
                            <p className={style.titleBookmark}>bersemayam di tanah dewata</p>
                            <p className={style.dateBookmark}>20 mei 2021, kiyomasa</p>
                            <p className={style.descriptionBookmark}>Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata Bali.  Sampai lah saya malam itu di Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan.."</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bookmark