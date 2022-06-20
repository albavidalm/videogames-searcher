const NotFoundSearch = ({ nameFilter, handleReset }) => {
  return (
    <>
      <h2 className="notFound__title">
        No video game matches your search{" "}
        <span className="notFound__name">{nameFilter}</span>
      </h2>
      <p className="notFound__text">
        Try again - check your spelling or enter less specific search terms.
      </p>

      <img
        src="https://c.tenor.com/0SK8wi-u_gYAAAAd/no-signal-tv.gif"
        alt="not signal tv"
        className="notFound__img"
      />
    </>
  );
};

export default NotFoundSearch;
