function Footer() {
  return (
    <footer className="footer page__footer section_size_narrow section">
      <p className="footer__copyright">&copy;{` ${new Date().getFullYear()} Mesto Russia`}</p>
    </footer>
  );
}

export default Footer;
