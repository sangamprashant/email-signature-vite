import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Upload, UploadProps } from "antd";
import type { RcFile } from "antd/es/upload";
import { useState } from "react";

const ImagePart = () => {
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  const getBase64 = (img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result as string));
    reader.readAsDataURL(img);
  };

  const beforeUpload: UploadProps["beforeUpload"] = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
      return Upload.LIST_IGNORE;
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must be smaller than 2MB!");
      return Upload.LIST_IGNORE;
    }
    return true;
  };

  const handleChange: UploadProps["onChange"] = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    getBase64(info.file.originFileObj as RcFile, (url) => {
      setLoading(false);
      setImageUrl(url);
    });
  };

  const uploadButton = (
    <button
      style={{ border: 0, background: "none", width: "100%" }}
      type="button"
      className="w-full h-full flex flex-col justify-center items-center"
    >
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>
        Upload <br /> Image
      </div>
    </button>
  );

  return (
    <div className="flex flex-col w-full">
      <h5 className="mb-2"><b>Images</b></h5>
      <Upload
        listType="picture-card"
        showUploadList={false}
        beforeUpload={beforeUpload}
        onChange={handleChange}
        style={{ width: "100%" }}
        className="w-full"
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="avatar"
            style={{ width: "100%", height: "auto" }}
            className="w-full object-cover"
          />
        ) : (
          uploadButton
        )}
      </Upload>
    </div>
  );
};

export default ImagePart;
