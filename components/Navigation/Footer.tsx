import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div>© 2018 Asia Wealth Platform Pte Ltd</div>
      <div> Licensed by the Monetary Authority of Singapore</div>
      <div>
        <Link href="/">
          <a>Privacy</a>
        </Link>
        <Link href="/">
          <a>Platform Agreement</a>
        </Link>
        <Link href="/">
          <a>Support</a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
