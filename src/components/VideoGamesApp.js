import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation, matchPath } from "react-router";
import { getApiData } from "../services/getApiData";
import { useFetchGames } from "../hooks/useFetchGames";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";
import ls from "../services/local-storage";
import Header from "./Header";
import Footer from "./Footer";
import Filters from "./Filters";
import GamesList from "./GamesList";
import GamesListSkeleton from "./GamesListSkeleton";
import GameDetail from "./GameDetail";
import NotFoundPage from "./NotFoundPage";
import Favorites from "./Favorites";
import Pagination from "./Pagination";

const VideoGamesApp = () => {
  const {
    games,
    isLoading,
    prevPage,
    nextPage,
    totalPages,
    disabledButton,
    onNext,
    goPrevPage,
    goFirstPage,
    goLastPage,
  } = useFetchGames();
  const [nameFilter, setNameFilter] = useState(ls.get("nameFilter", ""));
  const [genreFilter, setGenreFilter] = useState(ls.get("genreFilter", "all"));
  const [platformFilter, setPlatformFilter] = useState(
    ls.get("platformFilter", "all")
  );
  const [sortFilter, setSortFilter] = useState(ls.get("sortFilter", "none"));
  const [favorites, setFavorites] = useState(ls.get("favorites", []));

  // Checking if data at LS
  useEffect(() => {
    if (games.length === 0) {
      getApiData().then((gamesData) => {});
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
    ls.set("totalPages", totalPages);
    ls.set("favorites", favorites);
  }, [
    games,
    nameFilter,
    genreFilter,
    platformFilter,
    sortFilter,
    prevPage,
    nextPage,
    totalPages,
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
  const routeData = matchPath("game/:gameId", pathname);
  const gameId = routeData !== null ? routeData.params.gameId : null;
  const gameFound = games.find((game) => game.id === parseInt(gameId));

  return (
    <SkeletonTheme baseColor="#898989" highlightColor="#aaaaaa">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <section className="main">
              <section className="aside">
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
              </section>
              {isLoading ? (
                <GamesListSkeleton
                  cards={20}
                  prevPage={prevPage}
                  nextPage={nextPage}
                  goPrevPage={goPrevPage}
                  onNext={onNext}
                  goFirstPage={goFirstPage}
                  goLastPage={goLastPage}
                  totalPages={totalPages}
                />
              ) : (
                <section className="gameList">
                  {filteredGames.length !== 0 && (
                    <Pagination
                      prevPage={prevPage}
                      nextPage={nextPage}
                      goPrevPage={goPrevPage}
                      onNext={onNext}
                      goFirstPage={goFirstPage}
                      goLastPage={goLastPage}
                      totalPages={totalPages}
                      disabledButton={disabledButton}
                    />
                  )}

                  <GamesList
                    games={filteredGames}
                    favorites={favorites}
                    favoriteGame={favoriteGame}
                    nameFilter={nameFilter}
                  />
                </section>
              )}
            </section>
          }
        />

        <Route
          path="/game/:gameId"
          element={<GameDetail gameDetail={gameFound} />}
        />

        <Route path="/*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </SkeletonTheme>
  );
};

export default VideoGamesApp;
