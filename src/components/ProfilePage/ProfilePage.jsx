import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import Navigation from "./Navigation/Navigation";

const ProfilePage = (props) => {
  return (
    <main>
      <ProfileHeader />
      <Navigation />
      <MyPosts
        state={props.state}
        addPost={props.addPost}
        updatePostText={props.updatePostText}
      />
    </main>
  );
};

export default ProfilePage;
