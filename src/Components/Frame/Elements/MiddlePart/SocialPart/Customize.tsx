import AlignHorizontalCenterOutlinedIcon from '@mui/icons-material/AlignHorizontalCenterOutlined';
import AlignVerticalBottomOutlinedIcon from '@mui/icons-material/AlignVerticalBottomOutlined';
import AlignVerticalTopOutlinedIcon from '@mui/icons-material/AlignVerticalTopOutlined';
import CropDinOutlinedIcon from '@mui/icons-material/CropDinOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import SquareIcon from '@mui/icons-material/Square';
import SquareOutlinedIcon from '@mui/icons-material/SquareOutlined';
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
import { Input, Select, Switch } from 'antd';
import { AiOutlineFacebook } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import fontOptions from "../../../../../Strings/FontsOptions";

import { CiUndo } from "react-icons/ci";
import { useAppContext } from '../../../../../context';
import { decorativeLineOptions, handleActive } from '../../../../../functions';

const Customize = () => {
    return (
        <div className='text-[13px]'>
            <SignatureStyle />
            <Image />
            <Details />
            <SocialIcons />
            <DecorativeLine />
        </div>
    )
}

const SignatureStyle = () => {
    const { design } = useAppContext()
    return (
        <>
            <div className="overflow-y-auto scrollbar-thin mb-5">
                <table className='table-auto w-full border-collapse'>
                    <caption className='text-left font-bold text-sm'>Signature Style</caption>
                    <tbody>
                        <tr className="border-b">
                            <td className='py-2 px-4 font-thin'>Font</td>
                            <td className='py-2 px-4'>
                                <Select
                                    className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full"
                                    value={design.design.signatureStyle.font}
                                    onChange={(e) => handleDesign("font", e)}
                                >
                                    {fontOptions.map((font) => (
                                        <Select.Option key={font.value} value={font.value} className={font.value}>
                                            {font.name}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </td>
                        </tr>

                        <tr className="border-b">
                            <td className='py-2 px-4 font-thin size-1/2'>Tempate Color</td>
                            <td className='py-2 px-4 size-1/2'>
                                <div className="flex gap-2 justify-between">
                                    <Input
                                        type="color"
                                        className="w-12 h-12 border border-gray-300 rounded-lg px-1"
                                        value={design.design.signatureStyle.tempColor}
                                        onChange={(e) => handleDesign("tempColor", e.target.value)}
                                    />
                                    <Input type="text" className=" w-24 border border-gray-300 rounded-lg px-1" value={design.design.signatureStyle.tempColor}
                                        onChange={(e) => handleDesign("tempColor", e.target.value)} />
                                </div>
                            </td>
                        </tr>

                        <tr className="border-b">
                            <td className='py-2 px-4 font-thin'>Line Spacing</td>
                            <td className='py-2 px-4'>
                                <p className='text-end m-0 text-gray-400'>{design.design.signatureStyle.lineSpacing}</p>
                                <input
                                    type="range"
                                    min={1}
                                    max={3}
                                    step={.1}
                                    value={design.design.signatureStyle.lineSpacing}
                                    onChange={(e) => handleDesign("lineSpacing", e.target.value)}
                                    className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
                                />
                            </td>
                        </tr>

                        <tr className="border-b">
                            <td className='py-2 px-4 font-thin'>Font Scale</td>
                            <td className='py-2 px-4'>
                                <p className='text-end m-0 text-gray-400'>{design.design.signatureStyle.fontScale}</p>
                                <input
                                    type="range"
                                    min={1}
                                    max={12}
                                    step={1}
                                    value={design.design.signatureStyle.fontScale}
                                    onChange={(e) => handleDesign("fontScale", e.target.value)}
                                    className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
                                />
                            </td>
                        </tr>

                        <tr>
                            <td className='py-2 px-4 font-thin size-3/6'>Space from Email</td>
                            <td className='py-2 px-4'>
                                <p className='text-end m-0 text-gray-400'>{design.design.signatureStyle.spaceFromEmail}</p>
                                <input
                                    type="range"
                                    min={0}
                                    max={100}
                                    step={1}
                                    value={design.design.signatureStyle.spaceFromEmail}
                                    onChange={(e) => handleDesign("spaceFromEmail", e.target.value)}
                                    className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer mt-"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )

    async function handleDesign(type: "font" | "tempColor" | "fontScale" | "lineSpacing" | "spaceFromEmail", newValue: "start" | "center" | "end" | number | string) {
        design.handleDesign({
            signatureStyle: {
                ...design.design.signatureStyle,
                [type]: newValue,
            },
        });
    }

}

const Image = () => {
    const { design } = useAppContext()
    return (
        <>
            <div className="overflow-y-auto scrollbar-thin mb-5">
                <table className='table-auto w-full border-collapse'>
                    <caption className='text-left font-bold text-sm'>Images</caption>
                    <tbody>
                        {/* Font Selection */}
                        <tr className="border-b">
                            <td className='py-2 px-4 font-thin'>Shape</td>
                            <td className='py-2 px-4'>
                                <div className="flex border rounded-md">
                                    <div className={handleActive(design.design.images.shape === "square")} onClick={() => handleShape("shape", "square")}>
                                        <SquareOutlinedIcon fontSize='small' />
                                    </div>
                                    <div className={handleActive(design.design.images.shape === "rounded")} onClick={() => handleShape("shape", "rounded")}>
                                        <CropDinOutlinedIcon fontSize='small' />
                                    </div>
                                    <div className={handleActive(design.design.images.shape === "circle")} onClick={() => handleShape("shape", "circle")}>
                                        <RadioButtonUncheckedIcon fontSize='small' />
                                    </div>
                                </div>
                            </td>
                        </tr>

                        {/* Template Color Selection */}
                        <tr className="border-b">
                            <td className='py-2 px-4 font-thin size-1/2'>Size</td>
                            <td className='py-2 px-4 size-1/2'>
                                <p className='text-end m-0 text-gray-400'>{design.design.images.size}</p>
                                <input
                                    value={design.design.images.size}
                                    onChange={(e) => handleShape("size", e.target.value)}
                                    type="range"
                                    min={0}
                                    max={150}
                                    step={1}
                                    className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
                                />
                            </td>
                        </tr>

                        {/* Font Scale */}
                        <tr className="border-b">
                            <td className='py-2 px-4 font-thin'>Position</td>
                            <td className='py-2 px-4'>
                                <div className="flex border rounded-md">
                                    <div className={handleActive(design.design.images.position === "start")} onClick={() => handleShape("position", "start")}>
                                        <AlignVerticalTopOutlinedIcon fontSize='small' />
                                    </div>
                                    <div className={handleActive(design.design.images.position === "center")} onClick={() => handleShape("position", "center")}>
                                        <AlignHorizontalCenterOutlinedIcon fontSize='small' />
                                    </div>
                                    <div className={handleActive(design.design.images.position === "end")} onClick={() => handleShape("position", "end")}>
                                        <AlignVerticalBottomOutlinedIcon fontSize='small' />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )

    async function handleShape(type: "position" | "shape" | "size", newValue: "start" | "center" | "end" | number | string) {
        design.handleDesign({
            images: {
                ...design.design.images,
                [type]: newValue,
            },
        });
    }

}

const Details = () => {
    return (
        <>
            <div className="overflow-y-auto scrollbar-thin mb-5">
                <table className='table-auto w-full border-collapse'>
                    <caption className='text-left font-bold text-sm'>Details</caption>
                    <tbody>
                        <tr className="border-b">
                            <td className='py-2 px-4 font-thin'>Label</td>
                            <td className='py-2 px-4'>
                                <div className="flex border rounded-md align-middle">
                                    <div className="flex-1 text-center p-2 cursor-pointer hover:bg-gray-200 text-[10px]">
                                        Phone
                                    </div>
                                    <div className="flex-1 text-center p-2 border-s cursor-pointer hover:bg-gray-200 text-[10px]">
                                        P
                                    </div>
                                    <div className="flex-1 text-center border-e border-s p-2 cursor-pointer hover:bg-gray-200">
                                        <LocalPhoneOutlinedIcon fontSize="small" />
                                    </div>
                                    <div className="flex-1 text-center p-2 cursor-pointer hover:bg-gray-200 text-[10px]">
                                        None
                                    </div>
                                </div>

                            </td>
                        </tr>

                        <tr className="border-b">
                            <td className='py-2 px-4 font-thin size-1/2'>Direction</td>
                            <td className='py-2 px-4 size-1/2'>
                                <div className="flex border rounded-md align-middle">
                                    <div className="flex-1 text-center border-e border-s p-2 cursor-pointer hover:bg-gray-200">
                                        <KeyboardTabIcon fontSize="small" />
                                    </div>
                                    <div className="flex-1 text-center border-e border-s p-2 cursor-pointer hover:bg-gray-200">
                                        <VerticalAlignBottomIcon fontSize="small" />
                                    </div>
                                </div>
                            </td>
                        </tr>

                        <tr className="border-b">
                            <td className='py-2 px-4 font-thin'>Separator</td>
                            <td className='py-2 px-4'>
                                <div className="flex border rounded-md">
                                    <div className="flex-1 text-center p-2 cursor-pointer hover:bg-gray-200 font-extrabold px-4">
                                        |
                                    </div>
                                    <div className="flex-1 text-center border-e border-s p-2 cursor-pointer hover:bg-gray-200">
                                        <FiberManualRecordIcon fontSize='small' />
                                    </div>
                                    <div className="flex-1 text-center  p-2 cursor-pointer border-e hover:bg-gray-200">
                                        <SquareIcon fontSize='small' />
                                    </div>
                                    <div className="flex-1 text-center  p-2 cursor-pointer hover:bg-gray-200">
                                        None
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

const SocialIcons = () => {
    const { design } = useAppContext()
    const file = design.design.socialIcons.file
    const { shape, colorType, spaceBetween, size, color } = design.design.socialIcons

    return (
        <>
            <div className="overflow-y-auto scrollbar-thin mb-5">
                <table className='table-auto w-full border-collapse'>
                    <caption className='text-left font-bold text-sm'>Social Icons</caption>
                    <tbody>
                        <tr className="border-b">
                            <td className='py-2 px-4 font-thin'>Fill</td>
                            <td className='py-2 px-4'>
                                <div className="flex border rounded-md align-middle">
                                    <div className={handleActive(file === "fill")} onClick={() => handleDesign("file", "fill")}>
                                        <FacebookIcon fontSize='small' />
                                    </div>
                                    <div className={handleActive(file === "outline")} onClick={() => handleDesign("file", "outline")}>
                                        <AiOutlineFacebook fontSize={20} className='m-0 p-0' />
                                    </div>
                                    <div className={handleActive(file === "none")} onClick={() => handleDesign("file", "none")}>
                                        <FaFacebookF fontSize={15} />
                                    </div>
                                </div>

                            </td>
                        </tr>

                        <tr className="border-b">
                            <td className='py-2 px-4 font-thin'>Shape</td>
                            <td className='py-2 px-4'>
                                <div className="flex border rounded-md">
                                    <div className={handleActive(shape === "square")} onClick={() => handleDesign("shape", "square")}>
                                        <SquareOutlinedIcon fontSize='small' />
                                    </div>
                                    <div className={handleActive(shape === "rounded")} onClick={() => handleDesign("shape", "rounded")}>
                                        <CropDinOutlinedIcon fontSize='small' />
                                    </div>
                                    <div className={handleActive(shape === "circle")} onClick={() => handleDesign("shape", "circle")}>
                                        <RadioButtonUncheckedIcon fontSize='small' />
                                    </div>
                                </div>
                            </td>
                        </tr>

                        <tr className="border-b">
                            <td className='py-2 px-4 font-thin size-1/2'>Size</td>
                            <td className='py-2 px-4 size-1/2'>
                                <p className='text-end m-0 text-gray-400'>{size}</p>
                                <input
                                    type="range"
                                    min={1}
                                    max={50}
                                    step={1}
                                    value={size}
                                    onChange={(e) => handleDesign("size", e.target.value)}
                                    className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
                                />
                            </td>
                        </tr>

                        <tr className="border-b">
                            <td className='py-2 px-4 font-thin size-1/2'>Space between</td>
                            <td className='py-2 px-4 size-1/2'>
                                <p className='text-end m-0 text-gray-400'>{spaceBetween}</p>
                                <input
                                    type="range"
                                    min={1}
                                    max={50}
                                    step={1}
                                    value={spaceBetween}
                                    onChange={(e) => handleDesign("spaceBetween", e.target.value)}
                                    className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
                                />
                            </td>
                        </tr>

                        <tr className="border-b">
                            <td className='py-2 px-4 font-thin size-1/2'>Color</td>
                            <td className='py-2 px-4 size-1/2'>
                                <div className="flex border rounded-md align-middle">
                                    <div className={handleActive(colorType === "original")} onClick={() => handleDesign("colorType", "original")}>
                                        Original
                                    </div>
                                    <div className={handleActive(colorType === "custom")} onClick={() => handleDesign("colorType", "custom")}>
                                        Custom
                                    </div>
                                </div>
                            </td>
                        </tr>

                        {colorType === "custom" && <tr className="border-b">
                            <td className='py-2 px-4 font-thin size-1/2'>Custom Color</td>
                            <td className='py-2 px-4 size-1/2'>
                                <Input type='color' value={color} onChange={(e) => handleDesign("color", e.target.value)} />
                            </td>
                        </tr>}

                    </tbody>
                </table>
            </div>
        </>
    )

    async function handleDesign(type: "file" | "shape" | "size" | "spaceBetween" | "colorType" | "color", newValue: number | string | boolean) {
        design.handleDesign({
            socialIcons: {
                ...design.design.socialIcons,
                [type]: newValue,
            },
        });
    }

}

const DecorativeLine = () => {
    const { design } = useAppContext()

    const isThemeColor: boolean = design.design.decorativeLine.matchWithTemplateColor
    const lineColor: string = design.design.decorativeLine.color
    const style: number = design.design.decorativeLine.style

    return (
        <>
            <div className="overflow-y-auto scrollbar-thin mb-4">
                <table className='table-auto w-full border-collapse'>
                    <caption className='text-left font-bold text-sm'>Decorative Line</caption>
                    <tbody>
                        {/* Font Selection */}
                        <tr className="border-b">
                            <td className="py-2 px-4 font-thin">Style</td>
                            <td className="py-2 px-4">
                                <div className="relative">
                                    <Select
                                        value={style}
                                        onChange={(val) => handleDesign("style", val)}
                                        className='w-full'
                                    >
                                        {decorativeLineOptions.map((option) => (
                                            <Select.Option key={option.value} value={option.value} className="flex items-center">
                                                <span
                                                    className="mr-2"
                                                    style={{
                                                        border: option.preview,
                                                        width: '40px',
                                                        display: 'inline-block',
                                                    }}
                                                ></span>
                                                {option.label}
                                            </Select.Option>
                                        ))}
                                    </Select>
                                </div>
                            </td>
                        </tr>

                        <tr className="border-b">
                            <td className='py-2 px-4 font-thin size-1/2'>Match with template color</td>
                            <td className='py-2 px-4 size-1/2 w-full flex justify-end'>
                                <Switch value={isThemeColor} onChange={(e) => { handleDesign("matchWithTemplateColor", e) }} />
                            </td>
                        </tr>

                        {!isThemeColor && <tr className="border-b">
                            <td className='py-2 px-4 font-thin size-1/2'>Color</td>
                            <td className='py-2 px-4 size-1/2'>
                                <div className="flex gap-2 justify-between">
                                    <Input
                                        type="color"
                                        className="w-12 h-12 border border-gray-300 rounded-lg px-1"
                                        value={lineColor}
                                        onChange={(e) => handleDesign("color", e.target.value)}
                                    />
                                    <Input type="text" value={lineColor} onChange={(e) => handleDesign("color", e.target.value)} className=" w-24 border border-gray-300 rounded-lg px-1" />
                                </div>
                            </td>
                        </tr>}

                    </tbody>
                </table>
            </div>

            <div className='mb-48 text-blue-300 hover:text-blue-600 cursor-pointer flex gap-2 items-center w-fit'><CiUndo /> <span>Reset to default</span></div>
        </>
    );

    async function handleDesign(type: "style" | "matchWithTemplateColor" | "color", newValue: number | string | boolean) {
        design.handleDesign({
            decorativeLine: {
                ...design.design.decorativeLine,
                [type]: newValue,
            },
        });
    }
};


export default Customize;


