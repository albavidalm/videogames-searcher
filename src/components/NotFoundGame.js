import BtnHome from "./ui/BtnHome";

const NotFoundGame = () => {
  return (
    <>
      <h2 className="notFound__title">We can't find this game</h2>
      <BtnHome />
      <img
        alt="broken arcade"
        // src="https://i.giphy.com/media/WSbKh5vqVHLee9u6bu/giphy.webp"
        src="https://i.gifer.com/origin/3d/3d4055fab306bd9e1770081721fe85c4.gif"
        className="notPage notFound__img"
      />
    </>
  );
};

export default NotFoundGame;
