const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "name",
    });
  };
  return (
    <>
      <label className="filterTitle" htmlFor="name"></label>
      <input
        className="formName__input"
        type="search"
        name="name"
        id="name"
        placeholder="🔍 Search by name"
        value={props.nameFilter}
        autoFocus
        onChange={handleChange}
      />
    </>
  );
};

export default FilterByName;
