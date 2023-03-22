import {motion as m} from "framer-motion";

export const NavigationHiddenItem = ({children, scrollLatest, blockValue}) => {

    return <m.div
        initial=
            {{
                opacity: 0,
            }}
        animate=
            {{
                opacity: scrollLatest >= blockValue ? 1 : 0
            }}
        transition={{
            ease: "linear",
            duration: 0.65,
        }}
    >
        {children}
    </m.div>
}