import { Link } from "react-router-dom";

const BtnHome = () => {
  return (
    <div className="home box-btn">
      <Link className="home btn btn-white btn-animate" to="/">
        <i className="fa-solid fa-house-chimney"></i> Go back Home
      </Link>
    </div>
  );
};

export default BtnHome;
