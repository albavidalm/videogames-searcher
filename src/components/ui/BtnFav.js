const BtnFav = ({ id, favoriteGame, isFavorite }) => {
  return (
    <button
      className="star"
      id={id}
      onClick={() => {
        favoriteGame(id);
      }}
    >
      <i className={isFavorite ? "far fa-star" : "fas fa-star"}></i>
    </button>
  );
};

export default BtnFav;
