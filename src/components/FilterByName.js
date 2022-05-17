const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "name",
    });
  };
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
        onChange={handleChange}
      />
    </>
  );
};

export default FilterByName;
