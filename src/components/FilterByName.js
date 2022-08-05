const FilterByName = ({ nameFilter, handleFilter }) => {
  const handleChange = (ev) => {
    handleFilter({
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
        value={nameFilter}
        autoFocus
        onChange={handleChange}
      />
    </>
  );
};

export default FilterByName;
