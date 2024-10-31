import { useEffect, useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { GiBonsaiTree } from "react-icons/gi";
import { useAppContext } from "../../../../context";
import TableLayout from "../Reuse/Table/Table.Layout";
import TableTd from "../Reuse/Table/TableTd";
import TableTr from "../Reuse/Table/TableTr";
import { Alignment, Color } from "./Reuse";
import FontSize from "./Reuse/FontSize";
import { greenFooterContent } from "../../../../Strings/AppString";
import TextEditor from "../Reuse/Editor/TextEditor";
import { App_GreenFooter } from "../../../../types/AppPart";
import UserConfirm from "./UserConfirm";

const Code_4_GreenFooter = () => {
    const { website } = useAppContext();
    const [icon, setIcon] = useState<number>(1)
    const [color, setColor] = useState("green");
    const [customColor, setCustomColor] = useState<string | undefined>(undefined);
    const [fontSize, setFontSize] = useState(10);
    const [alignment, setAlignment] = useState('start');
    const [customGreenFooter, setCustomGreenFooter] = useState<string>('');
    const [selectedFooter, setSelectedFooter] = useState("Environmental Responsibility");
    const time = new Date();

    const displayedText =
        selectedFooter === 'Custom'
            ? customGreenFooter
            : greenFooterContent[selectedFooter as keyof typeof greenFooterContent];

    useEffect(() => {
        onLiveContentChange();
    }, [displayedText, color, fontSize, alignment, customColor, icon]);

    return (
        <>
            <>
                <h2 className="text-3xl font-bold mb-4">Add a Green footer</h2>
                <p className="text-gray-600 mb-2">Choose a category or add a custom one below:</p>
                {Object.keys(greenFooterContent).map((key) => (
                    <label key={key} className="flex items-center cursor-pointer my-1">
                        <input
                            type="radio"
                            name="disclaimer"
                            value={key}
                            checked={selectedFooter === key}
                            onChange={(e => setSelectedFooter(e.target.value))}
                            className="mr-3 h-5 w-5 text-blue-500 focus:ring-blue-500 cursor-pointer"
                        />
                        <span className="text-gray-800 font-semibold">{key}</span>
                    </label>
                ))}
            </>
            <TextEditor label="Enter your custom quote:" open={selectedFooter === 'Custom'} value={customGreenFooter} onChange={(e) => setCustomGreenFooter(e)} />
            <TableLayout>
                <caption className="text-start text-2xl font-bold mb-4">Footer Style</caption>
                <TableTr>
                    <TableTd thin>Icon</TableTd>
                    <TableTd>
                        <div className="flex space-x-4 items-center">
                            <label className="flex items-center space-x-2">
                                <input type="radio" name="footer-icon" className="mr-2" checked={icon === 1} onChange={() => setIcon(1)} />
                                <FaLeaf className="text-green-700" fontSize={40} />
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="radio" name="footer-icon" className="mr-2" checked={icon === 2} onChange={() => setIcon(2)} />
                                <GiBonsaiTree className="text-green-700" fontSize={40} />
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="radio" name="footer-icon" className="mr-2" checked={icon === 3} onChange={() => setIcon(3)} />
                                <span>None</span>
                            </label>
                        </div>
                    </TableTd>
                </TableTr>
                <FontSize fontSize={fontSize} setFontSize={setFontSize} />
                <Color color={color} setColor={setColor} setCustomColor={setCustomColor} customColor={customColor} />
                <Alignment alignment={alignment} setAlignment={setAlignment} />
            </TableLayout>
            <UserConfirm onAdd={onAdd} onCancel={onCancel} />
        </>
    );

    async function getDisclaimerData(): Promise<App_GreenFooter> {
        return {
            "website-detiles": { code: 4, time: time },
            text: displayedText,
            icon,
            color,
            fontSize,
            alignment,
            customColor
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
        setSelectedFooter("Environmental Responsibility");
        setIcon(1)
        setCustomGreenFooter("");
        setColor("gray");
        setCustomColor("");
        setFontSize(10);
        setAlignment("start");
        website.handleCloseDrawer();
        setCustomColor(undefined)
    }

}

export default Code_4_GreenFooter;
