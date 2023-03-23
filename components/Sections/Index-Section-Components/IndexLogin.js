import {BackgroundImage} from "./UI/Login/BackgroundImage";
import {DisneySVG} from "../../SVGs/DisneySVG";
import {AnimatedArrowDownSVG} from "../../SVGs/AnimatedArrowDownSVG";
import {RegisterForm} from "./UI/Login/RegisterForm";

export const IndexLogin = () => {
    return <section id={"index-login"} className={'min-h-[800px] text-skin-font-1000 font-montserrat w-full h-[100vh] px-3 laptop:p-[7rem] overflow-hidden relative flex flex-col justify-end laptop:justify-center items-start flex flex-col justify-end'}>
        <div className={'max-w-[440px] sm:max-w-[600px] laptop:max-w-[640px] w-full h-fit flex flex-col laptop:justify-center laptop:items-start justify-end items-center mx-auto laptop:mx-0 mb-36 sm:mb-32 laptop:mb-0 relative z-20'}>
            <DisneySVG className={'max-w-[130px] max-h-[70px] laptop:max-w-[180px] laptop:max-h-[100px] w-full h-full'}/>
            <h1 className={'text-[26px] sm:text-5xl sm:leading-[4rem] text-center laptop:text-start my-6'}>
                <span className={'font-semibold'}>
                    Hayal ettiğinden çok daha fazlası
                </span>
            </h1>
            <p className={'text-skin-font-600 text-[16px] sm:text-lg text-center laptop:text-start'}>
                Üye olmak ya da üyeliğini yeniden başlatmak için e-postanı gir.
            </p>
            <RegisterForm/>
            <p className={'text-skin-font-600 text-[16px] sm:text-lg text-center laptop:text-start'}>Yıllık Disney+ üyeliği için kaydol, aylık ödemeye kıyasla 10 ay
                fiyatına 12 ay izle.</p>
        </div>
        <BackgroundImage/>
        <AnimatedArrowDownSVG url={"/"} className={'w-[48px] h-[48px] p-[6px] absolute z-10 fill-skin-font-700 bottom-12 w-full laptop:w-fit'}/>
    </section>
}