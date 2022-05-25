const FilterSortByDate = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      checked: ev.currentTarget.checked,
      key: "date",
    });
  };

  return (
    <>
      <label className="formSortDate__label" htmlFor="date">
        Sort by date ascending:
      </label>
      <input
        className="formSortDate__checkbox"
        name="date"
        id="date"
        value="date"
        type="checkbox"
        onChange={handleChange}
        checked={props.sortDateFilter}
      />
    </>
  );
};
export default FilterSortByDate;
