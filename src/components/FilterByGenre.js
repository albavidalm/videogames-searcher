const FilterByGenre = (props) => {
  const genresList = [];

  const categories = [...props.genres].forEach((genre) =>
    genre.forEach((category) => genresList.push(category))
  );

  const genresListClean = [...new Set(genresList)].map((genre, index) => {
    return (
      <p key={index}>
        <input type="checkbox" name="genre" value={genre} />
        {genre}
      </p>
    );
  });

  return (
    <>
      <label className="form__label" htmlFor="genre">
        Genre:
      </label>

      {genresListClean}
    </>
  );
};

export default FilterByGenre;
