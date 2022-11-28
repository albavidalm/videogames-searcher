//VIDEOGAMES API
import defaultImage from "../assets/images/default.jpg";

export const getApiData = (page) => {
  const initialUrl =
    "https://api.rawg.io/api/games?key=30a842076eed4d7cb75b7a01f8307a40";
  return fetch(page || initialUrl)
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      const cleanData = data.results.map((game) => {
        return {
          name: game.name,
          cover: game.background_image || defaultImage,
          id: game.id,
          rating: game.rating,
          released: game.released,
          genres: game.genres.map((genre) => genre.name),
          platforms: game.platforms.map((platform) => platform.platform.name),
          screenshots: game.short_screenshots.map((screen) => screen.image),
          language: [...new Set(game.tags.map((lang) => lang.language))],
        };
      });
      return {
        cleanData,
        totalGames: data.count,
        nextPage: data.next,
        prevPage: data.previous,
        initialUrl,
      };
    })

    .catch((err) => console.error(err));
};

// "https://api.rawg.io/api/games?&key=30a842076eed4d7cb75b7a01f8307a40"
// "https://api.rawg.io/api/games?key=30a842076eed4d7cb75b7a01f8307a40&page=2110"
