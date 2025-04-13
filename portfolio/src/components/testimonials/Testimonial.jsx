import React from 'react'
import { Data } from './Data'
import './testimonial.css'
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

const swipeVariants = {
    enter: (direction) => ({
        x: direction > 0 ? 100 : -100,
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction) => ({
        x: direction > 0 ? -100 : 100,
        opacity: 0,
    }),
};

const Testimonial = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const current = Data[index];

    const paginate = () => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % Data.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1)
            setIndex((prev) => (prev + 1) % Data.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [])


    return (
        <section className="testimonial container section">
            <h2 className="section__title">My clients say</h2>
            <span className="section__subtitle">Testimonial</span>

            <div className="testimonial__container ">
                <AnimatePresence custom={direction}>
                    <motion.div key={current.id} custom={direction} variants={swipeVariants} initial="enter" animate="center" exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 200, damping: 30 },
                            opacity: { duration: 0.3 },
                        }}
                        style={{
                            position: "absolute",
                            width: "70%",
                            padding: "1rem",
                            background: "#fff",
                            borderRadius: 10,
                            border: '1px solid gray'
                        }}>
                        <img src={current.image} alt="testimonial card" className='testimonial__img' />
                        <h3 className="testimonial__name">
                            {current.title}
                        </h3>

                        <p className="testimonial__description">{current.description}</p>
                    </motion.div>
                </AnimatePresence>
                <div style={{ marginTop: 200, display: "flex", justifyContent: "center", gap: 24, }}>
                    <button className='testimonial__button' onClick={() => paginate(-1)}>←</button>
                    <button className='testimonial__button' onClick={() => paginate(1)}>→</button>
                </div>

            </div>
        </section >
    )
}

export default Testimonial