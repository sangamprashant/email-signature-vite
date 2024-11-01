import { useState } from "react";
import TableLayout from "../Reuse/Table/Table.Layout";
import TableTd from "../Reuse/Table/TableTd";
import TableTr from "../Reuse/Table/TableTr";
import { Alignment, Color, FontSize } from "./Reuse";
import { Form, Input } from "antd";

const Code_05_Youtube = () => {
    const [videoUrl, setVideoUrl] = useState("");
    const [title, setTitle] = useState("");
    const [color, setColor] = useState("");
    const [customColor, setCustomColor] = useState<string | undefined>(undefined);
    const [fontSize, setFontSize] = useState(10);
    const [alignment, setAlignment] = useState("start");
    const [isCompact, setIsCompact] = useState(true);


    const getEmbedUrl = (url: string) => {

        const standardMatch = url.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/);
        if (standardMatch) {
            return `https://www.youtube.com/embed/${standardMatch[1]}`;
        }

        const shortMatch = url.match(/(?:https?:\/\/)?youtu\.be\/([a-zA-Z0-9_-]+)/);
        if (shortMatch) {
            return `https://www.youtube.com/embed/${shortMatch[1]}`;
        }

        return "";
    };


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
                                    checked={isCompact}
                                    onChange={() => setIsCompact(true)}
                                />{" "}
                                Compact
                            </label>
                            <label className="ml-4">
                                <input
                                    type="radio"
                                    name="style"
                                    checked={!isCompact}
                                    onChange={() => setIsCompact(false)}
                                />{" "}
                                Expanded
                            </label>
                        </div>
                    </TableTd>
                </TableTr>
                <Color color={color} setColor={setColor} setCustomColor={setCustomColor} customColor={customColor} />
                <FontSize fontSize={fontSize} setFontSize={setFontSize} />
                <Alignment alignment={alignment} setAlignment={setAlignment} />
            </TableLayout>

            {/* Preview */}
            <div className="mt-8 p-4 border rounded" style={{ color: customColor || color, fontSize: `${fontSize}px` }}>
                <h3 className="text-xl font-semibold mb-2">{title || "YouTube Video Title"}</h3>
                <div>
                    <iframe
                        width={isCompact ? "300" : "560"}
                        height={isCompact ? "150" : "315"}
                        src={getEmbedUrl(videoUrl) || "https://www.youtube.com/embed/default"}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </>
    );
};

export default Code_05_Youtube;
