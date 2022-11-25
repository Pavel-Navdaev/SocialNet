import React from "react";
import UserItem from "./UserItem/UserItem";
import c from "./Users.module.css";
import axios from "axios";

const Users = (props) => {
  debugger;
  if (props.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        props.setUsers(response.data.items);
      });
  }

  let usersElements = props.users.map((u) => (
    <UserItem
      key={u.id}
      id={u.id}
      imgURL={u.photos.small}
      userName={u.name}
      status={u.status}
      // cityName={u.location.cityName}
      // country={u.location.country}
      setUsers={props.setUsers}
      followed={u.followed}
      follow={props.follow}
      unfollow={props.unfollow}
    />
  ));

  return <div className={c.wrapper}>{usersElements}</div>;
};

export default Users;
