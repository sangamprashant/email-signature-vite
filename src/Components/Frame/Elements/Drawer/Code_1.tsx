import { Button, Form, Input, Select, Tooltip } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { FaAlignCenter, FaAlignLeft, FaAlignRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { ImUndo } from "react-icons/im";
import { RiDeleteBinLine } from "react-icons/ri";
import SignatureCanvas from 'react-signature-canvas';
import { LuUploadCloud } from "react-icons/lu";
import { AppContentImage } from '../../../../assets/images';
import { handleActive } from '../../../../functions';
import { VscSymbolColor } from "react-icons/vsc";
import { colorsList, fontOptionsSignature, SignOffData } from '../../../../Strings/FontsOptions';
import { ImageRender } from '../Templates/ReuseComponents/AppContentMouseEvent';
import UserConfirm from './UserConfirm';
import { useAppContext } from '../../../../context';
import { AppSignatureProps } from '../../../../types/AppPart';
import { toPng } from 'html-to-image';

const Initila:AppSignatureProps = {
    ui: { active: 0 },
    signoff: { family: '', value: '' },
    "sign-as": { value: '', show: true },
    font: { value: 'Dancing Script, cursive', size: 100 },
    alignment: { pos: "start" },
    custom: { color: "#000000", background: "#FFFFFF", image: '' }
}

const Code_1 = () => {
    const { website } = useAppContext()
    const [active, setActive] = useState<number>(0);
    const [signature, setSignature] = useState<SignatureCanvas | null>(null);
    const [image, setImage] = useState<string>("");
    const [signatureHistory, setSignatureHistory] = useState<string[]>([]);
    const [signatureStyle, setSignatureStyle] = useState<AppSignatureProps>(Initila);
    const textRef = useRef<HTMLDivElement | null>(null);
    const [imageSrc, setImageSrc] = useState<string>("");

    const Buttons = [
        { title: "Signature", component: <ImageRender link={AppContentImage["name"]} /> },
        { title: "Signoff", component: <ImageRender link={AppContentImage["kind-regards"]} /> },
        { title: "Draw", component: <ImageRender link={AppContentImage["draw"]} /> },
    ];

    useEffect(() => {
        setSignatureStyle(Initila)
        handleAppCode_1Font("sign-as", "show", active !== 1);
    }, [active]);

    useEffect(() => {
        handleSignatureBackgroundColor()
    }, [signatureStyle.custom.background])

    useEffect(() => {
        setImageToGloble()
    }, [image])

    useEffect(() => {
        onLiveContentChnage();
    }, [signatureStyle, active]);

    useEffect(() => {
        handleAppCode_1Font("custom", "image", imageSrc);
    }, [imageSrc])

    return (
        <>
            <h5 className="text-3xl font-bold text-gray-800 mb-4">SignOff</h5>

            {/* Button Selection Grid */}
            <div className="grid grid-cols-3 gap-4 mb-6">
                {Buttons.map((button, index) => (
                    <Tooltip title={`Choose ${button.title}`} key={index}>
                        <button
                            onClick={() => optionSwitch(index)}
                            className={`w-full h-20 flex justify-center items-center border-2 rounded-lg 
                                        transition-all duration-300
                                        ${active === index ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-blue-300"}`}
                        >
                            {button.component}
                        </button>
                    </Tooltip>
                ))}
            </div>

            {/* Editable Table */}
            <table className="table-auto w-full border-collapse">
                <tbody>
                    {active !== 2 ?
                        <React.Fragment>
                            <tr>
                                <td className="py-2 px-4 font-thin flex items-start">SignOff</td>
                                <td className="py-2 px-4">
                                    <Select
                                        className="bg-gray-50 border text-gray-900 text-sm rounded-lg w-full"
                                        value={signatureStyle.signoff.value || signatureStyle.signoff.family}
                                        onChange={(value) => {
                                            generateImage()
                                            handleAppCode_1Font("signoff", "family", value as string)
                                        }}
                                    >
                                        {SignOffData.map((font) => (
                                            <Select.Option key={font.value} value={font.value} style={{ fontFamily: font.value }}>
                                                {font.label}
                                            </Select.Option>
                                        ))}
                                    </Select>
                                    {signatureStyle.signoff.family === "Custom" && (
                                        <Input
                                            className='mt-2 w-full'
                                            value={signatureStyle.signoff.value}
                                            onChange={(e) => handleAppCode_1Font("signoff", "value", e.target.value)}
                                        />
                                    )}
                                </td>
                            </tr>
                            {signatureStyle['sign-as'].show && (
                                <tr>
                                    <td className="px-4 font-thin">Sign as</td>
                                    <td className="px-4">
                                        <Form.Item
                                            name="signAs"
                                            label="Sign as"
                                            rules={[{ required: true, message: "This field is required" }]}
                                            labelCol={{ span: 24 }}
                                        >
                                            <Input
                                                type="text"
                                                placeholder="Enter name"
                                                className="w-full p-1"
                                                value={signatureStyle['sign-as'].value}
                                                onChange={(e) => { handleAppCode_1Font("sign-as", "value", e.target.value) }}
                                                onBlur={generateImage}
                                                onBlurCapture={generateImage}
                                            />
                                        </Form.Item>
                                    </td>
                                </tr>
                            )}
                            <tr>
                                <td className="py-2 px-4 font-thin">Font</td>
                                <td className="py-2 px-4">
                                    <Select
                                        className="bg-gray-50 border text-gray-900 text-sm rounded-lg w-full"
                                        value={signatureStyle.font.value}
                                        onChange={(e) => {
                                            generateImage()
                                            handleAppCode_1Font("font", "value", e)
                                        }}
                                    >
                                        {fontOptionsSignature.map((font) => (
                                            <Select.Option key={font.value} value={font.value} style={{ fontFamily: font.value }}>
                                                {font.label}
                                            </Select.Option>
                                        ))}
                                    </Select>
                                </td>
                            </tr>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <tr>
                                <td className="py-2 px-4 font-thin flex items-start">Pen color</td>
                                <td className="py-2 px-4">
                                    <div className='flex gap-2 flex-row flex-wrap justify-stretch'>
                                        {colorsList.map((c, i) => (
                                            <div
                                                key={i}
                                                className="h-5 w-5 rounded-full cursor-pointer flex justify-center items-center border-[2px]"
                                                style={{ backgroundColor: c.color }}
                                                onClick={() => handleAppCode_1Font("custom", "color", c.color)}
                                            >
                                                {c.color === signatureStyle.custom.color && <GoDotFill fontSize={18} className='text-gray-400' />}
                                            </div>
                                        ))}
                                        <div>
                                            <label htmlFor="pen-color" className="h-5 w-5 rounded-full cursor-pointer flex justify-center items-center border-[2px]"
                                                style={{ backgroundColor: "white" }}
                                            >
                                                <VscSymbolColor fontSize={18} />
                                            </label>
                                            <input type="color" id='pen-color' className='hidden' value={signatureStyle.custom.color} onChange={(e) => handleAppCode_1Font("custom", "color", e.target.value)} />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 font-thin flex items-start">Background color</td>
                                <td className="py-2 px-4">
                                    <div className='flex gap-2 flex-row flex-wrap justify-stretch'>
                                        {colorsList.map((c, i) => (
                                            <div
                                                key={i}
                                                className="h-5 w-5 rounded-full cursor-pointer flex justify-center items-center border-[2px] border-purple-300"
                                                style={{ backgroundColor: c.color }}
                                                onClick={() => handleAppCode_1Font("custom", "background", c.color)}
                                            >
                                                {c.color === signatureStyle.custom.background && <GoDotFill fontSize={18} className='text-gray-400' />}
                                            </div>
                                        ))}
                                        <div>
                                            <label htmlFor="pen-background-color" className="h-5 w-5 rounded-full cursor-pointer flex justify-center items-center border-[2px]"
                                                style={{ backgroundColor: "white" }}
                                            >
                                                <VscSymbolColor fontSize={18} />
                                            </label>
                                            <input type="color" id='pen-background-color' className='hidden' value={signatureStyle.custom.color} onChange={(e) => handleAppCode_1Font("custom", "background", e.target.value)} />
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td colSpan={2} className='relative'>
                                    <SignatureCanvas
                                        penColor={signatureStyle.custom.color}
                                        backgroundColor={signatureStyle["custom"].background}
                                        ref={(ref) => setSignature(ref)}
                                        canvasProps={{ className: 'sigCanvas border w-full', height: 200 }}
                                        onEnd={handleSignatureEnd}
                                    />
                                    <div className=' mt-2 flex justify-between px-1'>
                                        <div>
                                            <label htmlFor="signature-file" className='text-blue-500 font-bold flex'><LuUploadCloud fontSize={25} />{" "} Upload your own signature</label>
                                            <input type="file" id="signature-file" className="hidden" accept="image/*" onChange={addFromImageToCanvas} />
                                        </div>
                                        <div>
                                            <Button type='link' onClick={signatureUndo} disabled={signatureHistory.length === 0} icon={<ImUndo className='text-blue-500' fontSize={15} />} />
                                            <Button type='link' onClick={signatureClear} icon={<RiDeleteBinLine className='text-red-500' fontSize={15} />} />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </React.Fragment>
                    }
                    <tr>
                        <td className="py-2 px-4 font-thin">Size</td>
                        <td className="py-2 px-4">
                            <input
                                type="range"
                                min={50}
                                max={150}
                                step={50}
                                value={signatureStyle.font.size}
                                className="w-full h-2 bg-blue-100 rounded-lg cursor-pointer"
                                onChange={(e) => handleAppCode_1Font("font", "size", parseInt(e.target.value))}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 font-thin">Alignment</td>
                        <td className='py-2 px-4'>
                            <div className="flex border rounded-md align-middle">
                                <div
                                    className={handleActive(signatureStyle.alignment.pos === "start")}
                                    onClick={() => handleAppCode_1Font("alignment", "pos", "start")}
                                >
                                    <FaAlignLeft fontSize={20} />
                                </div>
                                <div
                                    className={handleActive(signatureStyle.alignment.pos === "center")}
                                    onClick={() => handleAppCode_1Font("alignment", "pos", "center")}
                                >
                                    <FaAlignCenter fontSize={20} className='m-0 p-0' />
                                </div>
                                <div
                                    className={handleActive(signatureStyle.alignment.pos === "end")}
                                    onClick={() => handleAppCode_1Font("alignment", "pos", "end")}
                                >
                                    <FaAlignRight fontSize={20} />
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <UserConfirm onAdd={onAdd} onCancel={onCancel} />
            {renderTextToImage()}
        </>
    );

    function onCancel() {

    }

    function onAdd() {
        website.setAppPartControls((prev) => ({
            ...prev,
            selectData: [...prev.selectData, signatureStyle]
        }))

    }

    function optionSwitch(i: number) {
        handleAppCode_1Font("ui", "active", i)
        setActive(i)
    }

    async function handleAppCode_1Font(
        type: "signoff" | "sign-as" | "font" | "alignment" | "custom" | "ui",
        key: "family" | "value" | "show" | "size" | "pos" | "color" | "background" | "image" | "active",
        val: string | boolean | number
    ) {
        setSignatureStyle((prev) => ({
            ...prev,
            [type]: {
                ...prev[type],
                [key]: val,
            },
        }));
    };

    async function signatureClear() {
        signature?.clear();
        setSignatureHistory([]);
    };

    async function signatureUndo() {
        if (signatureHistory.length > 0) {
            const newHistory = [...signatureHistory];
            newHistory.pop();
            setSignatureHistory(newHistory);

            if (newHistory.length > 0) {
                const previousState = newHistory[newHistory.length - 1];
                signature?.fromDataURL(previousState);
                setImage(previousState)
            } else {
                signature?.clear();
                setImage("")
            }
        }
    };

    async function handleSignatureEnd() {
        if (signature) {
            const canvasState = signature.getTrimmedCanvas().toDataURL("image/png");
            setImage(canvasState)
            setSignatureHistory((prev) => [...prev, canvasState]);
        }
    };

    async function handleSignatureBackgroundColor() {
        if (signature) {
            const ctx = signature.getCanvas().getContext("2d");
            if (ctx) {
                ctx.fillStyle = signatureStyle.custom.background;
                ctx.fillRect(0, 0, signature.getCanvas().width, signature.getCanvas().height);
            }
        }
    }

    async function addFromImageToCanvas(e: React.ChangeEvent<HTMLInputElement>) {
        // fromDataURL(base64String, options): void, writes a base64 image to canvas
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = (event: ProgressEvent<FileReader>) => {
                const base64String = event.target?.result as string;
                signature?.fromDataURL(base64String);
                setImage(base64String);
            };
            reader.readAsDataURL(file);
        }
    };

    async function setImageToGloble() {
        handleAppCode_1Font("custom", "image", image)
    }

    async function onLiveContentChnage() {
        const data: AppSignatureProps = {
            "website-detiles": {
                code: 1,
                time: new Date()
            },
            ...signatureStyle
        }
        website.addDrawersContentOnChange(data)
    }

    function renderTextToImage() {
        if (active < 2) {
            const text = active === 0
                ? signatureStyle['sign-as'].value
                : signatureStyle.signoff.family === "Custom"
                    ? signatureStyle.signoff.value
                    : signatureStyle.signoff.family;
            return <>
                <div ref={textRef} style={{
                    fontFamily: signatureStyle.font.value, fontSize: `30px`, // color: styles.color, 
                    padding: '0px 10px',
                }}
                    className='min-w-min text-nowrap'
                >
                    {text}
                </div>
            </>
        }
        return null;
    }

    async function generateImage() {
        if (textRef.current) {
            const dataUrl = await toPng(textRef.current);
            setImageSrc(dataUrl);
        }
    };

};

export default Code_1;
