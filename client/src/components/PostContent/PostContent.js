import React from "react";

function PostContent({
  setFrontMedia,
  setFile,
  title,
  setTitle,
  body,
  setBody,
  postDeatils,
}) {
  return (
    <>
      <div className="newPost">
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          type="text"
          placeholder="Title"
        />
        <input
          onChange={(e) => {
            setBody(e.target.value);
          }}
          value={body}
          type="text"
          placeholder="Body"
        />
        <div className="btn-group">
          <button
            onClick={() => {
              setFile(null);
              setTitle("");
              setBody("");
              setFrontMedia("");
            }}
            className="cancel-btn"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              postDeatils();
            }}
            className="submit-btn"
          >
            Add Post
          </button>
        </div>
      </div>
    </>
  );
}

export default PostContent;
