import { useEffect, useState } from "react";
import { getApiData } from "../services/getApiData";

export const useFetchGames = () => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [prevPage, setPrevPage] = useState("prevPage", "");
  const [nextPage, setNextPage] = useState("nextPage", "");

  useEffect(() => {
    getApiData().then((gamesData) => {
      setIsLoading(false);
      setGames(gamesData.cleanData);
      setPrevPage(gamesData.prevPage);
      setNextPage(gamesData.nextPage);
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

  return {
    games,
    isLoading,
    prevPage,
    nextPage,
    onNext,
    goPrevPage,
  };
};
