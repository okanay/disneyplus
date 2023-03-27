import {DisneySVG} from "../../SVGs/DisneySVG";

export const IndexFooter = () => {

    return <footer id={"index-footer"}
                   className={'bg-skin-body-1100 border-y border-skin-body-1100 font-montserrat h-full w-full'}>
        <div className={'flex flex-col justify-center items-center content-center gap-2 w-full h-full'}>
            <DisneySVG className={"w-[80px] h-[40px]"}/>
            <ul className={'flex flex-row justify-center w-full h-auto content-left flex-wrap text-[12px] text-skin-font-700 gap-4 max-w-[1024px] my-4 px-12'}>
                <li>Türkçe</li>
                <li>Üyelik Sözleşmesi</li>
                <li>Gizlilik Politikası</li>
                <li>EMEA Gizlilik Hakları</li>
                <li>Tanımlama Bilgileri Politikası</li>
                <li>İlgi Alanına Dayalı Reklamlar</li>
                <li>Desteklenen Cihazlar</li>
                <li>Yardım Merkezi</li>
                <li>Hakkımızda</li>
                <li>Tercihleri Yönetin</li>
            </ul>
            <small className={'max-w-[250px] text-center text-skin-font-700 text-[12px] mb-12'}>
                © 2023 Disney ve bağlı kuruluşları.
                Tüm hakları saklıdır.
            </small>
        </div>
    </footer>
}