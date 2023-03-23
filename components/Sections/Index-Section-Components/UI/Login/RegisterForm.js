export const RegisterForm = () => {

    return (
        <form className={'flex flex-col sm:flex-row gap-2 sm:gap-0 justify-start items-center w-full h-fit my-4 text-[16px]'}>
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
            <div className={'bg-skin-700 hover:bg-skin-600 transition-colors duration-300 w-full sm:w-64 h-12 flex flex-row justify-center'}>
                <button type={'button'} className={'w-full'}>
                    DEVAM ET
                </button>
            </div>
        </form>
    )
}