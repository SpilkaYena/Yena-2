import { motion } from "framer-motion";
import styles from "./LoadingAnimation.module.scss";

const LoadingAnimation = () => {
    return (
        <motion.div
            className={styles.loadingContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
        >
            <div className={styles.loadingText}>loading...</div>
        </motion.div>
    );
};

export default LoadingAnimation;