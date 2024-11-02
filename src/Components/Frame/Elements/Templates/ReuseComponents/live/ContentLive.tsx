import { useAppContext } from "../../../../../../context"
import { App_GreenFooter, App_Quote, Disclamier } from "../../../../../../types/AppPart";
import { DisclaimerContent_2, GreenFooterContent_4, QuoteContent_3, VideoContent_5 } from "../AppContentMouseEvent";

const ContentLive = () => {
    const { website } = useAppContext();
    const { appPartControlsLive } = website;
    const websiteDetailsCode = appPartControlsLive?.["website-detiles"]?.code;

    if (!websiteDetailsCode || websiteDetailsCode <= 1) return null;

    const renderLiveDetails = () => {
        switch (websiteDetailsCode) {
            case 2: return <DisclaimerContent_2 text={(appPartControlsLive as Disclamier).text} />
            case 3: return <QuoteContent_3 text={(appPartControlsLive as App_Quote).text} />
            case 4: return <GreenFooterContent_4 text={(appPartControlsLive as App_GreenFooter).text} />
            case 5: return <VideoContent_5 />
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