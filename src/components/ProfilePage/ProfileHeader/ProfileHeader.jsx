import React from "react";
import c from "./ProfileHeader.module.css";

const ProfileHeader = () => {
  return (
    <div className={c.profileHeader}>
      <div className={c.profileHeaderPhotos}>
        <img
          src="https://png.pngtree.com/thumb_back/fh260/background/20191215/pngtree-modern-double-colors-neon-lights-on-brick-background-image_324803.jpg"
          alt=""
          className={c.backgroundPhoto}
        />
      </div>
      <div className={c.alignPhoto}>
        <img
          src="https://globalhrsummit.com/wp-content/uploads/2018/11/Nick-Vujicic.jpg"
          alt=""
          className={c.profilePhoto}
        />
        <div className={c.profileName}>Nick Vujicic</div>
      </div>
      <div className={c.profileShortInfo}>
        <div className={c.socialIcons}>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img
              src="https://w7.pngwing.com/pngs/967/42/png-transparent-facebook-logo-computer-icons-facebook-icon-blue-text-trademark.png"
              alt="Facebook"
            />
          </a>
          <a href="twitter.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/124/124021.png"
              alt="Twitter"
            />
          </a>
          <a href="instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://pngicon.ru/file/uploads/instagram.png" alt="" />
          </a>
          <a
            href="google.com/intl/ru/gmail/about"
            target="_blank"
            rel="noopener"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiee9EU0QqLtQAbeIsD4x0cjMrOhVv6tbXRMjwgt_wQVokbQkf5qcGRkzgZ6LnhA7IynU&usqp=CAU"
              alt="Gmail"
            />
          </a>
          <a href="youtube.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://img.freepik.com/premium-vector/youtube-background-youtube-icon-social-media-icons-realistic-logo-vector-zaporizhzhia-ukraine-may-10-2021_399089-1047.jpg"
              alt="Youtube"
            />
          </a>
          <a href="linkedin.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRySKuF_moRqZ1J0hvl10-MXaoNPDfLuS9F2kpBNnWbuhq1JZ9CJbG4q3x0omdo60wcyvM&usqp=CAU"
              alt="LinkedIn"
            />
          </a>
        </div>

        <div className={c.profileShortInfoNumbers}>
          <div>
            <h5>Posts</h5>
            <p>123</p>
          </div>
          <div>
            <h5>Followers</h5>
            <p>235</p>
          </div>
          <div>
            <h5>Following</h5>
            <p>725</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
