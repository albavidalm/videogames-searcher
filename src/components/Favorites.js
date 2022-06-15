import defaultImage from "../assets/images/default.jpg";
const Favorites = () => {
  return (
    <section className="favorites">
      <h3 className="favorites__title">Favorites</h3>
      <img src={defaultImage} alt="moment" />
    </section>
  );
};
export default Favorites;
