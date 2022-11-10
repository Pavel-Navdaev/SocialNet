import c from "./App.module.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, Routes } from "react-router-dom";

const App = (props) => {
  return (
    <div className={c.appWrapper}>
      <Header />
      <Navbar />
      <div className={c.main}>
        <Routes>
          <Route
            path="/profile"
            element={
              <ProfilePage
                state={props.state.profilePage}
                addPost={props.addPost}
                updatePostText={props.updatePostText}
              />
            }
          />
          <Route
            path="/dialogs/*"
            element={<Dialogs state={props.state.dialogsPage} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
