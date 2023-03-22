import {BackgroundImage} from "./UI/Login/BackgroundImage";
import {DisneySVG} from "../../SVGs/DisneySVG";
import {AnimatedArrowDownSVG} from "../../SVGs/AnimatedArrowDownSVG";

export const IndexLogin = () => {
    return <section id={"index-login"} className={'min-h-[740px] text-skin-font-1000 font-montserrat w-full h-[100vh] p-[110px] overflow-hidden relative flex flex-col justify-center items-start flex flex-col justify-end'}>
        <div className={'max-w-[640px] w-full h-fit flex flex-col justify-start items-start'}>
            <DisneySVG className={'max-w-[180px] max-h-[100px] w-full h-full'}/>
            <h1 className={'text-5xl my-6 leading-[4rem]'}>
                <span className={'font-semibold'}>
                    Hayal ettiğinden çok daha fazlası
                </span>
            </h1>
            <p className={'text-skin-font-600 text-lg'}>
                Üye olmak ya da üyeliğini yeniden başlatmak için e-postanı gir.
            </p>
            <form className={'flex flex-row justify-start items-center w-full h-fit my-4'}>
                <div className={'w-full'}>
                    <input
                        id={'index-email-input'}
                        placeholder={"E-posta"}
                        type="email"
                        itemType={'email'}
                        className={'px-4 h-12 w-full bg-gray-700 border border-gray-700 focus:border-skin-body-400 focus:outline-none'}/>
                    <label
                        htmlFor={'index-email-input'}/>
                </div>
                <div className={'bg-skin-700 hover:bg-skin-600 transition-colors duration-300 w-64 h-12 flex flex-row justify-center'}>
                    <button type={'button'} className={'w-full'}>
                        DEVAM ET
                    </button>
                </div>
            </form>
            <p className={'text-skin-font-600 text-lg'}>Yıllık Disney+ üyeliği için kaydol, aylık ödemeye kıyasla 10 ay
                fiyatına 12 ay izle.</p>
        </div>
        <BackgroundImage/>
        <AnimatedArrowDownSVG url={"/"} className={'w-[48px] h-[48px] p-[6px] absolute z-10 fill-skin-font-700 bottom-12'}/>
    </section>
}