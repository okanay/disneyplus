import Image from "next/image";
import indexLoginBG from "../../../../../public/indexLoginBG.jpeg";

export const BackgroundImage = ({className}) => {

    return <>
        {/*Desktop BG*/}
        <Image
            priority
            src={indexLoginBG}
            alt={"Disney Plus Origin Items"}
            className={`object-center object-cover bg-cover absolute bottom-0 left-0 top-0 -z-10 w-full h-full bg-center bg-no-repeat bg-x-center`}/>
    </>
}