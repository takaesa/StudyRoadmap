import React from 'react'
import * as motion from "motion/react-client"
import './footer.css'
const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__container container">
                <h1 className="footer__title">Huu Thien</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Project</a>
                    </li>
                    <li>
                        <a href="#testimonials" className="footer__link">Testimonials</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <motion.div
                        whileHover={{ scale: 1.2, }}
                        whileTap={{ scale: 0.8 }}
                        style={{ backgroundColor: 'transparent', color: 'black' }}
                    >
                        <a href="https://www.facebook.com" className="footer__social-icon" target="_blank" rel="noreferrer" alt="instagram">
                            <i class="uil uil-facebook"></i>
                        </a>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2, }}
                        whileTap={{ scale: 0.8 }}
                        style={{ backgroundColor: 'transparent', color: 'black' }}
                    >
                        <a href="https://instagram.com" className="footer__social-icon" target='_blank' rel="noreferrer" alt="dribbble">
                            <i class="uil uil-instagram-alt"></i>
                        </a>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2, }}
                        whileTap={{ scale: 0.8 }}
                        style={{ backgroundColor: 'transparent', color: 'black' }}
                    >
                        <a href="https://twitter.com" className="footer__social-icon" target='_blank' rel="noreferrer" alt="github">
                            <i class="uil uil-twitter"></i>
                        </a>
                    </motion.div>


                </div>

                <span className="footer__copy">
                    &#169; Crypticalcoder. All rights reserved.
                </span>
            </div>
        </footer>
    )
}

export default Footer