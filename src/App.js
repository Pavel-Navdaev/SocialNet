import c from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import UsersContainer from "./components/Users/UsersContainer";
import ProfilePageContainer from "./components/ProfilePage/ProfilePageContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import { NavbarContainer } from "./components/Navbar/NavbarContainer";
import { LoginContainer } from "./components/common/Login/LoginContainer";
import MyPostsContainer from "./components/ProfilePage/MyPosts/MyPostsContainer";
import AboutContainer from "./components/ProfilePage/About/AboutContainer";
import { connect } from "react-redux";
import { initializeApp } from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
const DialogsContainer = lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className={c.appWrapper}>
        <HeaderContainer />
        <NavbarContainer />
        <div className={c.main}>
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route index element={<LoginContainer />} />
              <Route path="/profile/*" element={<ProfilePageContainer />}>
                <Route path={"timeline"} element={<MyPostsContainer />} />
                <Route
                  path={"timeline/:userId"}
                  element={<MyPostsContainer />}
                />
                <Route path={"about"} element={<AboutContainer />} />
                <Route path={"friends"} element={<p>Friends</p>} />
                <Route path={"photos"} element={<p>Photos</p>} />
              </Route>
              <Route path="/dialogs/*" element={<DialogsContainer />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/login" element={<LoginContainer />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    initialized: state.app.initializedStatus,
  };
};

export default connect(mapStateToProps, {
  initializeApp,
})(App);
