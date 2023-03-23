import Image from "next/image";
import contents from "../../../../../public/contents.jpeg";
import contentsSM from "../../../../../public/contents-sm.jpeg"
import contentsXS from "../../../../../public/contents-xs.jpeg"

export const BackgroundImage = ({className}) => {

    return (
        <>
            <Image
                priority
                src={contents}
                alt={"Disney Plus Origin Items"}
                className={`
                object-center object-cover bg-cover bg-center
                absolute bottom-0 left-0 top-0 -z-10 
                w-full h-full hidden laptop:block
                `}/>

            <Image
                priority
                src={contentsSM}
                alt={"Disney Plus Origin Items"}
                className={`
                object-fit 
                w-full h-fit
                sm:block
                laptop:hidden
                hidden
                `}/>

            <Image
                priority
                src={contentsXS}
                alt={"Disney Plus Origin Items"}
                className={`
                object-fit 
                w-full h-[100vh]
                absolute bottom-0 left-0 top-0 -z-10 
                sm:hidden
                block
                `}/>
        </>
    )
}