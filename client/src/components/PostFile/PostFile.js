import React, { useRef } from "react";
import "./PostFile.scss";

function PostFile({ frontMedia, setFrontMedia, file, setFile }) {
  const inputRef = useRef(null);
  const onClick = () => {
    inputRef.current.click();
  };

  const getBase64 = (e) => {
    const uploadFile = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(uploadFile);
    reader.onload = () => {
      setFrontMedia(reader.result);
    };
    reader.onerror = function (err) {
      console.log(err);
    };
  };
  return (
    <>
      {file ? (
        <div className="file-post">
          {file.type.split("/")[0] === "image" ? (
            <img src={frontMedia} alt="" />
          ) : file.type.split("/")[0] === "video" ? (
            <video src={frontMedia} autoPlay controls />
          ) : (
            <img
              alt=""
              src="https://images.unsplash.com/photo-1609743522653-52354461eb27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            />
          )}
        </div>
      ) : (
        <div className="file-field input-field">
          <div className="file-field-btn">
            <span className="new-post-btn" onClick={onClick}>
              Select from your device
            </span>
            <input
              onChange={(e) => {
                setFile(e.target.files[0]);
                getBase64(e);
              }}
              ref={inputRef}
              type="file"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default PostFile;
