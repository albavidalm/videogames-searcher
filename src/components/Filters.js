import FilterByName from "./FilterByName";
import FilterByGenre from "./FilterByGenre";
import FilterByPlatform from "./FilterByPlatform";
import FilterSort from "./FilterSort";

const Filters = (props) => {
  return (
    <section>
      <form>
        <FilterByName handleFilter={props.handleFilter} />
        <FilterByGenre handleFilter={props.handleFilter} />
        <FilterByPlatform />
        <FilterSort />
      </form>
    </section>
  );
};

export default Filters;
