import React from "react";
import "./Profile.scss";

function Profile(props) {
  return (
    <div>
      <header>
        <div className="container">
          <div className="profile">
            <div className="profile-image">
              <img
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                alt=""
              />
            </div>

            <div className="profile-user-settings">
              <h1 className="profile-user-name">janedoe_</h1>

              <button className="btn profile-edit-btn">Edit Profile</button>

              <button
                className="btn profile-settings-btn"
                aria-label="profile settings"
              >
                <i className="fas fa-cog" aria-hidden="true"></i>
              </button>
            </div>

            <div className="profile-stats">
              <ul>
                <li>
                  <span className="profile-stat-count">164 posts</span>
                </li>
                <li>
                  <span className="profile-stat-count">188 followers</span>
                </li>
                <li>
                  <span className="profile-stat-count">206 following</span>
                </li>
              </ul>
            </div>

            <div className="profile-bio">
              <p>
                <span className="profile-real-name">
                  Jane Doe Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit 📷✈️🏕️
                </span>
              </p>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="container">
          <div className="gallery">
            <div className="gallery-item" tabIndex="0">
              <img
                src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"
                className="gallery-image"
                alt=""
              />

              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <i className="fas fa-heart" aria-hidden="true"></i> 56
                  </li>
                  <li className="gallery-item-comments">
                    <i className="fas fa-comment" aria-hidden="true"></i> 2
                  </li>
                </ul>
              </div>
            </div>
            <div className="gallery-item" tabIndex="0">
              <img
                src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"
                className="gallery-image"
                alt=""
              />

              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <i className="fas fa-heart" aria-hidden="true"></i> 56
                  </li>
                  <li className="gallery-item-comments">
                    <i className="fas fa-comment" aria-hidden="true"></i> 2
                  </li>
                </ul>
              </div>
            </div>
            <div className="gallery-item" tabIndex="0">
              <img
                src="https://i.pinimg.com/564x/c0/38/a8/c038a82c2e906e26c4daa7d7994c163b.jpg"
                className="gallery-image"
                alt=""
              />

              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <i className="fas fa-heart" aria-hidden="true"></i> 3242
                  </li>
                  <li className="gallery-item-comments">
                    <i className="fas fa-comment" aria-hidden="true"></i> 234
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Profile;
