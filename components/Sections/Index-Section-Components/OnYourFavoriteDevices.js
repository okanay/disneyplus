import tv from "../../../public/tv.png"
import pc from "../../../public/pc.png"
import tablet from "../../../public/tablet.png"
import console from "../../../public/console.png"
import Image from "next/image";

export const OnYourFavoriteDevices = () => {

    return <section id={"on-your-favorite-devices"}
                    className={'bg-skin-body-1100 border-y border-skin-body-1100 font-montserrat h-full w-full'}>
        <h1 className={'text-[28px] sm:text-[32px] laptop:text-[40px] font-semibold text-center w-full mt-32 mb-12 tablet:mb-0 px-2'}>Favori
            cihazlarında</h1>
        <div className={'grid laptop:grid-cols-4 tablet:grid-cols-2 grid-cols-1 justify-around items-start mb-32 px-4 tablet:px-12 laptop:px-24'}>
            <div className={'flex flex-col items-center justify-center w-full h-auto'}>
                <Image src={tv} alt={"tv"} priority={true}/>
                <h2 className={'text-[16px] sm:text-[22px] laptop:text-[28px] font-semibold text-center w-full'}>TV</h2>
                <ul className={'flex flex-col items-center text-center justify-center gap-0.5 text-skin-font-700 mt-4'}>
                    <li>Amazon Fire TV</li>
                     <li>Android TV</li>
                     <li>Apple TV</li>
                     <li>Arçelik*</li>
                     <li>Beko*</li>
                     <li>Chromecast</li>
                     <li>Hisense</li>
                     <li>LG</li>
                     <li>Panasonic</li>
                     <li>Samsung</li>
                     <li>Vestel*</li>
                </ul>
            </div>
            <div className={'flex flex-col items-center justify-center w-full h-auto'}>
                <Image src={pc} alt={"pc"} priority={true}/>
                <h2 className={'text-[16px] sm:text-[22px] laptop:text-[28px] font-semibold text-center w-full'}>Bilgisayar</h2>
                <ul className={'flex flex-col items-center text-center justify-center gap-0.5 text-skin-font-700 mt-4'}>
                    <li>Chrome OS</li>
                    <li>MacOS</li>
                    <li>Windows PC</li>
                </ul>
            </div>
            <div className={'flex flex-col items-center justify-center w-full h-auto'}>
                <Image src={tablet} alt={"tablet"} priority={true}/>
                <h2 className={'text-[16px] sm:text-[22px] laptop:text-[28px] font-semibold text-center w-full'}>Tablet</h2>
                <ul className={'flex flex-col items-center text-center justify-center gap-0.5 text-skin-font-700 mt-4'}>
                    <li>Amazon Fire Tablet</li>
                    <li>Android Telefonlar ve Tabletler</li>
                    <li>iPhone ve iPad</li>
                </ul>
            </div>
            <div className={'flex flex-col items-center justify-center w-full h-auto'}>
                <Image src={console} alt={"console"} priority={true}/>
                <h2 className={'text-[16px] sm:text-[22px] laptop:text-[28px] font-semibold text-center w-full'}>Konsol</h2>
                <ul className={'flex flex-col items-center text-center justify-center gap-0.5 text-skin-font-700 mt-4'}>
                    <li>PS5</li>
                    <li>PS4</li>
                    <li>Xbox Seris X</li>
                    <li>Xbox Seris S</li>
                    <li>Xbox One</li>
                </ul>
            </div>
        </div>
        <h2 className={'text-[12px] sm:text-[14px] laptop:text-[16px] text-center w-full mt-32 px-2 text-skin-font-700 mb-32'}>
            *Disney+ henüz Linux işletim sistemli Arçelik, Beko ve Vestel TV’leri desteklememektedir.
        </h2>
    </section>
}