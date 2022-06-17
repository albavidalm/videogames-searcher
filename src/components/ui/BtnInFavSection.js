const BtnInFavSection = ({ id, favoriteGame, isFavorite }) => {
  return (
    <button
      className="favDelete"
      id={id}
      onClick={() => {
        favoriteGame(id);
      }}
    >
      <i class="fas fa-xmark"></i>
    </button>
  );
};

export default BtnInFavSection;
