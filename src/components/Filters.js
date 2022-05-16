import FilterByName from "./FilterByName";
import FilterByGenre from "./FilterByGenre";
import FilterByPlatform from "./FilterByPlatform";
import FilterSort from "./FilterSort";

const Filters = (props) => {
  return (
    <setcion>
      <form>
        <FilterByName />
        <FilterByGenre />
        <FilterByPlatform />
        <FilterSort />
      </form>
    </setcion>
  );
};

export default Filters;
