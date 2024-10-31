import { useEffect, useState } from "react";
import { useAppContext } from "../../../../../context";
import "./AppContentMouseEvent.css"; // Import the CSS file for animations
import { AppContentImage } from "../../../../../assets/images";
import { appColors, DisclamierString, greenFooterContent, quoteContent } from "../../../../../Strings/AppString";
import { App_GreenFooter, App_Quote, Disclamier } from "../../../../../types/AppPart";
import { FaLeaf } from "react-icons/fa";
import { GiBonsaiTree } from "react-icons/gi";

const AppContentMouseEvent = () => {
    const { website } = useAppContext();
    const [currentMouseInCode, setCurrentMouseInCode] = useState(website.appPartControls.mouseInCode);
    const [contentVisible, setContentVisible] = useState(false);
    const [fadeOutTimer, setFadeOutTimer] = useState<NodeJS.Timeout | null>(null); // Specify the type here

    const renderContent = (code: number) => {
        switch (code) {
            // case 1: return <StyledSignOff_1 />;
            case 2: return <DisclaimerContent_2 text={DisclamierString["Confidentiality"]} />;
            case 3: return <QuoteContent_3 text={quoteContent["Inspiration"]} />;
            case 4: return <GreenFooterContent_4 text={greenFooterContent["Environmental Responsibility"]} />;
            case 5: return <h1>Video Content</h1>;
            default: return null; // Return null if there's no valid mouseInCode
        }
    };

    useEffect(() => {
        // Set the new mouseInCode
        if (currentMouseInCode !== website.appPartControls.mouseInCode) {
            setCurrentMouseInCode(website.appPartControls.mouseInCode);
            setContentVisible(true);

            if (fadeOutTimer) {
                clearTimeout(fadeOutTimer);
            }
            const newTimer = setTimeout(() => {
                setContentVisible(false);
            }, 5000);

            setFadeOutTimer(newTimer);
        }

        return () => {
            if (fadeOutTimer) {
                clearTimeout(fadeOutTimer);
            }
        };
    }, [website.appPartControls.mouseInCode]);

    return (
        <div className={`content-container ${contentVisible ? 'fade-in' : 'fade-out'}`}>
            {renderContent(currentMouseInCode)}
        </div>
    );
};

export default AppContentMouseEvent;
// ---------------1-18----------

export const StyledSignOff_1 = () => {
    return <div className="">
        <ImageRender link={AppContentImage["name"]} />
    </div>;
}

interface DisclaimerContent_2_Props {
    text: string
}

export const DisclaimerContent_2 = ({ text }: DisclaimerContent_2_Props) => {
    const { website } = useAppContext();
    const { appPartControlsLive } = website;
    const websiteDetailsCode = appPartControlsLive as Disclamier;

    const colorClass = websiteDetailsCode?.color in appColors ? appColors[websiteDetailsCode?.color] : "text-gray-600";
    const line = websiteDetailsCode?.line || false
    const alignment = websiteDetailsCode?.alignment || "start"
    const fontSize = websiteDetailsCode?.fontSize || 10
    const color = websiteDetailsCode?.customColor || undefined

    return (
        <div className="mt-2">
            {line && < hr className="mb-2" />}
            <div
                className={`${colorClass} text-${alignment}`}
                style={{
                    fontSize: `${fontSize}px`,
                    color: color
                }}
                dangerouslySetInnerHTML={{ __html: text || 'No disclaimer selected' }}
            />
        </div>
    );
}

interface QuoteContent_3_Props {
    text: string
}

export const QuoteContent_3 = ({ text }: QuoteContent_3_Props) => {
    const { website } = useAppContext();
    const { appPartControlsLive } = website;
    const websiteDetailsCode = appPartControlsLive as App_Quote;
    const colorClass = websiteDetailsCode?.color in appColors ? appColors[websiteDetailsCode?.color] : "text-gray-600";
    const alignment = websiteDetailsCode?.alignment || "start"
    const fontSize = websiteDetailsCode?.fontSize || 10
    const color = websiteDetailsCode?.customColor || undefined
    return <div className="mt-2">
        <div
            className={`${colorClass} text-${alignment}`}
            style={{
                fontSize: `${fontSize}px`,
                color: color
            }}
            dangerouslySetInnerHTML={{ __html: text || 'No disclaimer selected' }}
        />
    </div>
}

interface GreenFooterContent_4_Props {
    text: string
}

export const GreenFooterContent_4 = ({ text }: GreenFooterContent_4_Props) => {
    const { website } = useAppContext();
    const { appPartControlsLive } = website;
    const websiteDetailsCode = appPartControlsLive as App_GreenFooter;
    const colorClass = websiteDetailsCode?.color in appColors ? appColors[websiteDetailsCode?.color] : "text-green-600";
    const alignment = websiteDetailsCode?.alignment || "start"
    const fontSize = websiteDetailsCode?.fontSize || 10
    const color = websiteDetailsCode?.customColor || undefined
    const icon = websiteDetailsCode?.icon || 1

    return <div className={`flex mt-2 items-center justify-${alignment}`}>
        {icon < 3 && <div className="mx-2 border-r px-2">
            {icon === 2 ? <GiBonsaiTree className="text-green-700" fontSize={40} /> :
                <FaLeaf className="text-green-700" fontSize={40} />}
        </div>}
        <div
            className={`${colorClass}`}
            style={{
                fontSize: `${fontSize}px`,
                color: color
            }}
            dangerouslySetInnerHTML={{ __html: text || 'No disclaimer selected' }}
        />
    </div>
}


interface ImageRender {
    link: string;
}

// ------------------------
export const ImageRender = ({ link }: ImageRender) => {
    return <>
        <img src={link} alt="" height="100%" width="100%" style={{
            maxHeight: "150px",
            maxWidth: "150px",
        }} />
    </>
}
