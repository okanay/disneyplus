import Image from "next/image";
import item01 from "../../../public/item-1.png"
import item02 from "../../../public/item-2.png"
import item03 from "../../../public/item-3.png"

export const EnjoyAsYouWish = () => {

    return (<section id={"enjoy-as-you-wish"} className={'bg-skin-body-1100 border-y border-skin-body-1100 h-full w-full font-montserrat'}>
        <div className={'w-full h-full justify-center grid grid-cols-1 laptop:grid-cols-3 items-start mt-16 font-semibold mb-32'}>
            <div className={'flex flex-col justify-center items-center text-center gap-4 px-4'}>
                <Image src={item01} alt={"fun"} priority/>
                <h1 className={'text-[22px] sm:text-[24px] tablet:text-[28px]'}>Sonsuz eğlence</h1>
                <p className={'text-[13px] sm:text-[15px] tablet:text-[17px] text-skin-font-700'}>Binlerce saatlik dizi, film ve orijinal içeriği keşfet.</p>
            </div>
            <div className={'flex flex-col justify-center items-center text-center gap-4 my-16 laptop:my-0 px-4'}>
                <Image src={item02} alt={"device"} priority/>
                <h1 className={'text-[22px] sm:text-[24px] tablet:text-[28px]'}>Favori cihazlarında</h1>
                <p className={'text-[13px] sm:text-[15px] tablet:text-[17px] text-skin-font-700'}>Uyumlu cihazlarda aynı anda dört ayrı ekranda izle.</p>
            </div>
            <div className={'flex flex-col justify-center items-center text-center gap-4 px-4'}>
                <Image src={item03} alt={"friendly"} priority/>
                <h1 className={'text-[22px] sm:text-[24px] tablet:text-[28px] max-w-[340px]'}>Kullanıcı dostu ebeveyn kontrolleri</h1>
                <p className={'text-[13px] sm:text-[15px] tablet:text-[17px] text-skin-font-700 max-w-[475px]'}>Kullanımı kolay ebeveyn kontrollerimizle aileni güvende tut.</p>
            </div>
        </div>

    </section>)
}