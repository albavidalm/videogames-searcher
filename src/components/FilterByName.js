const FilterByName = (props) => {
  return (
    <>
      <label className="formName__label" htmlFor="name">
        Filter by game name:
      </label>
      <input
        className="formName__input--text"
        placeholder="Search for"
        type="text"
        name="name"
        id="name"
        autoFocus
      />
    </>
  );
};

export default FilterByName;
