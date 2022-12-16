import React from "react";
import c from "./ProfileHeader.module.css";
import Preloader from "../../common/Preloader/Preloader";
import userDefaultPhoto from "../../../icons/userDefault.png";

const ProfileHeader = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
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
          src={
            props.profile.photos.large !== null
              ? props.profile.photos.large
              : userDefaultPhoto
          }
          alt=""
          className={c.profilePhoto}
        />
        <div className={c.profileName}>{props.profile.fullName}</div>
      </div>
      <div className={c.profileShortInfo}>
        <div className={c.socialIcons}>
          <a
            href={"https://www." + props.profile.contacts.facebook}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://www.freepnglogos.com/uploads/facebook-logo-13.png"
              alt="Facebook"
            />
          </a>
          <a
            href={props.profile.contacts.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/124/124021.png"
              alt="Twitter"
            />
          </a>
          <a
            href={"https://" + props.profile.contacts.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://pngicon.ru/file/uploads/instagram.png" alt="" />
          </a>
          <a
            href="https://www.google.com/intl/ru/gmail/about"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiee9EU0QqLtQAbeIsD4x0cjMrOhVv6tbXRMjwgt_wQVokbQkf5qcGRkzgZ6LnhA7IynU&usqp=CAU"
              alt="Gmail"
            />
          </a>
          <a
            href={props.profile.contacts.youtube}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.freepik.com/premium-vector/youtube-background-youtube-icon-social-media-icons-realistic-logo-vector-zaporizhzhia-ukraine-may-10-2021_399089-1047.jpg"
              alt="Youtube"
            />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
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
