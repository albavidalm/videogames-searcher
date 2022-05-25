import FilterByName from "./FilterByName";
import FilterByGenre from "./FilterByGenre";
import FilterByPlatform from "./FilterByPlatform";
import FilterSortByName from "./FilterSortByName";
import FilterSortByDate from "./FilterSortByDate";

const Filters = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <FilterByName
          handleFilter={props.handleFilter}
          nameFilter={props.nameFilter}
        />
        <FilterByGenre
          genres={props.genres}
          handleFilter={props.handleFilter}
          genreFilter={props.genreFilter}
        />
        <FilterByPlatform
          handleFilter={props.handleFilter}
          platformFilter={props.platformFilter}
        />
        <FilterSortByName
          handleFilter={props.handleFilter}
          sortNameFilter={props.sortNameFilter}
        />
        <FilterSortByDate
          handleFilter={props.handleFilter}
          sortDateFilter={props.sortDateFilter}
        />
      </form>
    </section>
  );
};

export default Filters;
