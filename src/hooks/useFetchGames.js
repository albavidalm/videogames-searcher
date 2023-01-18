import { useEffect, useState } from "react";
import { getApiData } from "../services/getApiData";

export const useFetchGames = () => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalGames, setTotalGames] = useState("totalGames", "");
  const [prevPage, setPrevPage] = useState("prevPage", "");
  const [nextPage, setNextPage] = useState("nextPage", "");
  const [disabledButton, setDisabledButton] = useState(false);

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
    setDisabledButton(true);
    getApiData(nextPage).then((gamesData) => {
      setGames(gamesData.cleanData);
      setPrevPage(gamesData.prevPage);
      setNextPage(gamesData.nextPage);
      setDisabledButton(false);
    });
  };

  const goPrevPage = () => {
    setDisabledButton(true);
    getApiData(prevPage).then((gamesData) => {
      setGames(gamesData.cleanData);
      setPrevPage(gamesData.prevPage);
      setNextPage(gamesData.nextPage);
      setDisabledButton(false);
    });
  };
  const goFirstPage = () => {
    setDisabledButton(true);
    getApiData().then((gamesData) => {
      setGames(gamesData.cleanData);
      setPrevPage(gamesData.prevPage);
      setNextPage(gamesData.nextPage);
      setDisabledButton(false);
    });
  };
  const goLastPage = () => {
    setDisabledButton(true);
    getApiData(
      `https://api.rawg.io/api/games?&key=30a842076eed4d7cb75b7a01f8307a40&page=${totalPages}`
    ).then((gamesData) => {
      setGames(gamesData.cleanData);
      setPrevPage(gamesData.prevPage);
      setNextPage(gamesData.nextPage);
      setDisabledButton(false);
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
    disabledButton,
  };
};
