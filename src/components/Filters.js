import FilterByName from "./FilterByName";
import FilterByGenre from "./FilterByGenre";
import FilterByPlatform from "./FilterByPlatform";
import FilterSort from "./FilterSort";
import ResetButton from "./ResetButton";

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
        <div className="form__select">
          <FilterByPlatform
            handleFilter={props.handleFilter}
            platformFilter={props.platformFilter}
          />
          <FilterSort
            handleFilter={props.handleFilter}
            sortFilter={props.sortFilter}
            filteredgames={props.filteredGames}
          />
        </div>
        <>
          <h3 className="filterTitle">Genre</h3>
          <FilterByGenre
            genres={props.genres}
            handleFilter={props.handleFilter}
            genreFilter={props.genreFilter}
          />
        </>
        <ResetButton handleReset={props.handleReset} />
      </form>
    </section>
  );
};

export default Filters;
