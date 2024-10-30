import { useAppContext } from "../../../../../../context"
import { Disclamier } from "../../../../../../types/AppPart";
import { DisclaimerContent_2 } from "../AppContentMouseEvent";

const ContentLive = () => {
    const { website } = useAppContext();
    const { appPartControlsLive } = website;
    const websiteDetailsCode = appPartControlsLive?.["website-detiles"]?.code;

    if (!websiteDetailsCode || websiteDetailsCode <= 1) return null;



    const renderLiveDetails = () => {
        switch (websiteDetailsCode) {
            case 2: return <DisclaimerContent_2 text={(appPartControlsLive as Disclamier).text} />
            case 3: return <Three_Quote />
            default: "error contact developers...."
        }
    }

    return (
        <>
            {renderLiveDetails()}
        </>
    );
}

export default ContentLive;


// ===============================================================================================
//live render component fron 2-18
// ===============================================================================================

const Two_Disclamier = () => {
    return <>
        <h1>Two_Disclamier</h1>
        Lorem ipsum dolor sit, amet con
    </>
}

const Three_Quote = () => {
    return <>
        <h1>Three_Quote</h1>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo consequatur pariatur iusto, eum totam impedit ea dicta culpa quis, minima ex cum magnam delectus, facere eos. Eos labore animi voluptates.
    </>
}