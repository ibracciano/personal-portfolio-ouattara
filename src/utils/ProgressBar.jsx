import { motion, useScroll } from "framer-motion"



const ProgressBar = () => {
    const { scrollYProgress } = useScroll()
    return (
        <motion.div style={{ scaleX: scrollYProgress }} className="fixed top-0 left-0 right-0 h-2 origin-left OrangeToPink"></motion.div>
    )
}

export default ProgressBar