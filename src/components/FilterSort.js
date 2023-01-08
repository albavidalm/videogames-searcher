const FilterSort = ({ handleFilter, sortFilter, filteredgames }) => {
  const handleChange = (ev) => {
    handleFilter({
      value: ev.target.value,
      key: "sort",
    });
  };

  if (sortFilter === "dateAsc") {
    filteredgames.sort((a, b) => {
      if (a.released > b.released) {
        return 1;
      }
      if (a.released < b.released) {
        return -1;
      }
      return 0;
    });
  } else if (sortFilter === "dateDes") {
    filteredgames.sort((a, b) => {
      if (a.released < b.released) {
        return 1;
      }
      if (a.released > b.released) {
        return -1;
      }
      return 0;
    });
  } else if (sortFilter === "nameAsc") {
    filteredgames.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  } else if (sortFilter === "nameDes") {
    filteredgames.sort((a, b) => {
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
        value={sortFilter}
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
