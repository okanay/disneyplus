import {useMotionValueEvent, useScroll} from "framer-motion";
import {useState} from "react";

export const useGetScrollYValue = () => {

    const { scrollY } = useScroll()
    const [scrollLatest , setScrollLatest] = useState(0)

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrollLatest(latest)
    })

    return [scrollLatest]
}