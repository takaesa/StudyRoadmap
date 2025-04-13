import React, { useEffect } from 'react'
import { motion } from "framer-motion"


const ScrollUp = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollUp = document.querySelector(".scrollup");
            if (window.scrollY >= 760) {
                scrollUp.classList.add("show-scroll");
            } else {
                scrollUp.classList.remove("show-scroll");
            }
        };

        window.addEventListener("scroll", handleScroll);

        // ✅ Cleanup listener khi unmount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <motion.button
            className="scrollup"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            onClick={handleClick}
            style={{
                backgroundColor: 'var(--title-color)',
                color: 'white',
                position: 'fixed',
                right: '2.5rem',
                bottom: '3rem',
                padding: '.3rem .5rem',
                borderRadius: '50%',
                zIndex: 1003,
                width: 40,
                height: 40,
                opacity: 0,
                pointerEvents: 'none',
            }}
            transition={{ duration: 0.4 }}
        >
            <i className="uil uil-arrow-up"></i>
        </motion.button>
    )
}

export default ScrollUp