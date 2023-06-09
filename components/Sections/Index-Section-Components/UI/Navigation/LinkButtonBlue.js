import Link from "next/link";

export const LinkButtonBlue = ({btnName, url}) => {

    return <Link href={url}
                 className={`
                  text-[0.7rem] px-2 py-[0.7rem]
                  xlPhone:text-[0.8rem] xlPhone:px-3 xlPhone:py-[0.7rem]
                  tablet:text-[1rem] tablet:px-5 tablet:py-[1rem]
                  border border-skin-700 bg-skin-700 rounded`}>
        {btnName}
    </Link>
}