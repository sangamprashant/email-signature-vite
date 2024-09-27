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
import { useState } from 'react';
import { AiOutlineFacebook } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import fontOptions from "../../../../../Strings/FontsOptions";

import { CiUndo } from "react-icons/ci";

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
    return (
        <>
            <div className="overflow-y-auto scrollbar-thin mb-5">
                <table className='table-auto w-full border-collapse'>
                    <caption className='text-left font-bold text-sm'>Signature Style</caption>
                    <tbody>
                        {/* Font Selection */}
                        <tr className="border-b">
                            <td className='py-2 px-4 font-thin'>Font</td>
                            <td className='py-2 px-4'>
                                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5">
                                    {fontOptions.map((font) => (
                                        <option key={font.value} value={font.value}>
                                            {font.name}
                                        </option>
                                    ))}
                                </select>
                            </td>
                        </tr>

                        {/* Template Color Selection */}
                        <tr className="border-b">
                            <td className='py-2 px-4 font-thin size-1/2'>Tempate Color</td>
                            <td className='py-2 px-4 size-1/2'>
                                <div className="flex gap-2 justify-between">
                                    <Input
                                        type="color"
                                        className="w-12 h-12 border border-gray-300 rounded-lg px-1"
                                        defaultValue="#000000"
                                    />
                                    <Input type="text" value="#000000" className=" w-24 border border-gray-300 rounded-lg px-1" />
                                </div>
                            </td>
                        </tr>

                        {/* Font Scale */}
                        <tr className="border-b">
                            <td className='py-2 px-4 font-thin'>Font Scale</td>
                            <td className='py-2 px-4'>
                                <input
                                    type="range"
                                    min="0.5"
                                    max="2"
                                    step="0.1"
                                    className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
                                />
                            </td>
                        </tr>

                        {/* Line Spacing */}
                        <tr className="border-b">
                            <td className='py-2 px-4 font-thin'>Line Spacing</td>
                            <td className='py-2 px-4'>
                                <input
                                    type="range"
                                    min="1"
                                    max="2"
                                    step="0.1"
                                    className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
                                />
                            </td>
                        </tr>

                        {/* Space from Email */}
                        <tr>
                            <td className='py-2 px-4 font-thin size-3/6'>Space from Email</td>
                            <td className='py-2 px-4'>
                                <input
                                    type="range"
                                    min="0"
                                    max="50"
                                    step="5"
                                    className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

const Image = () => {
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
                                    <div className="flex-1 text-center p-2 cursor-pointer hover:bg-gray-200">
                                        <SquareOutlinedIcon fontSize='small' />
                                    </div>
                                    <div className="flex-1 text-center border-e border-s p-2 cursor-pointer hover:bg-gray-200">
                                        <CropDinOutlinedIcon fontSize='small' />
                                    </div>
                                    <div className="flex-1 text-center  p-2 cursor-pointer hover:bg-gray-200">
                                        <RadioButtonUncheckedIcon fontSize='small' />
                                    </div>
                                </div>
                            </td>
                        </tr>

                        {/* Template Color Selection */}
                        <tr className="border-b">
                            <td className='py-2 px-4 font-thin size-1/2'>Size</td>
                            <td className='py-2 px-4 size-1/2'>
                                <p className='text-end m-0 text-gray-400'>29</p>
                                <input
                                    type="range"
                                    min="0.5"
                                    max="2"
                                    step="0.1"
                                    className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
                                />
                            </td>
                        </tr>

                        {/* Font Scale */}
                        <tr className="border-b">
                            <td className='py-2 px-4 font-thin'>Position</td>
                            <td className='py-2 px-4'>
                                <div className="flex border rounded-md">
                                    <div className="flex-1 text-center p-2 cursor-pointer hover:bg-gray-200">
                                        <AlignVerticalTopOutlinedIcon fontSize='small' />
                                    </div>
                                    <div className="flex-1 text-center border-e border-s p-2 cursor-pointer hover:bg-gray-200">
                                        <AlignHorizontalCenterOutlinedIcon fontSize='small' />
                                    </div>
                                    <div className="flex-1 text-center  p-2 cursor-pointer hover:bg-gray-200">
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
                                    <div className="flex-1 text-center p-2 border-s cursor-pointer hover:bg-gray-200">
                                        <FacebookIcon fontSize='small' />
                                    </div>
                                    <div className="flex-1 text-center border-e border-s p-2 cursor-pointer hover:bg-gray-200 flex justify-center items-center">
                                        <AiOutlineFacebook fontSize={20} className='m-0 p-0' />
                                    </div>
                                    <div className="flex-1 text-center p-2 cursor-pointer hover:bg-gray-200 flex justify-center items-center">
                                        <FaFacebookF fontSize={15} />
                                    </div>
                                </div>

                            </td>
                        </tr>

                        <tr className="border-b">
                            <td className='py-2 px-4 font-thin'>Shape</td>
                            <td className='py-2 px-4'>
                                <div className="flex border rounded-md">
                                    <div className="flex-1 text-center p-2 cursor-pointer hover:bg-gray-200">
                                        <SquareOutlinedIcon fontSize='small' />
                                    </div>
                                    <div className="flex-1 text-center border-e border-s p-2 cursor-pointer hover:bg-gray-200">
                                        <CropDinOutlinedIcon fontSize='small' />
                                    </div>
                                    <div className="flex-1 text-center  p-2 cursor-pointer hover:bg-gray-200">
                                        <RadioButtonUncheckedIcon fontSize='small' />
                                    </div>
                                </div>
                            </td>
                        </tr>

                        <tr className="border-b">
                            <td className='py-2 px-4 font-thin size-1/2'>Size</td>
                            <td className='py-2 px-4 size-1/2'>
                                <p className='text-end m-0 text-gray-400'>29</p>
                                <input
                                    type="range"
                                    min="0.5"
                                    max="2"
                                    step="0.1"
                                    className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
                                />
                            </td>
                        </tr>

                        <tr className="border-b">
                            <td className='py-2 px-4 font-thin size-1/2'>Space between</td>
                            <td className='py-2 px-4 size-1/2'>
                                <p className='text-end m-0 text-gray-400'>29</p>
                                <input
                                    type="range"
                                    min="0.5"
                                    max="2"
                                    step="0.1"
                                    className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
                                />
                            </td>
                        </tr>

                        <tr className="border-b">
                            <td className='py-2 px-4 font-thin size-1/2'>Color</td>
                            <td className='py-2 px-4 size-1/2'>
                                <div className="flex border rounded-md align-middle">
                                    <div className="flex-1 text-center border-e border-s p-2 cursor-pointer hover:bg-gray-200">
                                        Original
                                    </div>
                                    <div className="flex-1 text-center border-e border-s p-2 cursor-pointer hover:bg-gray-200">
                                        Custom
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

const DecorativeLine = () => {
    const [selectedStyle, setSelectedStyle] = useState(3);

    const styleOptions = [
        { value: 0, label: 'None', preview: 'none' },
        { value: 1, label: 'Slim', preview: '1px solid black' },
        { value: 2, label: 'Normal', preview: '2px solid black' },
        { value: 3, label: 'Heavy', preview: '4px solid black' },
        { value: 4, label: 'Dotted', preview: '2px dotted black' },
        { value: 5, label: 'Dashed', preview: '2px dashed black' },
    ];


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
                                        value={selectedStyle}
                                        onChange={(val) => setSelectedStyle(val)}
                                        className='w-full'
                                    >
                                        {styleOptions.map((option) => (
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

                        {/* Template Color Selection */}
                        <tr className="border-b">
                            <td className='py-2 px-4 font-thin size-1/2'>Match with template color</td>
                            <td className='py-2 px-4 size-1/2 w-full flex justify-end'>
                                <Switch defaultChecked />
                            </td>
                        </tr>

                        <tr className="border-b">
                            <td className='py-2 px-4 font-thin size-1/2'>Color</td>
                            <td className='py-2 px-4 size-1/2'>
                                <div className="flex gap-2 justify-between">
                                    <Input
                                        type="color"
                                        className="w-12 h-12 border border-gray-300 rounded-lg px-1"
                                        defaultValue="#000000"
                                    />
                                    <Input type="text" value="#000000" className=" w-24 border border-gray-300 rounded-lg px-1" />
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

            <div className='mb-48 text-blue-600 hover:text-blue-300 cursor-pointer flex gap-2 items-center w-fit'><CiUndo /> <span>Reset to default</span></div>
        </>
    );
};


export default Customize;


