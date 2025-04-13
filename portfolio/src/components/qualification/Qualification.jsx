import React from 'react'
import './qualification.css'
import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"
import { useState } from "react"

const Qualification = () => {
    const [toggle, setToggle] = useState(1);
    const [selectedTab, setSelectedTab] = useState(1)

    return (

        <section className='qualification section'>
            <h2 className='section__title'>Qualification</h2>
            <span className="section__subtitle">My personel journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggle === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => setToggle(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>
                    <div className={toggle === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => setToggle(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <AnimatePresence mode='wait'>
                        {toggle === 1 && (
                            <motion.div key="education"
                                layout
                                className="qualification__content qualification__content-active"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ type: 'spring', stiffness: 100, damping: 30, duration: 0.3 }}
                            >
                                <div className="qualification__data">

                                    <div style={{ justifySelf: 'flex-end' }}>
                                        <h3 className="qualification__title">Web Design</h3>
                                        <span className="qualification__subtitle">Spain - Institute</span>
                                        <div className="qualification__calendar">
                                            <i className="uil uil-calendar-alt"></i>
                                            2021 - Present
                                        </div>
                                    </div>

                                    <div>
                                        <span className="qualification__rounded"></span>
                                        <span className="qualification__line"></span>
                                    </div>

                                    <div></div>
                                </div>
                                <div className="qualification__data">
                                    <div></div>
                                    <div>
                                        <span className="qualification__rounded"></span>
                                        <span className="qualification__line"></span>
                                    </div>
                                    <div>
                                        <h3 className="qualification__title">Art Director</h3>
                                        <span className="qualification__subtitle">Spain - Institute</span>
                                        <div className="qualification__calendar">
                                            <i className="uil uil-calendar-alt"></i>
                                            2021 - Present
                                        </div>
                                    </div>



                                </div>
                                <div className="qualification__data">

                                    <div style={{ justifySelf: 'flex-end' }}>
                                        <h3 className="qualification__title">Web Development</h3>
                                        <span className="qualification__subtitle">Spain - Institute</span>
                                        <div className="qualification__calendar">
                                            <i className="uil uil-calendar-alt"></i>
                                            2021 - Present
                                        </div>
                                    </div>

                                    <div>
                                        <span className="qualification__rounded"></span>
                                        <span className="qualification__line"></span>
                                    </div>
                                    <div></div>

                                </div>
                                <div className="qualification__data">
                                    <div></div>
                                    <div>
                                        <span className="qualification__rounded"></span>
                                        <span className="qualification__line"></span>
                                    </div>
                                    <div>
                                        <h3 className="qualification__title">UX Developer</h3>
                                        <span className="qualification__subtitle">Spain - Institute</span>
                                        <div className="qualification__calendar">
                                            <i className="uil uil-calendar-alt"></i>
                                            2021 - Present
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <AnimatePresence mode='wait'>
                        {toggle === 2 && (
                            <motion.div key="education"
                                layout
                                className="qualification__content qualification__content-active"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ type: 'spring', stiffness: 100, damping: 30, duration: 0.3 }}
                            >
                                <div className="qualification__data">

                                    <div style={{ justifySelf: 'flex-end' }}>
                                        <h3 className="qualification__title">Small job</h3>
                                        <span className="qualification__subtitle">Spain - Institute</span>
                                        <div className="qualification__calendar">
                                            <i className="uil uil-calendar-alt"></i>
                                            2021 - Present
                                        </div>
                                    </div>

                                    <div>
                                        <span className="qualification__rounded"></span>
                                        <span className="qualification__line"></span>
                                    </div>
                                    <div></div>

                                </div>
                                <div className="qualification__data">
                                    <div></div>
                                    <div>
                                        <span className="qualification__rounded"></span>
                                        <span className="qualification__line"></span>
                                    </div>
                                    <div>
                                        <h3 className="qualification__title">No Exp</h3>
                                        <span className="qualification__subtitle">Spain - Institute</span>
                                        <div className="qualification__calendar">
                                            <i className="uil uil-calendar-alt"></i>
                                            2021 - Present
                                        </div>
                                    </div>
                                </div>
                                <div className="qualification__data">
                                    <div style={{ justifySelf: 'flex-end' }}>
                                        <h3 className="qualification__title">Web Development</h3>
                                        <span className="qualification__subtitle">Spain - Institute</span>
                                        <div className="qualification__calendar">
                                            <i className="uil uil-calendar-alt"></i>
                                            2021 - Present
                                        </div>
                                    </div>

                                    <div>
                                        <span className="qualification__rounded"></span>
                                        <span className="qualification__line"></span>
                                    </div>
                                    <div></div>

                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </div>
        </section >
    )
}

export default Qualification