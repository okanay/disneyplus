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
                className={`object-top object-contain object-cover
                w-full
                h-[85vh]
                tablet:block
                laptop:hidden
                hidden
                `}/>

            <Image
                priority
                src={contentsXS}
                alt={"Disney Plus Origin Items"}
                className={`object-top object-contain object-cover
              
                w-full h-[100vh]
                absolute bottom-0 left-0 top-0 -z-10 
                tablet:hidden
                block
                `}/>
        </>
    )
}