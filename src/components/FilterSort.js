const FilterSort = (props) => {
  //console.log(props);
  const handleChange = (ev) => {
    // console.log(ev.target.value);
    props.handleFilter({
      value: ev.target.value,
      key: "sort",
    });
  };

  if (props.sortFilter === "dateAsc") {
    props.filteredgames.sort((a, b) => {
      if (a.released > b.released) {
        return 1;
      }
      if (a.released < b.released) {
        return -1;
      }
      return 0;
    });
  } else if (props.sortFilter === "dateDes") {
    props.filteredgames.sort((a, b) => {
      if (a.released < b.released) {
        return 1;
      }
      if (a.released > b.released) {
        return -1;
      }
      return 0;
    });
  } else if (props.sortFilter === "nameAsc") {
    props.filteredgames.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  } else if (props.sortFilter === "nameDes") {
    props.filteredgames.sort((a, b) => {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      return 0;
    });
  }

  return (
    <>
      <label className="filterTitle" htmlFor="sort">
        Sort
      </label>

      <select
        className="formDate__select"
        name="sort"
        value={props.sortFilter}
        id="sort"
        onChange={handleChange}
      >
        <option value="none">None</option>
        <option value="nameAsc">Name ascending</option>
        <option value="nameDes">Name descending</option>
        <option value="dateAsc">Release date ascending</option>
        <option value="dateDes">Release date descending</option>
      </select>
    </>
  );
};
export default FilterSort;
