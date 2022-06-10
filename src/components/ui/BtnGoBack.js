import { Link } from "react-router-dom";

const BtnGoBack = () => {
  return (
    <div className="box-btn">
      <Link className="goback btn btn-white btn-animate" to="/">
        <i className="fa-solid fa-arrow-left"></i> Go back
      </Link>
    </div>
  );
};

export default BtnGoBack;
