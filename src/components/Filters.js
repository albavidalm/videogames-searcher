import FilterByName from "./FilterByName";
import FilterByGenre from "./FilterByGenre";
import FilterByPlatform from "./FilterByPlatform";
import FilterSort from "./FilterSort";
import ResetButton from "./ResetButton";

const Filters = ({
  genres,
  handleFilter,
  nameFilter,
  platformFilter,
  genreFilter,
  sortFilter,
  filteredGames,
  handleReset,
}) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <FilterByName handleFilter={handleFilter} nameFilter={nameFilter} />
        <div className="form__select">
          <FilterByPlatform
            handleFilter={handleFilter}
            platformFilter={platformFilter}
          />
          <FilterSort
            handleFilter={handleFilter}
            sortFilter={sortFilter}
            filteredgames={filteredGames}
          />
        </div>
        <>
          <h3 className="filterTitle titleGenre">Genre</h3>
          <FilterByGenre
            genres={genres}
            handleFilter={handleFilter}
            genreFilter={genreFilter}
          />
        </>
        <ResetButton handleReset={handleReset} />
      </form>
    </>
  );
};

export default Filters;
