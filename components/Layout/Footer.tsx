import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col items-center px-8 py-24 space-y-2 text-center">
        <div className="text-sm text-stashaway-darkGrey font-akkurat">
          © 2018 Asia Wealth Platform Pte Ltd
        </div>
        <div className="text-sm text-stashaway-darkGrey font-akkurat">
          Licensed by the Monetary Authority of Singapore
        </div>
        <div className="flex space-x-2 font-sans text-sm text-stashaway-cyan">
          <Link href="/">
            <a>Privacy</a>
          </Link>
          <div>|</div>
          <Link href="/">
            <a>Platform Agreement</a>
          </Link>
          <div>|</div>
          <Link href="/">
            <a>Support</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
