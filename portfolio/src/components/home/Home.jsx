import React from 'react'
import './home.css'
import Social from './Social'
import Data from './Data'
import Scrolldown from './Scrolldown'
import AboutImg from '../../assets/about.jpg'

const Home = () => {
    return (
        <section className='home section' id='home'>
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social />
                    <Data></Data>
                    <img src={AboutImg} alt="" className="about__img" sizes="(max-width: 768px) 100vw, 300px" />
                </div>
                <Scrolldown />
            </div>
        </section>
    )
}

export default Home