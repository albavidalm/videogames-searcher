import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import VideoGamesApp from "./components/VideoGamesApp";
import "./stylesheets/index.css";
import "./stylesheets/VideoGamesApp.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <VideoGamesApp />
  </BrowserRouter>
);
