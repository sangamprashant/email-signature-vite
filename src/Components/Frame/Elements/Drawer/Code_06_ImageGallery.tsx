import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";
import { Button, Modal } from 'antd';
import React, { useRef, useState } from 'react';
import ReactCrop, { Crop, PixelCrop } from 'react-image-crop';
import { canvasPreview } from '../../../../functions';

const Code_06_ImageGallery = () => {
    const [croppedImages, setCroppedImages] = useState<string[]>([]);
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
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




    return (
        <>
            <h2 className="text-3xl font-bold mb-4">Add an Image Gallery</h2>
            <p className="text-gray-600 mb-2">Add your images:</p>

            <div className="flex gap-1 flex-wrap">

                {croppedImages && croppedImages.map((image, index) => (
                    <div key={index} className="h-16 w-16 border-dashed border-2">
                        <img src={image} alt={`Cropped ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                ))}

                {croppedImages.length < 4 && (
                    <label
                        htmlFor="file-upload"
                        className="h-16 w-16 border-dashed border-2 rounded hover:border-blue-300 cursor-pointer text-[12px] text-center font-thin text-blue-500 flex items-center justify-center"
                    >
                        <AddCircleTwoToneIcon fontSize="small" aria-label="Upload Icon" />
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
                    <div key={`placeholder-${index}`} className="h-16 w-16 border-dashed border-2"></div>
                ))}
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
        </>
    );
};

export default Code_06_ImageGallery;
