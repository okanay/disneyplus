import {motion as m} from "framer-motion";
import Link from "next/link";


export const AnimatedArrowDownSVG = ({className, url}) => {

    return (
        <Link href={url}>
            <m.svg
                initial={{y: [0, 0, 0], opacity: 1}}
                animate={{y: [5, 15, 5], opacity: 0.5}}
                transition={{
                    ease: "linear",
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "mirror",
                    repeatDelay: 0.5,
                }}

                className={className}
                data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <rect width="48" height="48" fill="none"></rect>
                <path
                    d="M36.63,18.37a1.37,1.37,0,0,1,2.15.37,1.7,1.7,0,0,1-.3,2.06L25.4,32.64a1.37,1.37,0,0,1-1.85,0l-13-11.84a1.71,1.71,0,0,1-.29-2.06,1.37,1.37,0,0,1,2.15-.37l12.11,11ZM24.25,31.42a.38.38,0,0,1,.46,0l-.23-.21ZM11.71,19.55s0,.06,0,0Zm25.61,0h0Z"></path>
            </m.svg>
        </Link>

    );
}






