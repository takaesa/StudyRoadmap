import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./scrollup.css";

const ScrollUpBtn = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollUp = document.querySelector(".scrollup");
            if (scrollUp) {
                if (window.scrollY >= 100) {
                    scrollUp.classList.add("show-scroll");
                } else {
                    scrollUp.classList.remove("show-scroll");
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <motion.button
            className="scrollup"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            onClick={handleClick}
            style={{
                backgroundColor: "black",
                color: "white",
                position: "fixed",
                right: "2rem",
                bottom: "2rem",
                borderRadius: "50%",
                padding: "10px",
                zIndex: 2000,
                width: 40,
                height: 40,
                opacity: 1
            }}
            transition={{ duration: 0.3 }}
        >
            ↑
        </motion.button>
    );
};

export default ScrollUpBtn;
