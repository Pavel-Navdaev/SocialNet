import React from "react";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import Navigation from "./Navigation/Navigation";
import { Outlet } from "react-router-dom";

const ProfilePage = (props) => {
  return (
    <main>
      <ProfileHeader profile={props.profile} />
      <Navigation />
      <Outlet />
    </main>
  );
};

export default ProfilePage;
