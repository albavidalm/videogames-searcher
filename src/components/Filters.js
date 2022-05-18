import FilterByName from "./FilterByName";
import FilterByGenre from "./FilterByGenre";
import FilterByPlatform from "./FilterByPlatform";
import FilterSort from "./FilterSort";
// import ResetButton from "./ResetButton";

const Filters = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <FilterByName handleFilter={props.handleFilter} />
        <FilterByGenre handleFilter={props.handleFilter} />
        <FilterByPlatform handleFilter={props.handleFilter} />
        <FilterSort handleFilter={props.handleFilter} />
      </form>
    </section>
  );
};

export default Filters;
