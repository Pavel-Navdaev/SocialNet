import React from "react";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import Navigation from "./Navigation/Navigation";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const ProfilePage = (props) => {
  return (
    <main>
      <ProfileHeader />
      <Navigation />
      <MyPostsContainer />
    </main>
  );
};

export default ProfilePage;
