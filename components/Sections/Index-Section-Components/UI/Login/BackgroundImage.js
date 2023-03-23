import Image from "next/image";
import contents from "../../../../../public/contents.jpeg";
import contentsSM from "../../../../../public/contents-sm.jpeg"
import contentsXS from "../../../../../public/contents-xs.jpeg"

export const BackgroundImage = ({className}) => {

    return <>
        {/*Desktop BG*/}
        <Image
            priority
            src={contents}
            alt={"Disney Plus Origin Items"}
            className={`object-center object-cover bg-cover absolute bottom-0 left-0 top-0 z-10 w-full h-full bg-center bg-no-repeat bg-x-center hidden laptop:block`}/>
        {/*Desktop BG*/}
        <Image
            priority
            src={contentsXS}
            alt={"Disney Plus Origin Items"}
            className={`object-contain absolute left-0 top-0 z-10 w-full h-[100vh] h-fit laptop:hidden`}/>

        <Image
            priority
            src={contentsXS}
            alt={"Disney Plus Origin Items"}
            className={`object-contain absolute left-0 top-0 z-10 w-full h-[100vh] h-fit block sm:hidden`}/>
    </>
}