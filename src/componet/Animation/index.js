import useDivInView, { LEFT_VARIANTS, RIGHT_VARIANTS, TRANSITION, transition_2, ZOOM_IN_VARIANTS, ZOOM_IN_VARIANTS_2 } from "../../hooks/useDivInView";
import { motion } from "framer-motion"

export const LeftAnimatedDiv = ({ children, ...props }) => {

    const [ref, control] = useDivInView();

    return (
        <motion.div className="left-div"
            {...props}
            ref={ref}
            animate={control}
            initial="hidden"
            variants={LEFT_VARIANTS}
            transition={TRANSITION}
        >
            {children}
        </motion.div>
    )
}

export const RightAnimatedDiv = ({ children, ...props }) => {

    const [ref, control] = useDivInView();

    return (
        <motion.div className="right-div"
            ref={ref}
            animate={control}
            initial="hidden"
            variants={RIGHT_VARIANTS}
            transition={TRANSITION}
            {...props}
        >
            {children}
        </motion.div>
    )
}

export const ZoomInDiv = ({ children, ...props }) => {

    const [ref, control] = useDivInView();

    return (
        <motion.div className="zoom-in-div"
            ref={ref}
            animate={control}
            initial="hidden"
            variants={ZOOM_IN_VARIANTS}
            transition={TRANSITION}
            {...props}
        >
            {children}
        </motion.div>
    )
}

export const ZoomInDiv2 = ({ children, ...props }) => {

    const [ref, control] = useDivInView();

    return (
        <motion.div className="zoom-in-div"
            ref={ref}
            animate={control}
            initial="hidden"
            variants={ZOOM_IN_VARIANTS_2}
            transition={transition_2}
            {...props}
        >
            {children}
        </motion.div>
    )
}
