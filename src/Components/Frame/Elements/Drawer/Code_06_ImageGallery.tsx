import CropDinOutlinedIcon from '@mui/icons-material/CropDinOutlined';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import SquareOutlinedIcon from '@mui/icons-material/SquareOutlined';
import { Button, Input, Modal, Slider, Switch } from 'antd';
import React, { useRef, useState } from 'react';
import { IoIosLink, IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import ReactCrop, { Crop, PixelCrop } from 'react-image-crop';
import { canvasPreview, handleActive } from '../../../../functions';
import TableLayout from "../Reuse/Table/Table.Layout";
import TableTd from "../Reuse/Table/TableTd";
import TableTr from "../Reuse/Table/TableTr";
import UserConfirm from './UserConfirm';

const Code_06_ImageGallery = () => {
    const [croppedImages, setCroppedImages] = useState<string[]>([]);
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [applyToAll, setApplyToAll] = useState<boolean>(false)
    const [crop, setCrop] = useState<Crop>({
        unit: '%',
        width: 50,
        height: 50,
        x: 25,
        y: 25,
    });

    const [completedCrop, setCompletedCrop] = useState<PixelCrop | null>(null);
    const imageRef = useRef<HTMLImageElement | null>(null);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = () => setImageSrc(reader.result as string);
            reader.readAsDataURL(file);
            setIsModalVisible(true);
        }
    };

    const handleSaveCroppedImage = () => {
        if (completedCrop && imageRef.current) {
            const canvas = document.createElement('canvas');
            canvasPreview(imageRef.current, canvas, completedCrop);
            canvas.toBlob((blob) => {
                if (!blob) return;
                const croppedUrl = URL.createObjectURL(blob);
                setCroppedImages(pre => [
                    ...pre, croppedUrl
                ])
            });
            handleCropCancel()
            setIsModalVisible(false);
        }
    };

    const handleCropComplete = (crop: PixelCrop) => {
        setCompletedCrop(crop);
    };

    const handleCropCancel = () => {
        setIsModalVisible(false);
        setCrop({ unit: '%', width: 50, height: 50, x: 25, y: 25 });
    };


    const handleDeleteImage = (index: number) => {
        setCroppedImages((prevImages) => prevImages.filter((_, i) => i !== index));
    };

    return (
        <>
            <h2 className="text-3xl font-bold mb-4">Add an Image Gallery</h2>
            <p className="text-gray-600 mb-2">Add your images:</p>

            <div className="flex gap-1 flex-wrap justify-between my-4">

                {croppedImages.map((image, index) => (
                    <div key={index} className="relative h-24 w-24 border-dashed border-2 group rounded">
                        <img src={image} alt={`Cropped ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                            <Button
                                onClick={() => handleDeleteImage(index)}
                                type="link"
                                danger
                                icon={<MdDelete fontSize={25} className="text-red-500" />}
                            />
                        </div>
                    </div>
                ))}

                {croppedImages.length < 4 && (
                    <label
                        htmlFor="file-upload"
                        className="h-24 w-24 border-dashed border-2 rounded-lg border-blue-200 hover:border-blue-300 cursor-pointer text-[12px] text-center font-thin text-blue-500 flex items-center justify-center"
                    >
                        <IoMdAdd fontSize={25} aria-label="Upload Icon" />
                        <input
                            id="file-upload"
                            type="file"
                            accept="image/*"
                            style={{ display: "none" }}
                            onChange={handleFileUpload}
                            className="w-0"
                        />
                    </label>
                )}

                {/* Placeholder for additional images if less than 4 images are added */}
                {Array.from({ length: 3 - croppedImages.length }).map((_, index) => (
                    <div key={`placeholder-${index}`} className="h-24 w-24 border-dashed border-2 rounded-lg"></div>
                ))}
            </div>

            <>
                <TableLayout>
                    <TableTr>
                        <TableTd thin>Gallery title (optinal)</TableTd>
                        <TableTd><Input className="py-2" placeholder="Your Gallery Title" /></TableTd>
                    </TableTr>
                    <TableTr>
                        <TableTd thin>Images size</TableTd>
                        <TableTd><Slider value={10} min={10} max={200} step={10} /></TableTd>
                    </TableTr>
                    <TableTr>
                        <TableTd thin>Space between</TableTd>
                        <TableTd><Slider value={10} min={10} max={200} step={10} /></TableTd>
                    </TableTr>
                    <TableTr>
                        <TableTd thin>Shape</TableTd>
                        <TableTd>
                            <div className="flex border rounded-md">
                                <div className={handleActive(true)} >
                                    <SquareOutlinedIcon fontSize='small' />
                                </div>
                                <div className={handleActive(false)}>
                                    <CropDinOutlinedIcon fontSize='small' />
                                </div>
                                <div className={handleActive(false)} >
                                    <RadioButtonUncheckedIcon fontSize='small' />
                                </div>
                            </div>
                        </TableTd>
                    </TableTr>
                    <TableTr>
                        <TableTd thin>Apply to all images</TableTd>
                        <TableTd><Switch value={applyToAll} onClick={() => setApplyToAll(pre => !pre)} /></TableTd>
                    </TableTr>
                </TableLayout>
            </>

            <div className="flex flex-col gap-2 mt-4">
                {croppedImages.length > 0 ? (
                    applyToAll ? (
                        <div className="flex gap-2">
                            <div className="h-12 w-16 flex justify-center items-center">
                                <IoIosLink fontSize={25} className="text-gray-400" />
                            </div>
                            <Input placeholder="Enter link for all images" />
                            <div className="h-12 w-12 flex justify-center items-center">
                                <MdDelete fontSize={20} className="text-red-500 cursor-pointer" />
                            </div>
                        </div>
                    ) : (
                        croppedImages.map((_, index) => (
                            <div key={index} className="flex gap-2">
                                <div className="h-12 w-16 flex justify-center items-center">
                                    <IoIosLink fontSize={25} className="text-gray-400" />
                                </div>
                                <Input placeholder={`Enter link for image ${index + 1}`} />
                                <div className="h-12 w-12 flex justify-center items-center">
                                    <MdDelete
                                        fontSize={20}
                                        className="text-red-500 cursor-pointer"
                                        onClick={() => handleDeleteImage(index)}
                                    />
                                </div>
                            </div>
                        ))
                    )
                ) : (
                    <PlaceholderLink />
                )}
            </div>

            <Modal
                title="Crop Image"
                open={isModalVisible}
                onCancel={handleCropCancel}
                footer={[
                    <Button key="cancel" onClick={handleCropCancel}>
                        Cancel
                    </Button>,
                    <Button key="save" type="primary" onClick={handleSaveCroppedImage}>
                        Save
                    </Button>,
                ]}
            >
                <div className="flex justify-center">
                    {imageSrc && (
                        <ReactCrop
                            crop={crop}
                            onChange={(newCrop) => setCrop(newCrop)}
                            onComplete={(newCrop) => handleCropComplete(newCrop)}
                            aspect={1}
                        >
                            <img
                                ref={imageRef}
                                src={imageSrc}
                                alt="Crop"
                                style={{ maxHeight: "400px", maxWidth: "100%" }}
                            />
                        </ReactCrop>
                    )}
                </div>
            </Modal>

            <UserConfirm onAdd={onAdd} onCancel={onCancel} />

        </>
    );

    async function onAdd() {

    }

    async function onCancel() {

    }

};

export default Code_06_ImageGallery;

const PlaceholderLink = () => {
    return (
        <div className="flex gap-2">
            <div className="h-12 w-16 flex justify-center items-center">
                <IoIosLink fontSize={25} className='text-gray-400' />
            </div>
            <Input disabled placeholder='Select a image to apply link' />
            <div className="h-12 w-12 flex justify-center items-center">
                <MdDelete fontSize={20} className='text-red-500 cursor-pointer' />
            </div>
        </div>
    )
}
