const FilterSortByDate = (props) => {
  //console.log(props);
  const handleChange = (ev) => {
    // console.log(ev.target.value);
    props.handleFilter({
      value: ev.target.value,
      key: "date",
    });
  };

  if (props.sortDateFilter === "ascending") {
    props.filteredgames.sort((a, b) => {
      if (a.released > b.released) {
        return 1;
      }
      if (a.released < b.released) {
        return -1;
      }
      return 0;
    });
  } else if (props.sortDateFilter === "descending") {
    props.filteredgames.sort((a, b) => {
      if (a.released < b.released) {
        return 1;
      }
      if (a.released > b.released) {
        return -1;
      }
      return 0;
    });
  }

  return (
    <>
      <label className="formSortDate__label" htmlFor="date">
        Sort by date ascending:
      </label>

      <select
        className="formDate__select"
        name="date"
        value={props.sortDateFilter}
        id="date"
        onChange={handleChange}
      >
        <option value="none">None</option>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
    </>
  );
};
export default FilterSortByDate;
