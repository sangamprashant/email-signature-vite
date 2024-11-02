import { useEffect, useState } from "react";
import TableLayout from "../Reuse/Table/Table.Layout";
import TableTd from "../Reuse/Table/TableTd";
import TableTr from "../Reuse/Table/TableTr";
import { Alignment, Color, FontSize } from "./Reuse";
import { Form, Input } from "antd";
import { App_VideoContent } from "../../../../types/AppPart";
import { useAppContext } from "../../../../context";

const Code_05_Youtube = () => {
    const { website } = useAppContext()
    const [videoUrl, setVideoUrl] = useState("");
    const [title, setTitle] = useState("");
    const [color, setColor] = useState("");
    const [customColor, setCustomColor] = useState<string | undefined>(undefined);
    const [fontSize, setFontSize] = useState(10);
    const [alignment, setAlignment] = useState("start");
    const [isCompact, setIsCompact] = useState<1 | 2>(1);

    const time = new Date();


    useEffect(() => {
        onLiveContentChange();
    }, [title, color, fontSize, alignment, customColor, videoUrl, isCompact]);


    return (
        <>
            <h2 className="text-3xl font-bold mb-4">YouTube Video</h2>
            <p className="text-gray-600 mb-2">Enter your video URL & title</p>

            <div>
                <Form.Item label="YouTube video / playlist URL:" layout="vertical">
                    <Input value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} />
                </Form.Item>
                <Form.Item label="Video / Playlist title:" layout="vertical">
                    <Input value={title} onChange={(e) => setTitle(e.target.value)} />
                </Form.Item>
            </div>

            <TableLayout>
                <caption className="text-start text-2xl font-bold mb-4">Style</caption>
                <TableTr>
                    <TableTd thin>Style</TableTd>
                    <TableTd>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    name="style"
                                    checked={isCompact === 1}
                                    onChange={() => setIsCompact(1)}
                                />{" "}
                                Vertical
                            </label>
                            <label className="ml-4">
                                <input
                                    type="radio"
                                    name="style"
                                    checked={isCompact === 2}
                                    onChange={() => setIsCompact(2)}
                                />{" "}
                                Horizontal
                            </label>
                        </div>
                    </TableTd>
                </TableTr>
                <Color color={color} setColor={setColor} setCustomColor={setCustomColor} customColor={customColor} />
                <FontSize fontSize={fontSize} setFontSize={setFontSize} />
                <Alignment alignment={alignment} setAlignment={setAlignment} />
            </TableLayout>
        </>
    );

    async function getDisclaimerData(): Promise<App_VideoContent> {
        return {
            "website-detiles": { code: 5, time: time },
            text: title,
            url: videoUrl,
            style: isCompact,
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
};

export default Code_05_Youtube;
