import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation, matchPath } from "react-router";
import { getApiData } from "../services/getApiData";
import ls from "../services/local-storage";
import Header from "./Header";
import Footer from "./Footer";
import Filters from "./Filters";
import GameList from "./GamesList";
import GameDetail from "./GameDetail";
import NotFoundGame from "./NotFoundGame";
import NotFoundPage from "./NotFoundPage";
import NotFoundSearch from "./NotFoundSearch";
import Pagination from "./Pagination";
import Favorites from "./Favorites";

const VideoGamesApp = () => {
  const [games, setGames] = useState(ls.get("games", []));
  const [nameFilter, setNameFilter] = useState(ls.get("nameFilter", ""));
  const [genreFilter, setGenreFilter] = useState(ls.get("genreFilter", "all"));
  const [platformFilter, setPlatformFilter] = useState(
    ls.get("platformFilter", "all")
  );
  const [sortFilter, setSortFilter] = useState(ls.get("sortFilter", "none"));
  const [prevPage, setPrevPage] = useState(ls.get("prevPage", ""));
  const [nextPage, setNextPage] = useState(ls.get("nextPage", ""));
  const [totalGames, setTotalGames] = useState(ls.get("totalGames", ""));
  const [favorites, setFavorites] = useState(ls.get("favorites", []));

  // Checking if data at LS
  useEffect(() => {
    if (games.length === 0) {
      getApiData().then((gamesData) => {
        setGames(gamesData.cleanData);
        setPrevPage(gamesData.prevPage);
        setNextPage(gamesData.nextPage);
        setTotalGames(gamesData.totalGames);
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
    ls.set("prevPage", prevPage);
    ls.set("nextPage", nextPage);
    ls.set("totalGames", totalGames);
    ls.set("favorites", favorites);
  }, [
    games,
    nameFilter,
    genreFilter,
    platformFilter,
    sortFilter,
    prevPage,
    nextPage,
    totalGames,
    favorites,
  ]);

  // Favorites
  const favoriteGame = (clickedGame) => {
    const starredGame = favorites.find((game) => {
      return game.id === clickedGame;
    });
    if (starredGame === undefined) {
      const favGame = games.find((game) => {
        return game.id === clickedGame;
      });
      setFavorites([...favorites, favGame]);
      return;
    }
    const newFavorites = favorites.filter((game) => game.id !== clickedGame);
    setFavorites(newFavorites);
  };

  // Event handlers
  const handleFilter = (data) => {
    if (data.key === "name") {
      setNameFilter(data.value);
    } else if (data.key === "genre") {
      setGenreFilter(data.value);
    } else if (data.key === "platform") {
      setPlatformFilter(data.value);
    } else if (data.key === "sort") {
      setSortFilter(data.value);
    }
  };

  // Getting data for pagination
  const onPrevious = () => {
    getApiData(prevPage).then((gamesData) => setPrevPage(gamesData.prevPage));
  };
  //debugger;
  const onNext = () => {};

  // Reset
  const handleReset = () => {
    setNameFilter("");
    setGenreFilter("all");
    setPlatformFilter("all");
    setSortFilter("none");
  };

  const clearFavorites = () => {
    setFavorites([]);
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
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <section className="main">
              <Filters
                genres={getGenres()}
                handleFilter={handleFilter}
                nameFilter={nameFilter}
                platformFilter={platformFilter}
                genreFilter={genreFilter}
                sortFilter={sortFilter}
                filteredGames={filteredGames}
                handleReset={handleReset}
              />
              <Favorites
                games={games}
                favorites={favorites}
                favoriteGame={favoriteGame}
                clearFavorites={clearFavorites}
              />
              <section className="gameList">
                {filteredGames.length === 0 ? (
                  <NotFoundSearch
                    nameFilter={nameFilter}
                    handleReset={handleReset}
                  />
                ) : (
                  <>
                    <Pagination
                      prevPage={prevPage}
                      nextPage={nextPage}
                      onPrevious={onPrevious}
                      onNext={onNext}
                      totalGames={totalGames}
                    />
                    <GameList
                      games={filteredGames}
                      favorites={favorites}
                      favoriteGame={favoriteGame}
                    />
                  </>
                )}
              </section>
            </section>
          }
        />

        {gameFound ? (
          <Route
            path="/game/:id"
            element={<GameDetail gameDetail={gameFound} />}
          />
        ) : (
          <Route path="/game/*" element={<NotFoundGame />} />
        )}

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </>
  );
};

export default VideoGamesApp;
