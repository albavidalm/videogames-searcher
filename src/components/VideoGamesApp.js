import React, { useState, useEffect } from "react";
import { getApiData } from "../services/getApiData";
import ls from "../services/local-storage";
import Filters from "./Filters";
import { GameList } from "./GamesList";
// import ResetButton from "./ResetButton";

export const VideoGamesApp = () => {
  const [games, setGames] = useState(ls.get("games", []));
  const [nameFilter, setNameFilter] = useState(ls.get("nameFilter", ""));
  const [genreFilter, setGenreFilter] = useState(ls.get("genreFilter", "all"));

  // Checking if data at LS
  useEffect(() => {
    if (games.length === 0) {
      getApiData().then((gamesData) => {
        setGames(gamesData);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Saving at LS
  useEffect(() => {
    ls.set("games", games);
    ls.set("nameFilter", nameFilter);
    ls.set("genreFilter", genreFilter);
  }, [games, nameFilter, genreFilter]);

  //Event handlers
  const handleFilter = (data) => {
    if (data.key === "name") {
      setNameFilter(data.value);
    } else if (data.key === "genre") {
      setGenreFilter(data.value);
    }
  };

  // Render
  const filteredGames = games
    .filter((game) => {
      return game.name.toUpperCase().includes(nameFilter.toUpperCase());
    })
    .filter((game) => {
      // if (genreFilter === "all") {
      //   return true;
      // } else {
      //   return game.genres.includes(genreFilter);
      // }
      return genreFilter === "all" ? true : game.genres.includes(genreFilter);
    });
  console.log(filteredGames);

  // //Reset button
  // const handleReset = () => {
  //   setNameFilter("");
  //   setGenreFilter("all");
  // };

  return (
    <>
      <h1>VideoGamesApp</h1>
      <Filters handleFilter={handleFilter} />
      {/* <ResetButton handleReset={handleReset} /> */}
      <GameList games={filteredGames} />
    </>
  );
};
