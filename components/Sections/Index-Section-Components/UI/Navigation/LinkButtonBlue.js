import Link from "next/link";

export const LinkButtonBlue = ({btnName, url}) => {

    return <Link href={url}
                 className={'border border-skin-700 bg-skin-700 rounded px-5 py-[0.65rem]'}>
        {btnName}
    </Link>
}