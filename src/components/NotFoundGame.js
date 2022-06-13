import BtnHome from "./ui/BtnHome";

const NotFoundGame = () => {
  return (
    <>
      <h2 className="notFound__title">We can't find this game</h2>
      <BtnHome />
      <img
        alt="broken arcade"
        src="https://i.giphy.com/media/WSbKh5vqVHLee9u6bu/giphy.webp"
        className="notPage notFound__img"
      />
    </>
  );
};

export default NotFoundGame;
