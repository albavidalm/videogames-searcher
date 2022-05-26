//VIDEOGAMES API
export const getApiData = () => {
  return fetch(
    "https://api.rawg.io/api/games?&key=8ccf9cf3b49742ef87faf5cceb530685"
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
        cleanData: cleanData,
        nextPage: data.next,
        prevPage: data.previous,
      };
    })
    .catch((err) => console.error(err));
};
