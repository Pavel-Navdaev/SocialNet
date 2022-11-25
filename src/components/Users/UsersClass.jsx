import React from "react";
import UserItem from "./UserItem/UserItem";
import c from "./Users.module.css";
import axios from "axios";

class UsersClass extends React.Component {
  constructor(props) {
    super(props);
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return (
      <div className={c.wrapper}>
        {this.props.users.map((u) => (
          <UserItem
            key={u.id}
            id={u.id}
            imgURL={u.photos.small}
            userName={u.name}
            status={u.status}
            // cityName={u.location.cityName}
            // country={u.location.country}
            followed={u.followed}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
          />
        ))}
      </div>
    );
  }
}

export default UsersClass;
