import React from "react";

function PostCard({ body, media, postedBy, postedTime, title }) {
  return (
    <div className="postcard">
      <div className="userinfo">
        <div className="user">
          <img
            src="https://i.pinimg.com/564x/6c/57/c9/6c57c94f2c3dcb49b203d22eae051125.jpg"
            alt="soldier"
          />
          <p className="username">{postedBy.name}</p>
        </div>
      </div>
      <div className="post">
        <div className="postimg">
          {media.mediaType === "image" ? (
            <img src={media.mediaUrl} alt="" />
          ) : media.mediaType === "video" ? (
            <video controls src={media.mediaUrl} />
          ) : null}
        </div>
        <div className="postreactions">
          <i className="fa-regular fa-heart"></i>
          <i className="fa-regular fa-comment"></i>
        </div>
        <p className="postTitle">{title}</p>
        <p className="postbio">{body}</p>
        <p>View all 15 comments</p>
        <p className="date">1 days ago</p>
      </div>
      <div className="comment">
        <i className="fa-solid fa-face-smile"></i>
        <input type="text" placeholder="Add a comment" />
        <button className="comment-btn" type="submit">
          Post
        </button>
      </div>
    </div>
  );
}

export default PostCard;
