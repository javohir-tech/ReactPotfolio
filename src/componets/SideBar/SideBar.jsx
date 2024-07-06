import React from 'react';
import './SideBar.css'
import homeImg from '../../Photos/ui-71home.png';
import trending from '../../Photos/Path-957-CopyTrending.png'
import Subscriptions from '../../Photos/ui-45Subscriptions.png'
import Library from '../../Photos/documents-11Library.png'
import History from '../../Photos/Combined-Shape (1).png'
import Watch from '../../Photos/Shape (1).png'
import Star from '../../Photos/Star-7.png'
import Liked from '../../Photos/Combined-Shape (2).png'
import Music from '../../Photos/ui-80.png'
import Games from '../../Photos/tech-02.png'
import Accardion from '../../Photos/chevron-down.png'
import User1 from '../../Photos/Oval.png'
import User2 from '../../Photos/Oval (1).png'
import User3 from '../../Photos/Oval (2).png'
import User4 from '../../Photos/Oval (3).png'
import User5 from '../../Photos/Oval (4).png'
import User6 from '../../Photos/Oval (5).png'
import NavbarList from '../../assets/Combined Shape.png'
import BrandImg from '../../assets/Shapebrand.png';


export default function SideBar() {
    const SideBar = [
        {
            id: 1,
            img: homeImg,
            text: "Home"
        },
        {
            id: 2,
            img: trending,
            text: "Trending"
        },
        {
            id: 3,
            img: Subscriptions,
            text: "Subscriptions"
        }
    ]
    const kategories = [
        {
            id: 1,
            img: Library,
            text: "Library"
        },
        {
            id: 2,
            img: History,
            text: "History"
        },
        {
            id: 3,
            img: Watch,
            text: "Watch later"
        },
        {
            id: 4,
            img: Star,
            text: "Favourites"
        },
        {
            id: 5,
            img: Liked,
            text: "Liked videos"
        },
        {
            id: 6,
            img: Music,
            text: "Music"
        },
        {
            id: 7,
            img: Games,
            text: "Games"
        },
        {
            id: 8,
            img: Accardion,
            text: "Show more"
        },
    ]
    const Users = [
        {
            id: 1,
            img: User1,
            text: "Gussie Singleton"
        },
        {
            id: 2,
            img: User2,
            text: "Nora Francis"
        },
        {
            id: 3,
            img: User3,
            text: "Belle Briggs"
        },
        {
            id: 4,
            img: User4,
            text: "Eunice Cortez"
        },
        {
            id: 5,
            img: User5,
            text: "Emma Hanson"
        },
        {
            id: 6,
            img: User6,
            text: "Leah Berry"
        },
    ]
    return (
        <>
            <div className='modal-block' id='modalOff'>
                {/* Main categories */}
                {
                    SideBar.map((data) => (
                        <div key={data.id} className='d-flex align-items-center mb-3'>
                            <img src={data.img} alt={data.text} /><p className='ms-3 mb-0 side-bar-text'>{data.text}</p>
                        </div>
                    ))
                }
                {/* categories */}
                <div className='d-flex flex-column mt-5'>
                    {
                        kategories.map((kategori) => (
                            <div className='d-flex align-items-center mb-3'>
                                <img src={kategori.img} alt={kategori.text} /><p className='mb-0 ms-3 side-bar-text'>{kategori.text}</p>
                            </div>
                        ))
                    }
                </div>
                {/* Users */}
                <div className='mt-4 d-flex flex-column '>
                    <h3 className='side-bar-banner mb-3'>Subscriptions</h3>
                    {
                        Users.map((user) => (
                            <div key={user.id} className='d-flex align-items-center mb-3'>
                                <img src={user.img} alt={user.text} /><p className='ms-3 mb-0 side-bar-text'>{user.text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
