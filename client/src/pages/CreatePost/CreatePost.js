import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CreatePost.scss";
import PostFile from "../../components/PostFile/PostFile";
import PostContent from "../../components/PostContent/PostContent";
import M from "materialize-css";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [file, setFile] = useState(null);
  const [frontMedia, setFrontMedia] = useState("");
  const [media, setMedia] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (media) {
      saveToDatabase();
    }
    //eslint-disable-next-line
  }, [media]);

  const postDeatils = () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "merngram");
    data.append("cloud_name", "dfljyopnp");

    fetch(
      `https://api.cloudinary.com/v1_1/dfljyopnp/${
        file.type.split("/")[0]
      }/upload`,
      {
        method: "post",
        body: data,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setMedia(() => {
          return {
            mediaUrl: data.secure_url,
            mediaType: data.resource_type,
          };
        });
      })
      .catch((err) => console.log(err));
  };
  const saveToDatabase = () => {
    fetch("http://localhost:5000/createpost", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        authorization: `dilshod ${localStorage.getItem("jwt")}`,
      },
      mode: "cors",
      body: JSON.stringify({
        title: title,
        body: body,
        media: media,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.err) {
          M.toast({ html: data.err, classes: "errNotification" });
        } else {
          M.toast({ html: "New Post created", classes: "okNotifiaction" });
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <h3 className="center">Create Post</h3>
      <PostFile
        frontMedia={frontMedia}
        setFrontMedia={setFrontMedia}
        file={file}
        setFile={setFile}
      />
      <div className="create-post">
        {file ? (
          <PostContent
            setFile={setFile}
            title={title}
            body={body}
            setTitle={setTitle}
            setBody={setBody}
            setFrontMedia={setFrontMedia}
            postDeatils={postDeatils}
          />
        ) : null}
      </div>
    </div>
  );
}

export default CreatePost;
