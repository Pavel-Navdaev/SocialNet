import "./index.css";
import reportWebVitals from "./reportWebVitals";
import state, { subscribe } from "./redux/state";
import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { addPost, updatePostText } from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));

export let rerenderTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} updatePostText={updatePostText} />
      </BrowserRouter>
    </React.StrictMode>
  );
};

rerenderTree(state);
subscribe(rerenderTree);

reportWebVitals();
