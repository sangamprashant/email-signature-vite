import { useEffect, useState } from "react";
import { useAppContext } from "../../../../../context";
import "./AppContentMouseEvent.css"; // Import the CSS file for animations
import { AppContentImage } from "../../../../../assets/images";
import { DisclamierString } from "../../../../../Strings/AppString";

const AppContentMouseEvent = () => {
    const { website } = useAppContext();
    const [currentMouseInCode, setCurrentMouseInCode] = useState(website.appPartControls.mouseInCode);
    const [contentVisible, setContentVisible] = useState(false);
    const [fadeOutTimer, setFadeOutTimer] = useState<NodeJS.Timeout | null>(null); // Specify the type here

    const renderContent = (code: number) => {
        switch (code) {
            // case 1: return <StyledSignOff_1 />;
            case 2: return <DisclaimerContent_2 text={DisclamierString["Confidentiality"]} />;
            case 3: return <QuoteContent_3 />;
            case 4: return <GreenFooterContent_4 />;
            case 5: return <h1>Video Content</h1>;
            case 6: return <h1>Instagram Gallery Content</h1>;
            case 7: return <h1>Image Gallery Content</h1>;
            case 8: return <h1>Additional Feature 1 Content</h1>;
            case 9: return <h1>Additional Feature 2 Content</h1>;
            case 10: return <h1>Additional Feature 3 Content</h1>;
            case 11: return <h1>Additional Feature 4 Content</h1>;
            case 12: return <h1>Additional Feature 5 Content</h1>;
            case 13: return <h1>Additional Feature 6 Content</h1>;
            case 14: return <h1>Additional Feature 7 Content</h1>;
            case 15: return <h1>Additional Feature 8 Content</h1>;
            case 16: return <h1>Additional Feature 9 Content</h1>;
            case 17: return <h1>Additional Feature 10 Content</h1>;
            case 18: return <h1>Additional Feature 11 Content</h1>;
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
    return <div className="text-[10px] text-gray-500" dangerouslySetInnerHTML={{ __html: text || 'No disclaimer selected' }} />
}

const QuoteContent_3 = () => {
    return <div className="quote-content-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro officiis fugit, ex necessitatibus aliquid laudantium veniam commodi. Veritatis, consequatur facilis repellendus similique nesciunt, inventore unde quia incidunt odit impedit explicabo?</div>
}

const GreenFooterContent_4 = () => {
    return <div className="green-footer-content-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas minima sit magni beatae facere error doloribus, dicta unde nobis, nam omnis? Autem modi reprehenderit ab praesentium omnis nesciunt saepe sit!</div>
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
