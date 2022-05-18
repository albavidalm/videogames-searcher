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
  const [platformFilter, setPlatformFilter] = useState(
    ls.get("platformFilter", "all")
  );
  const [sortFilter, setSortFilter] = useState(ls.get("sortFilter", false));

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
    ls.set("platformFilter", platformFilter);
    ls.set("sortFilter", sortFilter);
  }, [games, nameFilter, genreFilter, platformFilter, sortFilter]);

  //Event handlers
  const handleFilter = (data) => {
    if (data.key === "name") {
      setNameFilter(data.value);
    } else if (data.key === "genre") {
      setGenreFilter(data.value);
    } else if (data.key === "platform") {
      setPlatformFilter(data.value);
    } else if (data.key === "sort") {
      setSortFilter(data.checked);
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
    })
    .filter((game) => {
      return platformFilter === "all"
        ? true
        : game.platforms.includes(platformFilter);
    });

  if (sortFilter) {
    filteredGames.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  }

  // //Reset button
  // const handleReset = () => {
  //   setNameFilter("");
  //   setGenreFilter("all");
  //   setSortFilter(false);
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
