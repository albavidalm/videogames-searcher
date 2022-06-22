import { useEffect, useState } from "react";
import { getApiData } from "../services/getApiData";

export const useFetchGames = () => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // const getGames = async () => {
  //   const games = await getApiData(gamesData);
  //   setGames(gamesData.cleanData);
  //   setIsLoading(false);
  // };

  useEffect(() => {
    getApiData().then((gamesData) => {
      setIsLoading(false);
      setGames(gamesData.cleanData);
    });
  }, []);

  // useEffect(() => {
  //   getGames();
  // }, []);

  return {
    games,
    isLoading,
  };
};
