import { Form, Input, Select } from 'antd';
import { useState } from 'react';
import { FaAlignLeft, FaAlignRight, FaAlignCenter } from "react-icons/fa"; // Consolidated imports
import { AppContentImage } from '../../../../assets/images';
import { fontOptionsSignature, SignOffData } from '../../../../Strings/FontsOptions';
import { ImageRender } from '../Templates/ReuseComponents/AppContentMouseEvent';
import { handleActive } from '../../../../functions';

const Code_1 = () => {
    const [active, setActive] = useState(0);
    const [design, setDesign] = useState({
        signatureStyle: { font: '', lineSpacing: 1 },
        images: { shape: 'square' },
    });
    const [alignment, setAlignment] = useState("fill"); // State for alignment

    const Buttons = [
        { title: "Signature", component: <ImageRender link={AppContentImage["name"]} /> },
        { title: "Signoff", component: <ImageRender link={AppContentImage["kind-regards"]} /> },
        { title: "Draw", component: <ImageRender link={AppContentImage["draw"]} /> },
    ];

    const handleDesign = (key: any, value: string | number) => {
        setDesign((prev) => ({
            ...prev,
            signatureStyle: { ...prev.signatureStyle, [key]: value },
        }));
    };

    return (
        <div className="">
            <h5 className="text-3xl font-bold text-gray-800 mb-4">SignOff</h5>

            {/* Button Selection Grid */}
            <div className="grid grid-cols-3 gap-4 mb-6">
                {Buttons.map((button, index) => (
                    <div key={index} className="flex flex-col">
                        <p className="text-gray-600 text-sm font-medium mb-1">{button.title}</p>
                        <button
                            onClick={() => setActive(index)}
                            className={`w-full h-20 flex justify-center items-center border-2 rounded-lg 
                                        transition-all duration-300
                                        ${active === index ? "border-blue-500" : "border-gray-200 hover:border-blue-300"}`}
                        >
                            {button.component}
                        </button>
                    </div>
                ))}
            </div>

            {/* Editable Table */}
            <table className="table-auto w-full border-collapse">
                <tbody>
                    <tr>
                        <td className="py-2 px-4 font-thin">SignOff</td>
                        <td className="py-2 px-4">
                            <Select
                                className="bg-gray-50 border text-gray-900 text-sm rounded-lg w-full"
                                value={design.signatureStyle.font}
                                onChange={(value) => handleDesign("font", value)}
                            >
                                {SignOffData.map((font) => (
                                    <Select.Option key={font.value} value={font.value} style={{ fontFamily: font.value }}>
                                        {font.label}
                                    </Select.Option>
                                ))}
                            </Select>
                        </td>
                    </tr>
                    <tr>
                        <td className=" px-4 font-thin">Sign as</td>
                        <td className=" px-4">
                            <Form.Item
                                name="signAs"
                                label="Sign as"
                                required
                                rules={[{ required: true, message: "This field is required" }]}
                                labelCol={{ span: 24 }} // Optional, adjusts label positioning if needed
                            >
                                <Input
                                    type="text"
                                    placeholder="Enter name"
                                    className="w-full p-1"
                                />
                            </Form.Item>

                        </td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 font-thin">Font</td>
                        <td className="py-2 px-4">
                            <Select
                                className="bg-gray-50 border text-gray-900 text-sm rounded-lg w-full"
                                value={design.signatureStyle.font}
                                onChange={(value) => handleDesign("font", value)}
                            >
                                {fontOptionsSignature.map((font) => (
                                    <Select.Option key={font.value} value={font.value} style={{ fontFamily: font.value }}>
                                        {font.label}
                                    </Select.Option>
                                ))}
                            </Select>
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 font-thin">Size</td>
                        <td className="py-2 px-4">
                            <input
                                type="range"
                                min={1}
                                max={3}
                                step={0.1}
                                value={design.signatureStyle.lineSpacing}
                                onChange={(e) => handleDesign("lineSpacing", parseFloat(e.target.value))}
                                className="w-full h-2 bg-blue-100 rounded-lg cursor-pointer"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 font-thin">Alignment</td>
                        <td className='py-2 px-4'>
                            <div className="flex border rounded-md align-middle">
                                <div className={handleActive(alignment === "fill")} onClick={() => { setAlignment("fill"); handleDesign("file", "fill"); }}>
                                    <FaAlignLeft fontSize={20} />
                                </div>
                                <div className={handleActive(alignment === "outline")} onClick={() => { setAlignment("outline"); handleDesign("file", "outline"); }}>
                                    <FaAlignCenter fontSize={20} className='m-0 p-0' />
                                </div>
                                <div className={handleActive(alignment === "none")} onClick={() => { setAlignment("none"); handleDesign("file", "none"); }}>
                                    <FaAlignRight fontSize={20} />
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Code_1;
