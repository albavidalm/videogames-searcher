import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useLocation, matchPath } from "react-router";
import { getApiData } from "../services/getApiData";
import ls from "../services/local-storage";
import Filters from "./Filters";
import GameList from "./GamesList";
import GameDetail from "./GameDetail";
import NotFoundPage from "./NotFoundPage";
import NotFoundGame from "./NotFoundGame";
import ResetButton from "./ResetButton";

const VideoGamesApp = () => {
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

  // Event handlers
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

  // Reset
  const handleReset = () => {
    setNameFilter("");
    setGenreFilter("all");
    setPlatformFilter("all");
    setSortFilter(false);
  };

  // Render
  const filteredGames = games
    .filter((game) => {
      return game.name.toUpperCase().includes(nameFilter.toUpperCase());
    })
    // //Filter by genre hardcored
    // .filter((game) => {
    //   return genreFilter === "all" ? true : game.genres.includes(genreFilter);
    // })
    // Filter for dynamic gender
    .filter((game) => {
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

  const getGenres = () => {
    return games.map((game) => game.genres);
  };

  // Dynamic routes for specific game id
  const { pathname } = useLocation();
  const routeData = matchPath("/game/:id", pathname);
  const gameId = routeData !== null ? routeData.params.id : null;
  const gameFound = games.find((game) => game.id === parseInt(gameId));

  return (
    <>
      <h1>VideoGamesApp</h1>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filters
                genres={getGenres()}
                handleFilter={handleFilter}
                nameFilter={nameFilter}
                platformFilter={platformFilter}
                genreFilter={genreFilter}
                sortFilter={sortFilter}
              />
              <ResetButton handleReset={handleReset} />
              <GameList games={filteredGames} />
              {/* <NotFoundGame nameFilter={nameFilter} games={filteredGames} /> */}
            </>
          }
        />
        <Route
          path="/game/:id"
          element={<GameDetail gameDetail={gameFound} />}
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <div>Footer</div>
    </>
  );
};

export default VideoGamesApp;
