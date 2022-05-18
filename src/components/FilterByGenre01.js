const FilterByGenre = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "genre",
    });
  };
  return (
    <>
      <label className="formGenre__label" htmlFor="genre">
        Genre:
      </label>

      <select
        className="formGenre__input--text"
        name="genre"
        id="genre"
        onChange={handleChange}
      >
        <option value="all">All</option>
        <option value="Action">Action</option>
        <option value="Adventure">Adventure</option>
        <option value="RPG">RPG</option>
        <option value="Shooter">Shooter</option>
        <option value="Puzzle">Puzzle</option>
        <option value="Indie">Indie</option>
        <option value="Platformer">Platformer</option>
        <option value="Massively Multiplayer">Massively Multiplayer</option>
      </select>
    </>
  );
};

export default FilterByGenre;
