import React from 'react'
import './content.css'
import cover from '../../MainPhotos/Cover.png'
import cover1 from '../../MainPhotos/Cover (1).png'
import cover2 from '../../MainPhotos/Cover (2).png'
import cover3 from '../../MainPhotos/Cover (3).png'
import cover4 from '../../MainPhotos/Cover (4).png'
import cover5 from '../../MainPhotos/Cover (5).png'
import cover6 from '../../MainPhotos/Cover (8).png'
import cover7 from '../../MainPhotos/Cover (7).png'
import cover8 from '../../MainPhotos/Cover (9).png'
import cover9 from '../../MainPhotos/Cover (14).png'
import cover10 from '../../MainPhotos/Cover (15).png'
import cover11 from '../../MainPhotos/Cover (10).png'
import cover12 from '../../MainPhotos/Cover (11).png'
import cover13 from '../../MainPhotos/Cover (12).png'
import cover14 from '../../MainPhotos/Cover (13).png'
import Afisha from '../Afisha/Afisha'
import userImg from '../../Photos/Oval.png'
import fruit from '../../Photos/Oval (6).png'




export default function Content() {
    const contents = [
        {
            id: 1,
            img: cover,
            title: "A Brief History Of Creation",
            auditoriya: "80k views",
            limit: "4:15",
            time: "3 days",
            userName: "Dollie Blair"
        },
        {
            id: 2,
            img: cover1,
            title: "Selecting The Right Hotel",
            auditoriya: "123k views",
            limit: "8:00",
            time: "1 months ago",
            userName: "Dollie Blair"
        },
        {
            id: 3,
            img: cover2,
            title: "Asteroids",
            auditoriya: "43k views",
            limit: "5:32",
            time: "12 days ago",
            userName: "Dollie Blair"
        },
        {
            id: 4,
            img: cover3,
            title: "Telescopes 101",
            auditoriya: "11k views",
            limit: "6:40",
            time: " 6 months ago",
            userName: "Dollie Blair"
        },
        {
            id: 5,
            img: cover4,
            title: "Medical Care Is Just",
            auditoriya: "18k views",
            limit: "1:45",
            time: "2 days ago",
            userName: "Dollie Blair"
        },
        {
            id: 6,
            img: cover5,
            title: "Moon Gazing",
            auditoriya: "67k views",
            limit: "1:45",
            time: "4 months ago",
            userName: "Dollie Blair"
        },
    ]

    const mainCategories = [
        {
            id: 1,
            img: cover6,
            title: "Dude You Re Getting A Telescope",
            auditoriya: "34k views ",
            limit: "3:40",
            time: "5 months ago",
            userName: "Gussie French"

        },
        {
            id: 2,
            img: cover7,
            title: "Moon Gazing",
            auditoriya: "54k views ",
            limit: "2:12",
            time: " 11 months ago",
            userName: "Edward Osborne"

        },
        {
            id: 3,
            img: cover8,
            title: "Moon Gazing",
            auditoriya: "125k views",
            limit: "1:45",
            time: "4 months ago",
            userName: "Dollie Blair"

        },
    ]

    const under = [
        {
            id: 1,
            img: cover9,
            title: "Astronomy Or Astrology",
            auditoriya: "240k views",
            limit: "7:36",
            time: "4 months ago",
            userName: "Food & Drink"
        },
        {
            id: 2,
            img: cover10,
            title: "Advertising Outdoors",
            auditoriya: "13k views",
            limit: "2:19",
            time: "5 days",
            userName: "Food & Drink"
        },
        {
            id: 3,
            img: cover11,
            title: "Radio Astronomy",
            auditoriya: "1k views",
            limit: "9:05",
            time: "11 months ago",
            userName: "Food & Drink"
        },
        {
            id: 4,
            img: cover12,
            title: "A Good Autoresponder",
            auditoriya: "45k views",
            limit: "3:40",
            time: "2 months ago",
            userName: "Food & Drink"
        },
        {
            id: 5,
            img: cover13,
            title: "Baby Monitor Technology",
            auditoriya: "86k views",
            limit: "1:56",
            time: "7 days ago",
            userName: "Food & Drink"
        },
        {
            id: 6,
            img: cover14,
            title: "Asteroids",
            auditoriya: "123k views",
            limit: "4:23",
            time: "5 days",
            userName: "Food & Drink"
        },
    ]
    return (
        <>
            <div className='big-box'>
                {/* hight */}
                <Afisha img={userImg} userName={"Dollie Blair"} title={""} />
                <div className='d-flex mt-4 box'>
                    {contents.map((content) => (
                        <div className='content-box me-3'>
                            <div className='video-box mb-2 position-relative'>
                                <img src={content.img} alt={content.title} />
                                <span className='position-absolute video-limit'>{content.limit}</span>
                            </div>
                            <div className='video-description'>
                                <h5 className='video-title'>{content.title}</h5>
                                <div className='d-flex justify-content-between data-box'>
                                    <p>{content.auditoriya}.{content.time}</p><p>{content.userName}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* middle */}
                <Afisha userName={"Recommended"} title={""} imgDisplay={"none"} />
                <div className='d-flex my-4 box'>
                    {mainCategories.map((mainData) => (
                        <div className='mainContent-box me-3'>
                            <div className='video-box mb-2 position-relative'>
                                <img src={mainData.img} alt={mainData.title} />
                                <span className='position-absolute video-limit'>{mainData.limit}</span>
                            </div>
                            <div className='video-description'>
                                <h5 className='video-title'>{mainData.title}</h5>
                                <div className='d-flex justify-content-between data-box'>
                                    <p>{mainData.auditoriya}.{mainData.time}</p><p>{mainData.userName}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* under */}
                <Afisha img={fruit} userName={"Food & Drink"} title={"Recommended channel for you"} />
                <div className='d-flex box'>
                    {under.map((underData) => (
                        <div className='content-box me-3'>
                            <div className='video-box mb-2 position-relative'>
                                <img src={underData.img} alt={underData.title} />
                                <span className='position-absolute video-limit'>{underData.limit}</span>
                            </div>
                            <div className='video-description'>
                                <h5 className='video-title'>{underData.title}</h5>
                                <div className='d-flex justify-content-between data-box'>
                                    <p>{underData.auditoriya}.{underData.time}</p><p>{underData.userName}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}
