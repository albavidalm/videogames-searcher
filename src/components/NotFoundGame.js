import { Link } from "react-router-dom";

const NotFoundGame = () => {
  return (
    <>
      <Link className="goback" to="/">
        ⬅️ Go back
      </Link>
      <h2>NotFoundGame</h2>
    </>
  );
};

export default NotFoundGame;
