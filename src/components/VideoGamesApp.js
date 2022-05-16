import React, { useState, useEffect } from "react";
import { getApiData } from "../services/getApiData";
import ls from "../services/local-storage";
import { GameList } from "./GamesList";

export const VideoGamesApp = () => {
  const [games, setGames] = useState(ls.get("games", []));

  //Checking if data at LS
  useEffect(() => {
    if (games.length === 0) {
      getApiData().then((gamesData) => {
        setGames(gamesData);
      });
    }
  }, []);

  //Saving at LS
  useEffect(() => {
    ls.set("games", games);
  }, [games]);

  return (
    <>
      <h1>VideoGamesApp</h1>
      <GameList games={games} />
    </>
  );
};
