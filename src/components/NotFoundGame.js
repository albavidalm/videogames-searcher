import { Link } from "react-router-dom";

const NotFoundGame = (props) => {
  return (
    <>
      <Link className="goback" to="/">
        ⬅️ Go back
      </Link>
      <h2>NotFoundGame</h2>
      <p>There is no game that matches {props.nameFilter}</p>
    </>
  );
};

export default NotFoundGame;
