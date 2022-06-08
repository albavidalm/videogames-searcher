//VIDEOGAMES API
export const getApiData = () => {
  return fetch(
    "https://api.rawg.io/api/games?&key=30a842076eed4d7cb75b7a01f8307a40"
    // "https://api.rawg.io/api/games?key=30a842076eed4d7cb75b7a01f8307a40&page=2"
  )
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      const cleanData = data.results.map((game) => {
        return {
          name: game.name,
          cover: game.background_image,
          id: game.id,
          rating: game.rating,
          released: game.released,
          genres: game.genres.map((genre) => genre.name),
          platforms: game.platforms.map((platform) => platform.platform.name),
          screenshots: game.short_screenshots.map((screen) => screen.image),
          language: [...new Set(game.tags.map((lang) => lang.language))],
        };
      });
      // return cleanData;
      return {
        cleanData,
        nextPage: data.next,
        prevPage: data.previous,
      };
    })
    .catch((err) => console.error(err));
};
