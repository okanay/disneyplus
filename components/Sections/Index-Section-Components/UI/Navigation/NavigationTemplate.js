import {motion as m} from "framer-motion";

export const NavigationTemplate = ({children, scrollLatest, blackBgVisibleValue}) => {

    return <m.nav
        id={"index-navigation"}
        className={'h-fit w-full px-2 sm:px-6 laptop:px-14 flex flex-col justify-end items-end font-montserrat fixed z-40'}
        style=
            {
                {
                    backgroundColor: scrollLatest >= blackBgVisibleValue && "rgba(0, 0, 0, 1)"
                }
            }
        transition={{
            ease: "linear",
            duration: 0.65,
        }}
    >
        {children}
    </m.nav>
}