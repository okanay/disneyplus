import {FaqItems} from "./UI/FAQ/FAQs";

export const FrequentlyAskedQuestions = () => {




    return (<section id='frequently-asked-questions' className={'bg-skin-body-1100 border-y border-skin-body-1100 h-full w-full font-montserrat px-4 laptop:px-20'}>
        <div className={'flex flex-col justify-center items-center w-full gap-3 mb-32'}>
            <h1 className={'text-[28px] sm:text-[32px] laptop:text-[40px] font-semibold mb-2'}>Sık Sorulan Sorular</h1>
                <FaqItems/>
        </div>
    </section>)
}

