const FilterByGenre = (props) => {
  const handleChange = (ev) => {
    // console.log(ev.target.value);
    props.handleFilter({
      value: ev.target.value,
      key: "genre",
    });
  };

  const genresList = [];

  const categories = [...props.genres].forEach((genre) =>
    genre.forEach((category) => genresList.push(category))
  );

  const genresListClean = [...new Set(genresList)].map((genre, index) => {
    return (
      <label key={index}>
        <input
          type="radio"
          name="genre"
          value={genre}
          onChange={handleChange}
        />
        {genre}
      </label>
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
