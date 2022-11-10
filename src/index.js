import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

let dialogs = [
  { path: "1", name: "Ed" },
  { path: "2", name: "Eva" },
  { path: "3", name: "Olly" },
];
let messages = [
  { message: "Hi" },
  { message: "How are u?" },
  { message: "Fine" },
];
let posts = [
  { postText: "Lorem Ipsum Lorem Ipsum" },
  { postText: "Lorem Ipsum Lorem Ipsum" },
  { postText: "Lorem Ipsum Lorem Ipsum" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App dialogs={dialogs} messages={messages} posts={posts} />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
