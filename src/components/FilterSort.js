const FilterSort = (props) => {
  // const handleChange = (ev) => {
  //   props.handleFilter({
  //     checked: ev.currentTarget.checked,
  //     key: "ordered",
  //   });
  // };

  return (
    <>
      <label className="formSort__label" htmlFor="sort">
        Sort by name:
      </label>
      <input
        className="formSort__checkbox"
        name="sort"
        id="sort"
        value="sort"
        type="checkbox"
        // onChange={handleChange}
        // checked={props.ordered}
      />
    </>
  );
};
export default FilterSort;
