import Link from "next/link";

export const LinkButtonTransparent = ({btnName, url}) => {

    return <div>
        <Link href={url}
              className={'border border-skin-50 bg-skin-body-1000 rounded px-5 py-[0.65rem] hover:bg-skin-body-50 hover:text-skin-font-50 duration duration-300'}>
            {btnName}
        </Link>
    </div>
}