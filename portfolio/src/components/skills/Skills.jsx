import React from 'react'
import ProgLanguage from './ProgLanguage'
import './skills.css'
import FrameAndLibs from './FrameAndLibs'


const Skills = () => {
    return (
        <section className="skills section" id='skills'>
            <h2 className='section__title'>Skills</h2>
            <span className="section__subtitle">My technical level</span>

            <div className="skills_container container grid">
                <ProgLanguage />
                <FrameAndLibs />
            </div>
        </section>
    )
}

export default Skills