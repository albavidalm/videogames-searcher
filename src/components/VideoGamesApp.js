import React, { useState, useEffect } from "react";
import { getApiData } from "../services/getApiData";
import { GameList } from "./GamesList";

export const VideoGamesApp = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getApiData().then((gameData) => {
      setGames(gameData);
    });
  }, []);

  return (
    <>
      <h1>VideoGamesApp</h1>
      <GameList games={games} />
    </>
  );
};
