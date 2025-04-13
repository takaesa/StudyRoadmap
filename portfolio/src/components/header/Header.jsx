import React, { useState } from 'react'
import './header.css'
import * as motion from "motion/react-client"

const Header = () => {

    const [toggle, setToggle] = useState(false);

    return (
        <>

            <header className="header">
                <nav className="nav container">
                    <a href="index.html" className="nav__logo">
                        Tian
                    </a>
                    <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
                        <ul className="nav__list grid">
                            <li className="nav__item">
                                <motion.button
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.8 }}
                                    className='nav__link active-link'
                                >
                                    <i className="uil uil-estate nav__icon"></i> Home
                                </motion.button>


                            </li>
                            <li className="nav__item">
                                <motion.button
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.8 }}
                                    className='nav__link'
                                >
                                    <i className="uil uil-user nav__icon"></i> About
                                </motion.button>
                            </li>
                            <li className="nav__item">
                                <motion.button
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.8 }}
                                    className='nav__link'
                                >
                                    <i className="uil uil-file-alt nav__icon"></i> Skills
                                </motion.button>
                            </li>
                            <li className="nav__item">
                                <motion.button
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.8 }}
                                    className='nav__link'
                                >
                                    <i className="uil uil-briefcase-alt nav__icon"></i> Services

                                </motion.button>
                            </li>
                            <li className="nav__item">

                                <motion.button
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.8 }}
                                    className='nav__link'
                                >
                                    <i className="uil uil-scenery nav__icon"></i> Portfolio
                                </motion.button>
                            </li>
                            <li className="nav__item">
                                <motion.button
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.8 }}
                                    className='nav__link'
                                >
                                    <i className="uil uil-message nav__icon"></i> Contact
                                </motion.button>
                            </li>
                        </ul>

                        <i className="uil uil-times nav__close" onClick={() => setToggle(!toggle)}></i>

                    </div>

                    <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
                        <i className="uil uil-apps"></i>
                    </div>
                </nav>
            </header></>

    )
}

export default Header