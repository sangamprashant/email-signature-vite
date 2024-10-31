import { useEffect, useState } from "react";
import { useAppContext } from "../../../../context";
import { quoteContent } from "../../../../Strings/AppString";
import { App_Quote } from "../../../../types/AppPart";
import TextEditor from "../Reuse/Editor/TextEditor";
import TableLayout from "../Reuse/Table/Table.Layout";
import TableTd from "../Reuse/Table/TableTd";
import TableTr from "../Reuse/Table/TableTr";
import { Alignment, Color, FontSize } from "./Reuse";
import UserConfirm from "./UserConfirm";

const Code_3_Quote = () => {
    const { website } = useAppContext();
    const [selectedQuote, setSelectedQuote] = useState("Inspiration");
    const [color, setColor] = useState("gray");
    const [customColor, setCustomColor] = useState<string | undefined>(undefined);
    const [fontSize, setFontSize] = useState(10);
    const [alignment, setAlignment] = useState('start');
    const [customQuote, setCustomQuote] = useState<string>('');
    const time = new Date();

    const displayedText =
        selectedQuote === 'Custom'
            ? customQuote
            : quoteContent[selectedQuote as keyof typeof quoteContent];

    useEffect(() => {
        onLiveContentChange();
    }, [displayedText, color, fontSize, alignment, customColor]);

    return (
        <>
            <h2 className="text-3xl font-bold mb-4">Add a Quote</h2>
            <p className="text-gray-600 mb-2">Choose a category or add a custom one below:</p>
            <TableLayout>
                <TableTr>
                    <TableTd>
                        {Object.keys(quoteContent).map((key, i) => (
                            <>
                                {i % 2 === 0 &&
                                    <label key={key} className="flex items-center cursor-pointer my-1">
                                        <input
                                            type="radio"
                                            name="disclaimer"
                                            value={key}
                                            checked={selectedQuote === key}
                                            onChange={(e) => setSelectedQuote(e.target.value)}
                                            className="mr-3 h-5 w-5 text-blue-500 focus:ring-blue-500 cursor-pointer"
                                        />
                                        <span className="text-gray-800 font-semibold">{key}</span>
                                    </label>
                                }
                            </>
                        ))}
                    </TableTd>
                    <TableTd>
                        {Object.keys(quoteContent).map((key, i) => (
                            <>
                                {i % 2 === 1 &&
                                    <label key={key} className="flex items-center cursor-pointer my-1">
                                        <input
                                            type="radio"
                                            name="disclaimer"
                                            value={key}
                                            checked={selectedQuote === key}
                                            onChange={(e) => setSelectedQuote(e.target.value)}
                                            className="mr-3 h-5 w-5 text-blue-500 focus:ring-blue-500 cursor-pointer"
                                        />
                                        <span className="text-gray-800 font-semibold">{key}</span>
                                    </label>
                                }
                            </>
                        ))}
                    </TableTd>
                </TableTr>
            </TableLayout>
            <TextEditor label="Enter your custom quote:" open={selectedQuote === 'Custom'} value={customQuote} onChange={(e) => setCustomQuote(e)} />
            <TableLayout>
                <caption className="text-2xl font-bold my-4" >Quote style</caption>
                <Color color={color} setColor={setColor} setCustomColor={setCustomColor} customColor={customColor} />
                <FontSize fontSize={fontSize} setFontSize={setFontSize} />
                <Alignment alignment={alignment} setAlignment={setAlignment} />
            </TableLayout>
            <UserConfirm onAdd={onAdd} onCancel={onCancel} />
        </>
    );

    async function getDisclaimerData(): Promise<App_Quote> {
        return {
            "website-detiles": { code: 3, time: time },
            text: displayedText,
            color: color,
            fontSize: fontSize,
            alignment: alignment,
            customColor: customColor
        };
    }

    async function onLiveContentChange() {
        const data = await getDisclaimerData();
        website.addDrawersContentOnChange(data);
    }

    async function onAdd() {
        const data = await getDisclaimerData();
        website.addDrawersContent(data);
        onCancel();
    }

    async function onCancel() {
        setSelectedQuote("Inspiration");
        setCustomQuote("");
        setColor("gray");
        setCustomColor("");
        setFontSize(10);
        setAlignment("start");
        website.handleCloseDrawer();
        setCustomColor(undefined)
    }
}

export default Code_3_Quote;
