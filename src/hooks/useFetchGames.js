import { useEffect, useState } from "react";
import { getApiData } from "../services/getApiData";

export const useFetchGames = () => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getApiData().then((gamesData) => {
      setIsLoading(false);
      setGames(gamesData.cleanData);
    });
  }, []);

  return {
    games,
    isLoading,
  };
};
