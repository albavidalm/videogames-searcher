import { useEffect, useState } from "react";
import { getApiData } from "../services/getApiData";

export const useFetchGames = () => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalGames, setTotalGames] = useState("totalGames", "");
  const [prevPage, setPrevPage] = useState("prevPage", "");
  const [nextPage, setNextPage] = useState("nextPage", "");

  const totalPages = Math.floor(totalGames / 20) + 1;

  useEffect(() => {
    getApiData().then((gamesData) => {
      setIsLoading(false);
      setGames(gamesData.cleanData);
      setPrevPage(gamesData.prevPage);
      setNextPage(gamesData.nextPage);
      setTotalGames(gamesData.totalGames);
    });
  }, []);

  const onNext = () => {
    getApiData(nextPage).then((gamesData) => {
      setGames(gamesData.cleanData);
      setPrevPage(gamesData.prevPage);
      setNextPage(gamesData.nextPage);
    });
  };

  const goPrevPage = () => {
    getApiData(prevPage).then((gamesData) => {
      setGames(gamesData.cleanData);
      setPrevPage(gamesData.prevPage);
      setNextPage(gamesData.nextPage);
    });
  };
  const goFirstPage = () => {
    getApiData().then((gamesData) => {
      setGames(gamesData.cleanData);
      setPrevPage(gamesData.prevPage);
      setNextPage(gamesData.nextPage);
    });
  };
  const goLastPage = () => {
    getApiData(
      `https://api.rawg.io/api/games?&key=30a842076eed4d7cb75b7a01f8307a40&page=${totalPages}`
    ).then((gamesData) => {
      setGames(gamesData.cleanData);
      setPrevPage(gamesData.prevPage);
      setNextPage(gamesData.nextPage);
    });
  };

  return {
    games,
    isLoading,
    prevPage,
    nextPage,
    totalPages,
    onNext,
    goPrevPage,
    goFirstPage,
    goLastPage,
  };
};
