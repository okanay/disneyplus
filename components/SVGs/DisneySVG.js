import Image from "next/image";
import disneySVG from "../../public/disney.svg"
export const DisneySVG = ({className}) => {

    return <Image src={disneySVG} alt={"Disney Origin Logo"} priority className={className}/>
}