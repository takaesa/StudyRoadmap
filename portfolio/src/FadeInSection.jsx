import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const FadeInSection = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 80 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: "spring", stiffness: 100, damping: 40, duration: 0.6, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

export default FadeInSection