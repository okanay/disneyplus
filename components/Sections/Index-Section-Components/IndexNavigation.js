import {DisneySVG} from "../../SVGs/DisneySVG";
import {useGetScrollYValue} from "../../../src/customHooks/useGetScrollYValue";
import {NavigationTemplate} from "./UI/Navigation/NavigationTemplate";
import {LinkButtonTransparent} from "./UI/Navigation/LinkButtonTransparent";
import {LinkButtonBlue} from "./UI/Navigation/LinkButtonBlue";
import {NavigationHiddenItem} from "./UI/Navigation/NavigationHiddenItem";

export const IndexNavigation = () => {

    const scrollLatest = useGetScrollYValue()
    const visibleScrollYValue = 100

    return <NavigationTemplate scrollLatest={scrollLatest} blackBgVisibleValue={visibleScrollYValue}>
        <ul className={'flex flex-row justify-between items-center min-h-[50px] w-full h-full my-2 gap-4'}>
            <NavigationHiddenItem scrollLatest={scrollLatest} blockValue={visibleScrollYValue}>
                <li className={'h-full'}>
                    <DisneySVG className={"w-[80px] h-[44px]"}/>
                </li>
            </NavigationHiddenItem>
            <li className={'w-full h-full flex flex-row justify-end items-center gap-3 text-base tablet:text-lg text-skin-font-1000'}>
                <NavigationHiddenItem scrollLatest={scrollLatest} blockValue={visibleScrollYValue}>
                    <LinkButtonBlue url={"/"} btnName={"ŞİMDİ ÜYE OL"}/>
                </NavigationHiddenItem>
                <LinkButtonTransparent url={"/"} btnName={"OTURUM AÇ"}/>
            </li>
        </ul>
    </NavigationTemplate>
}
