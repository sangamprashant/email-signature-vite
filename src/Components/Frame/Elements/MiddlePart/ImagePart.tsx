import React, { useState, useRef } from "react";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";
import { Modal, Button } from "antd";
import ReactCrop, { Crop, PixelCrop } from "react-image-crop";
import 'react-image-crop/dist/ReactCrop.css';
import { canvasPreview } from "../../../../functions";

const ImagePart: React.FC = () => {
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
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
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
        setCroppedImage(croppedUrl);
      });
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
      <h5 className="font-bold mb-2">Images</h5>
      <label
        htmlFor="file-upload"
        className="w-full border-dashed border-2 rounded p-4 hover:border-blue-300 cursor-pointer text-[12px] text-center font-thin text-blue-500 flex flex-col"
      >
        <p><AddCircleTwoToneIcon fontSize="small" aria-label="Upload Icon" />
          Upload Photo or Logo</p>
        <p>Image should be at least 100x100px</p>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleFileUpload}
          className="w-0"
        />
      </label>

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

      {croppedImage && (
        <div className="mt-4">
          <h6>Cropped Image</h6>
          <img
            src={croppedImage}
            alt="Cropped"
            className="w-32 h-32 object-cover rounded"
          />
        </div>
      )}
    </>
  );
};

export default ImagePart;
