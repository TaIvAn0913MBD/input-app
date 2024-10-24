"use client";
import { useState } from "react";

const Page = () => {
  const [inputImageValue, setInputImageValue] = useState();
  const [uploadedImageValue, setUploadedImageValue] = useState();
  const HandleUpload = async () => {
    const formData = new FormData();
    formData.append(`file`, inputImageValue);
    formData.append(`upload_preset`, `Taivan`);
    formData.append(`cloud_name`, `daepguvpo`);
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/daepguvpo/image/upload`,
      { method: `POST`, body: formData }
    );
    const data = await res.json();
    setUploadedImageValue(data.secure_url);
  };

  return (
    <div>
      <input
        type="file"
        onChange={(e) => setInputImageValue(e.target.files[0])}
      />
      <button onClick={() => HandleUpload()}>Upload</button>
      <div>
        {uploadedImageValue && (
          <div>
            <h1>Uploaded Image:</h1>
            <img src={uploadedImageValue} className="IMAGE" />
          </div>
        )}
      </div>
    </div>
  );
};
export default Page;
