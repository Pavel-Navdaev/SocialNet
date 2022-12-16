import React from "react";
import UserItem from "./UserItem/UserItem";
import c from "./Users.module.css";
import Preloader from "../common/Preloader/Preloader";

const Users = (props) => {
  let pagesCount = Math.ceil(props.usersTotalCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let curPg = props.currentPage;
  let curPF = curPg - 3 < 0 ? 0 : curPg - 3;
  let curPL = curPg === 1 ? curPg + 4 : curPg === 2 ? curPg + 3 : curPg + 2;
  let slicedPages = pages.slice(curPF, curPL);

  return (
    <div className={c.wrapper}>
      <div className={c.pagination}>
        {slicedPages.map((p) => (
          <span
            key={p}
            onClick={() => props.onSetCurrentPage(p)}
            className={props.currentPage === p ? c.currentPage : c.page}
          >
            <p>{p}</p>
          </span>
        ))}
        <div className={c.preloader}>
          {props.isFetching ? <Preloader /> : null}
        </div>
      </div>

      {props.users.map((u) => (
        <UserItem
          key={u.id}
          id={u.id}
          imgURL={u.photos.small}
          userName={u.name}
          status={u.status}
          // cityName={u.location.cityName}
          // country={u.location.country}
          followed={u.followed}
          follow={props.follow}
          unfollow={props.unfollow}
          followingInProgress={props.followingInProgress}
        />
      ))}

      <div className={c.pagination}>
        {slicedPages.map((p) => (
          <span
            key={p}
            onClick={() => props.onSetCurrentPage(p)}
            className={props.currentPage === p ? c.currentPage : c.page}
          >
            <p>{p}</p>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Users;
