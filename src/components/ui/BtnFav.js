const BtnFav = ({ id, favoriteGame, isFavorite }) => {
  return (
    <button
      className={isFavorite ? "favStar" : "star"}
      id={id}
      onClick={() => {
        favoriteGame(id);
      }}
    >
      {isFavorite ? (
        <i className="fa-solid fa-star"></i>
      ) : (
        // <p className="starmoji">⭐️</p>
        <i className="fa-regular fa-star"></i>
      )}
    </button>
  );
};

export default BtnFav;
