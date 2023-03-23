import Link from "next/link";

export const LinkButtonTransparent = ({btnName, url}) => {

    return <div>
        <Link href={url}
              className={`
              text-[0.7rem] px-2 py-[0.7rem]
              xlPhone:text-[0.8rem] xlPhone:px-3 xlPhone:py-[0.7rem]
              laptop:text-[1rem] laptop:px-5 laptop:py-[1rem]
              border border-skin-50 bg-skin-body-1000/80 rounded hover:bg-skin-body-50 hover:text-skin-font-50 duration duration-300`}>
            {btnName}
        </Link>
    </div>
}