import React, { useState } from 'react';
import Cropper from 'react-easy-crop';

const Code_06_ImageGallery = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [croppedImages, setCroppedImages] = useState<string[]>([]);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [showCropModal, setShowCropModal] = useState(false);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result as string);
                setShowCropModal(true);
            };
            reader.readAsDataURL(file);
        }
    };



    return (
        <div>
            <h2 className="text-3xl font-bold mb-4">Add an Image Gallery</h2>
            <p className="text-gray-600 mb-2">Add your images:</p>

            <div className="flex gap-1 flex-wrap">
                {/* Render cropped images in gallery */}
                {croppedImages.map((image, index) => (
                    <div key={index} className="h-16 w-16 border-dashed border-2">
                        <img src={image} alt={`Cropped ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                ))}

                {/* Only show file input if less than 4 images are in the gallery */}
                {croppedImages.length < 4 && (
                    <label className="h-16 w-16 border-dashed border-2 cursor-pointer" htmlFor="galleryImage">
                        <input type="file" id="galleryImage" className="hidden" accept="image/*" onChange={handleImageChange} />
                        <span className="block text-center">+</span>
                    </label>
                )}

                {/* Placeholder for additional images if less than 4 images are added */}
                {Array.from({ length: 4 - croppedImages.length }).map((_, index) => (
                    <div key={`placeholder-${index}`} className="h-16 w-16 border-dashed border-2"></div>
                ))}
            </div>

            {/* Crop modal */}
            {showCropModal && (
                <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-75 z-50">
                    <div className="relative w-full max-w-lg bg-white p-4 rounded-md">
                        <Cropper
                            image={selectedImage || ''}
                            crop={crop}
                            zoom={zoom}
                            aspect={1}
                            onCropChange={setCrop}
                            onZoomChange={setZoom}
                            onCropComplete={onCropComplete}
                        />
                        <button
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                            onClick={() => setShowCropModal(false)}
                        >
                            Crop
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Code_06_ImageGallery;
