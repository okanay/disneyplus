import {BackgroundImage} from "./UI/Login/BackgroundImage";
import {DisneySVG} from "../../SVGs/DisneySVG";
import {AnimatedArrowDownSVG} from "../../SVGs/AnimatedArrowDownSVG";
import {RegisterForm} from "./UI/Login/RegisterForm";

export const IndexLogin = () => {
    return <section id={"index-login"} className={`
                                       font-montserrat w-full relative pb-20 bg-transparent 
                                       sm:bg-black
                                       laptop:h-[100vh] laptop:static laptop:pb-20 laptop:bg-transparent
                                       laptop:flex laptop:flex-col laptop:items-start laptop:justify-start laptop:px-28`}>
        <BackgroundImage/>
        <div className={`h-[100vh] max-w-[440px] mx-auto
            sm:h-full sm:max-w-full sm:mx-0
            flex flex-col justify-center
            w-full sm:absolute sm:bottom-0 
             laptop:h-full laptop:static`
        }>
            <div className={`
             max-w-[640px] px-4 mx-auto
             flex flex-col justify-center items-center text-center
             laptop:justify-center laptop:items-start laptop:text-start laptop:mx-0
             `}>

                <DisneySVG
                    className={'max-w-[160px] max-h-[87px] laptop:max-w-[180px] laptop:max-h-[100px] w-full h-full'}/>

                <h1 className={'my-6 text-[30px] laptop:text-5xl laptop:leading-[4rem]'}>
                <span className={'font-semibold'}>
                    Hayal ettiğinden çok daha fazlası
                </span>
                </h1>

                <p className={'text-skin-font-600 text-[16px] sm:text-lg'}>
                    Üye olmak ya da üyeliğini yeniden başlatmak için e-postanı gir.
                </p>

                <RegisterForm/>

                <p className={'text-skin-font-600 text-[16px] sm:text-lg'}>
                    Yıllık Disney+ üyeliği için kaydol, aylık ödemeye kıyasla 10 ay fiyatına 12 ay izle.
                </p>
            </div>
        </div>

        <AnimatedArrowDownSVG url={"/"} className={`absolute bottom-32 sm:static
        block sm:hidden laptop:block
        w-full w-[48px] h-[48px] p-[6px] fill-skin-font-700`}/>
    </section>
}


//

//