import React from 'react'
import * as motion from "motion/react-client"

const Social = () => {
    return (
        <div className='home__social'>
            <motion.div
                whileHover={{ scale: 1.2, }}
                whileTap={{ scale: 0.8 }}
                style={{ backgroundColor: 'transparent' }}
            >
                <a href="https://www.instagram.com" className="home__social-icon" target="_blank" rel="noreferrer" alt="instagram">
                    <i className='uil uil-instagram'></i>
                </a>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.2, }}
                whileTap={{ scale: 0.8 }}
                style={{ backgroundColor: 'transparent' }}
            >
                <a href="https://dribbble.com" className="home__social-icon" target='_blank' rel="noreferrer" alt="dribbble">
                    <i className='uil uil-dribbble'></i>
                </a>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.2, }}
                whileTap={{ scale: 0.8 }}
                style={{ backgroundColor: 'transparent' }}
            >
                <a href="https://github.com" className="home__social-icon" target='_blank' rel="noreferrer" alt="github">
                    <i className="uil uil-github-alt"></i>
                </a>
            </motion.div>
        </div>
    )
}

export default Social