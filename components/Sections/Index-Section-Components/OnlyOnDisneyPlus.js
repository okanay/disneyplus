import originsSm from "../../../public/original-sm.jpeg"
import originLg from "../../../public/original-lg.jpeg"
import Image from "next/image";

export const OnlyOnDisneyPlus = () => {

    return <section id={"only-on-disney-plus"} className={'h-[100vh] w-full bg-black/95 border border-skin-body-1100 font-montserrat py-8 overflow-hidden'}>
        <div className={'flex flex-row justify-center items-center px-2 block tablet:hidden'}>
            <div className={'flex flex-col justify-center items-center gap-20'}>
                <div className={'flex flex-col justify-center items-center text-center gap-6'}>
                    <h1 className={'text-[26px] font-semibold'}>Sadece Disney+’ta</h1>
                    <p className={'text-[16px] text-skin-font-800'}>Başka hiçbir dijital yayın platformunda bulamayacağın film, dizi ve orijinal içerikler.</p>
                </div>
                <Image src={originsSm} alt={"Disney Origins"} className={""} priority={true}/>
            </div>
        </div>
        <div className={'relative px-12 laptop:px-[7rem] hidden tablet:block'}>
            <div className={'absolute top-0 z-10 flex flex-col items-start laptop:gap-8 gap-4 laptop:max-w-[600px] max-w-[300px]'}>
                <h1 className={'text-[32px] laptop:text-[40px] font-semibold'}>Sadece Disney+’ta</h1>
                <p className={'text-[18px] laptop:text-[22px] text-skin-font-800'}>Başka hiçbir dijital yayın platformunda bulamayacağın film, dizi ve orijinal içerikler.</p>
            </div>
            <Image src={originLg} alt={"Disney Origins"} className={"absolute top-0 left-0"} priority={true}/>
        </div>
    </section>
}