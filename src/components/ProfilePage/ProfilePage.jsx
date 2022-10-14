import React from "react";
import c from "./ProfilePage.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileHeader from "./ProfileHeader/ProfileHeader";

const ProfilePage = () => {
  return (
    <main className={c.main}>
      <ProfileHeader />
      <MyPosts />
    </main>
  );
};

export default ProfilePage;
