import {IndexNavigation} from "../components/Sections/Index-Section-Components/IndexNavigation";
import {IndexLogin} from "../components/Sections/Index-Section-Components/IndexLogin";
import {OnlyOnDisneyPlus} from "../components/Sections/Index-Section-Components/OnlyOnDisneyPlus";
import {WatchAsYouWish} from "../components/Sections/Index-Section-Components/WatchAsYouWish";
import {FrequentlyAskedQuestions} from "../components/Sections/Index-Section-Components/FrequentlyAskedQuestions";
import {OnYourFavoriteDevices} from "../components/Sections/Index-Section-Components/OnYourFavoriteDevices";
import {IndexFooter} from "../components/Sections/Index-Section-Components/IndexFooter";

export default function Home() {
    return (<>
            <IndexNavigation/>
            <IndexLogin/>
            {/*<OnlyOnDisneyPlus/>*/}
            {/*<WatchAsYouWish/>*/}
            {/*<FrequentlyAskedQuestions/>*/}
            {/*<OnYourFavoriteDevices/>*/}
            {/*<IndexFooter/>*/}
        </>
    )
}
