import originsSm from "../../../public/original-sm.jpeg"
import originLg from "../../../public/original-lg.jpeg"
import Image from "next/image";

export const OnlyOnDisneyPlus = () => {

    return <section id={"only-on-disney-plus"} className={'tablet:bg-transparent bg-skin-body-1100 border-y border-skin-body-1100 font-montserrat h-full w-full relative'}>
        <Image src={originLg} alt={"Disney Origins"} className={`object-right-top w-full h-auto hidden tablet:block`} priority={true}/>
        <div className={'absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start px-12 laptop:px-[7rem] hidden tablet:block'}>
            <div className={'max-w-[40%] flex flex-col items-start justify-center laptop:gap-8 gap-4 h-full w-full py-6 laptop:py-32'}>
                <h1 className={'text-[32px] laptop:text-[40px] font-semibold'}>Sadece Disney+’ta</h1>
                <p className={'text-[18px] laptop:text-[22px] text-skin-font-800'}>Başka hiçbir dijital yayın platformunda bulamayacağın film, dizi ve orijinal içerikler.</p>
                <div className={'mt-[80px]'}></div>
                <div className={'mt-[80px]'}></div>
            </div>
        </div>
        <div className={'flex flex-row justify-center items-center px-2 block tablet:hidden'}>
            <div className={'flex flex-col justify-center items-center gap-20'}>
                <div className={'flex flex-col justify-center items-center text-center gap-6'}>
                    <h1 className={'text-[26px] font-semibold'}>Sadece Disney+’ta</h1>
                    <p className={'text-[16px] text-skin-font-800'}>Başka hiçbir dijital yayın platformunda bulamayacağın film, dizi ve orijinal içerikler.</p>
                </div>
                <Image src={originsSm} alt={"Disney Origins"} className={""} priority={true}/>
            </div>
        </div>

    </section>
}
