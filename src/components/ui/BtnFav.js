const BtnFav = ({ id, cover, name }) => {
  //console.log(id);
  return (
    <button
      className="star"
      id={id}
      onClick={() => console.log({ id, name, cover })}
    >
      <i className="far fa-star"></i>
    </button>
  );
};

export default BtnFav;
