const Header = () => {
  return (
    <header className="header">
      {/* Remove this div, check why the . in the css doesn't work. */}
      <div className="emptyCell"></div>
      <h1 className="header__title">Video GAmes</h1>
    </header>
  );
};

export default Header;
