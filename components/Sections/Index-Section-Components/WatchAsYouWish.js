import Image from "next/image";
import devicesLg from "../../../public/devices-lg.jpeg";

export const WatchAsYouWish = () => {

    return <section id={"only-on-disney-plus"} className={'bg-skin-body-1100 border-y border-skin-body-1100 font-montserrat h-full w-full relative'}>
        <div className={'flex flex-col justify-center text-center gap-8 font-semibold mt-24 mb-8 px-2'}>
            <h1 className={'text-[24px] sm:text-[32px] tablet:text-[36px] laptop:text-[40px]'}>Dilediğin gibi izle</h1>
            <p className={'text-[12px] sm:text-[14px] tablet:text-[16px] laptop:text-[18px] text-skin-font-700'}>Dünyanın en iyi hikayelerinin tadını çıkar - istediğin zaman, istediğin yerde.</p>
        </div>
        <Image src={devicesLg} alt={"Disney Origins"} className={`object-right-top w-full h-auto    `} priority={true}/>
    </section>
}