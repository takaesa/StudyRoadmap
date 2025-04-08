import React from 'react'

const Infor = () => {
    return (
        <div className='about__infor grid'>
            <div className="about__box">
                <i class="uil uil-award about__icon"></i>
                <h3 className="about__title">Experience</h3>
                <span className='about__subtitle'>Still studying and finding opotunities to growth</span>
            </div>
            <div className="about__box">
                <i class="uil uil-briefcase-alt about__icon"></i>
                <h3 className="about__title">Completed</h3>
                <span className='about__subtitle'>7 + Projects in school</span>
            </div>
            <div className="about__box">
                <i class="uil uil-book-reader about__icon" ></i>
                <h3 className="about__title">Studying</h3>
                <span className='about__subtitle'>24/7</span>
            </div>
        </div>
    )
}

export default Infor