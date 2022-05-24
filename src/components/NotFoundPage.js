import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <>
      <Link className="goback" to="/">
        ⬅️ Go back
      </Link>
      <h2>NotFoundPage</h2>
    </>
  );
};

export default NotFoundPage;
