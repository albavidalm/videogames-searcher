import React, { useState, useEffect } from "react";
import { getApiData } from "../services/getApiData";

export const VideoGamesApp = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    //Execute on the assambling
  }, []);
  getApiData();

  return <h1>VideoGamesApp</h1>;
};
