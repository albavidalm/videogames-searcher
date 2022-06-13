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
      <label key={index} className="rad-label">
        <input
          type="radio"
          name="genre"
          className="rad-input"
          value={genre}
          onChange={handleChange}
          checked={genre === props.genreFilter}
        />
        <div className="rad-design"></div>
        <div className="rad-text">{genre}</div>
      </label>
    );
  });

  return (
    <div className="genre__options">
      <label className="rad-label">
        <input
          type="radio"
          name="genre"
          className="rad-input"
          value="all"
          onChange={handleChange}
          defaultChecked
        />
        <div className="rad-design"></div>
        <div className="rad-text">All</div>
      </label>
      {genresListClean}
    </div>
  );
};

export default FilterByGenre;
