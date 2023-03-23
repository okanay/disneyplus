export const RegisterForm = () => {

    return (
        <form className={'flex flex-col sm:flex-row gap-2 sm:gap-0 justify-start items-center w-full h-fit my-4 text-[16px]'}>
            <div className={'w-full'}>
                <input
                    id={'index-email-input'}
                    placeholder={"E-posta"}
                    type="email"
                    itemType={'email'}
                    className={'rounded-l rounded-r sm:rounded-l sm:rounded-r-none px-4 h-12 sm:h-14 w-full bg-gray-700 border border-gray-700 focus:border-skin-body-400 focus:outline-none'}/>
                <label
                    htmlFor={'index-email-input'}/>
            </div>
            <div className={'rounded-l rounded-r sm:rounded-l-none sm:rounded-r bg-skin-700 hover:bg-skin-600 transition-colors duration-300 w-full sm:w-64 h-12 sm:h-14 flex flex-row justify-center'}>
                <button type={'button'} className={'w-full'}>
                    DEVAM ET
                </button>
            </div>
        </form>
    )
}