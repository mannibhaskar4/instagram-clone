import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post({ username, caption, imageUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="m.b.malliks"
          src="https://instagram.fpat1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/69836736_2120470091591684_4454358600415969280_n.jpg?_nc_ht=instagram.fpat1-1.fna.fbcdn.net&_nc_ohc=usQ8cT6HID8AX_caWzq&oh=82a2e63f89ba3c2ae15e7e4c73653c6c&oe=5F9696DF"
        />

        <h3>{username}</h3>
      </div>

      <img className="post__image" src={imageUrl} alt="" />

      <h4 className="post__text">
        <strong>{username}:</strong> {caption}
      </h4>
    </div>
  );
}

export default Post;
