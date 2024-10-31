import { Switch } from 'antd';
import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../../../context';
import { DisclamierString } from '../../../../Strings/AppString';
import { Disclamier } from '../../../../types/AppPart';
import TextEditor from '../Reuse/Editor/TextEditor';
import TableLayout from '../Reuse/Table/Table.Layout';
import TableTd from '../Reuse/Table/TableTd';
import TableTr from '../Reuse/Table/TableTr';
import UserConfirm from './UserConfirm';
import { Alignment, Color, FontSize } from './Reuse';

export const colorsDisclamier = [
    { name: "red", class: "text-red-600" },
    { name: "blue", class: "text-blue-600" },
    { name: "gray", class: "text-gray-600" },
    { name: "green", class: "text-green-600" },
    { name: "purple", class: "text-purple-600" },
    { name: "yellow", class: "text-yellow-600" },
];


const Code_2_Disclaimer = () => {
    const { website } = useAppContext();
    const [selectedDisclaimer, setSelectedDisclaimer] = useState<string>('Confidentiality');
    const [customDisclaimer, setCustomDisclaimer] = useState<string>('');
    const [color, setColor] = useState("gray");
    const [fontSize, setFontSize] = useState(10);
    const [alignment, setAlignment] = useState('start');
    const [line, setLine] = useState(true);
    const [customColor, setCustomColor] = useState<string | undefined>(undefined);

    const time = new Date();

    const handleDisclaimerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDisclaimer(e.target.value);
    };

    const handleCustomChange = (content: string) => {
        setCustomDisclaimer(content);
    };

    const displayedText =
        selectedDisclaimer === 'Custom'
            ? customDisclaimer
            : DisclamierString[selectedDisclaimer as keyof typeof DisclamierString];

    useEffect(() => {
        onLiveContentChange();
    }, [displayedText, color, fontSize, alignment, line, customColor]);

    return (
        <>
            <h2 className="text-3xl font-bold mb-4">Add a Disclaimer</h2>
            <p className="text-gray-600 mb-6">Choose a disclaimer type or add a custom one below:</p>
            <div className="space-y-3">
                {Object.keys(DisclamierString).map((key) => (
                    <label key={key} className="flex items-center cursor-pointer">
                        <input
                            type="radio"
                            name="disclaimer"
                            value={key}
                            checked={selectedDisclaimer === key}
                            onChange={handleDisclaimerChange}
                            className="mr-3 h-5 w-5 text-blue-500 focus:ring-blue-500 cursor-pointer"
                        />
                        <span className="text-gray-800">{key}</span>
                    </label>
                ))}
            </div>

            <TextEditor label='Enter your custom disclaimer:' value={customDisclaimer} open={selectedDisclaimer === 'Custom'} onChange={handleCustomChange} />

            <>
                <h2 className='text-2xl font-bold my-4'>Disclaimer style</h2>
                <TableLayout>
                    <Color color={color} setColor={setColor} setCustomColor={setCustomColor} customColor={customColor} />
                    <FontSize fontSize={fontSize} setFontSize={setFontSize} />
                    <Alignment alignment={alignment} setAlignment={setAlignment} />
                    <TableTr>
                        <TableTd thin>Decorative Line</TableTd>
                        <TableTd>
                            <Switch defaultChecked={line} onChange={(e) => setLine(e)} />
                        </TableTd>
                    </TableTr>
                </TableLayout>
                <p className='text-gray-400 text-[10px] my-2'>SignWave assumes no responsibility for any consequence of using these disclaimers; these are for informational purposes and are not intended to constitute legal advice.</p>
            </>
            <UserConfirm onAdd={onAdd} onCancel={onCancel} />
        </>
    );

    async function getDisclaimerData(): Promise<Disclamier> {
        return {
            "website-detiles": { code: 2, time: time },
            text: displayedText,
            color: color,
            fontSize: fontSize,
            alignment: alignment,
            line: line,
            customColor: customColor,
        };
    }

    async function onLiveContentChange() {
        const data = await getDisclaimerData();
        website.addDrawersContentOnChange(data);
    }

    async function onAdd() {
        const data = await getDisclaimerData();
        website.addDrawersContent(data);
        onCancel()
    }

    async function onCancel() {
        setSelectedDisclaimer("Confidentiality");
        setCustomDisclaimer("");
        setColor("gray");
        setFontSize(10);
        setAlignment("start");
        setLine(true);
        website.handleCloseDrawer()
    }
};

export default Code_2_Disclaimer;
