import FilterByName from "./FilterByName";
import FilterByGenre from "./FilterByGenre";
import FilterByPlatform from "./FilterByPlatform";
import FilterSort from "./FilterSort";

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
        <FilterSort
          handleFilter={props.handleFilter}
          sortFilter={props.sortFilter}
        />
      </form>
    </section>
  );
};

export default Filters;
