import BtnHome from "./ui/BtnHome";

const NotFoundPage = () => {
  return (
    <>
      <h2 className="notFound__title">We can't find this page</h2>
      <BtnHome />
      <img
        alt="pc searching"
        src="https://i.giphy.com/media/xT9IgFLfWUZigjoem4/giphy.webp"
        className="notPage notFound__img"
      />
    </>
  );
};

export default NotFoundPage;
