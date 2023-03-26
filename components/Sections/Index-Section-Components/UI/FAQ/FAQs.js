import {PlusIcon} from "@heroicons/react/20/solid";
import {useState} from "react";

export const FaqItems = () => {

    const [answers, setAnswers] = useState(questions)
    const handleQuestionClick = (id) => {
        let value = answers[id].open
        setAnswers(prevState => {
            return [...prevState, answers[id].open = !value]
        })
    }

    return <div className={'space-y-3 w-full'}>
        {FAQs.map((item, index) => {
            return (
                <div className={'text-base sm:text-xl'} key={item.key} onClick={() => handleQuestionClick(index)}>
                    <div
                        className="py-[0.8rem] bg-neutral-900 rounded-sm flex flex-col justify-center px-6 cursor-pointer">
                        <div className="flex flex-row justify-between items-center">
                            <h1 className="">{item.title}</h1>
                            <div
                                className={`transform-all duration-500 ${answers[index].open ? "-rotate-45 " : "rotate-0"}`}>
                                <PlusIcon
                                    className={`w-5 h-5 basePhone:w-7 basePhone:h-7 laptop:w-10 laptop:h-10 origin-top origin-left `}/>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`bg-neutral-900 rounded-sm flex flex-col justify-center px-6 cursor-pointer my-0.5 transition-all overflow-auto duration-300 ${answers[index].open ? "max-h-[1500px]" : "max-h-0"}`}>
                        <div className={'flex flex-col items-start text-start justify-start py-4 text-skin-font-700'}>
                            <h2>{item.explanation.main}</h2>
                            <h2 className={`${item.explanation.title !== "" ? "mt-8" : "mt-0"} ${item.explanation.list.length > 0 && "mb-2"}`}>{item.explanation.title}</h2>
                            <ul className={`${item.explanation.list.length > 0 && `${item.explanation.listType} space-y-2 px-8`} ${item.explanation.title === "" ? "mt-0" : "mt-2"} `}>
                                {item.explanation.list?.map(i => {
                                    return (
                                        <li key={i.key}>
                                            {i.item}
                                        </li>
                                    )
                                })}
                            </ul>

                            {item.explanation.url && (
                                <span className={'mt-10'}>Daha fazla bilgi için <span className={'text-skin-font-1000 underline'}>buraya</span> tıkla.</span>
                            )}
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
}

const questions = [{open: false}, {open: false}, {open: false}, {open: false}, {open: false}, {open: false}, {open: false},]
const FAQs = [
    {
        key: "questions-1", title: "Disney+ nedir?", explanation:
            {
                main: "Disney+; Disney, Pixar, Marvel, Star Wars, National Geographic ve çok daha fazlasına ait içeriklerin yer aldığı dijital yayın platformudur.",
                title: "Disney+, standart üyelik paketi kapsamında birçok ayrıcalık sunar:",
                listType : "list-disc",
                list: [
                    {
                        key: "questions-1-list-1",
                        item: "Başka hiçbir yerde izleyemeyeceğin orijinal içerikler, gişe filmleri, bir solukta izlenebilecek diziler ve programlar, atıştırmalık kısa içerikler ve ilham verici belgeseller"
                    },
                    {
                        key: "questions-1-list-2",
                        item: "10 cihaza ve 7 ayrı profile kadar sınırsız indirme imkanı"
                    },
                    {
                        key: "questions-1-list-3",
                        item: "Uyumlu cihazlarda hiçbir ek ücret ödemeden 4K UHD çözünürlükte Dolby Vision ve Dolby Atmos desteğiyle izleme imkanı"
                    },
                    {
                        key: "questions-1-list-4",
                        item: "Özel çocuk profilleri içeren kapsamlı ebeveyn kontrol sistemi"
                    },
                    {
                        key: "questions-1-list-5",
                        item: "Aynı anda 4 ekranda izleme imkanı"
                    },
                    {
                        key: "questions-1-list-6",
                        item: "GroupWatch özelliğiyle altı arkadaşınla sanal izleme partileri düzenleme imkanı"
                    }
                ],
                url : false
            }
    },
    {
        key: "questions-2", title: "Disney+’ta ne izleyebilirim?", explanation:
            {
                main: "Dünyanın en iyi hikaye anlatıcılarından binlerce film, belgesel, dizi, animasyon, kısa içerik ve her ay eklenen yeni içeriklerle Disney+’ta her zaman izlemek için bir şey bulacaksın.",
                title: "",
                listType : "list-disc",
                list: [
                    {
                        key: "questions-2-list-1",
                        item: "Disney’den “Cruella” ve “Enkanto” gibi gişe rekorları kıran, en yeni canlı aksiyon ve animasyon filmleri"
                    },
                    {
                        key: "questions-2-list-2",
                        item: "Pixar’ın dahi yaratıcılarından, her yaştan izleyici için “Luka” ve “Soul” gibi iç ısıtan hikayeler"
                    },
                    {
                        key: "questions-2-list-3",
                        item: "Marvel Studios’dan mutlaka görülmesi gereken “Loki”, “Hawkeye” ve “WandaVision” gibi orijinal içerikler"
                    },
                    {
                        key: "questions-2-list-4",
                        item: '"Obi-Wan Kenobi” ve “The Mandalorian” gibi çok çok uzak bir galaksiden destansı hikayeler'
                    },
                    {
                        key: "questions-2-list-5",
                        item: "Korkusuz National Geographic kaşifleri eşliğinde aydınlatıcı belgeseller"
                    },
                    {
                        key: "questions-2-list-6",
                        item: "Herkesin konuştuğu “The Dropout”, “How I Met Your Father” gibi orijinal içerikler ve bir solukta yeniden izlenebilecek “How I Met Your Mother” ve “The Walking Dead” gibi dünyaca ünlü fenomen diziler"
                    },
                ],
                url: false
            }
    },
    {
        key: "questions-3", title: "Disney+’ın fiyatı nedir?", explanation:
            {
                main: "Disney+ aylık üyelik bedeli 64,99 TL’dir. Dilersen yıllık üyelik ile (tek ödemede 649,90 TL) 10 ay fiyatına 12 ay izleyebilirsin!*",
                title: "*12 ay boyunca aylık ödemeye kıyasla sağlanan avantaj",
                listType : "list-disc",
                list: [],
                url : false,
            }
    },
    {
        key: "questions-4", title: "Hangi cihazlar destekleniyor?", explanation:
            {
                main: "Disney+; mobil cihazlar, web tarayıcıları, oyun konsolları, set üstü kutular ve smart TV’leri destekler. Tam liste için buraya tıkla.",
                title: "",
                listType : "list-disc",
                list: [],
                url : false
            }
    },
    {
        key: "questions-5", title: "Disney+ üyeliği taahhüt gerektiriyor mu?", explanation:
            {
                main: "Disney+ üyeliği hiçbir taahhüt gerektirmez ve mevcut faturalandırma döneminin bitiminden itibaren geçerli olmak kaydıyla üyeliğini dilediğin zaman iptal edebilirsin. Aşağıdaki 5 kolay adımı izlemen yeterli.",
                title: "",
                listType : "list-decimal",
                list: [
                    {
                        key: "questions-5-list-1",
                        item: "www.disneyplus.com’a gidip hesabına giriş yap"
                    },
                    {
                        key: "questions-5-list-1",
                        item: "Profilini seç"
                    },
                    {
                        key: "questions-5-list-1",
                        item: "Hesap bölümünü seç"
                    },
                    {
                        key: "questions-5-list-1",
                        item: "Üyeliği İptal Et’i seç"
                    },
                    {
                        key: "questions-5-list-1",
                        item: "İptal İşlemini Tamamla’yı seçerek onayla"
                    },
                ],
                url : true
            }
    },]

