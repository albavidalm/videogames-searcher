import defaultImage from "../assets/images/default.jpg";
const Favorites = ({ favorites, favoriteGame }) => {
  console.log(favorites);
  return (
    <section className="favorites">
      <h3 className="favorites__title">Favorites</h3>
      {favorites.length === 0 ? (
        <>
          <p>There are no games in here. Add yours!</p>
          <img src={defaultImage} alt="moment" />
        </>
      ) : (
        <>
          <h3>{favorites.name}</h3>
          <img src={favorites.cover} alt="game" />
        </>
      )}
    </section>
  );
};
export default Favorites;

//map the favorites array to extract each necessary game information to render it
