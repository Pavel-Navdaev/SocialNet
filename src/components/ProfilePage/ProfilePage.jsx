import React from "react";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import Navigation from "./Navigation/Navigation";
import { Outlet } from "react-router-dom";

const ProfilePage = (props) => {
  return (
    <main>
      <ProfileHeader
        savePhoto={props.savePhoto}
        profile={props.profile}
        isOwner={props.isOwner}
      />
      <Navigation />
      <Outlet context={props.isOwner} />
    </main>
  );
};

export default ProfilePage;
