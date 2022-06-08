const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__author">Alba Vidal</p>
      <a
        className="footer__link"
        href="mailto:albavidalm@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fas fa-envelope"></i>
      </a>
      <a
        className="footer__link"
        href="https://www.linkedin.com/in/albavidalm/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-linkedin"></i>
      </a>
      <a
        className="footer__link"
        href="https://github.com/albavidalm"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-github"></i>
      </a>
    </footer>
  );
};

export default Footer;
