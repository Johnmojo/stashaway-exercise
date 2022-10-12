import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="space-y-2 text-center flex flex-col items-center py-24">
        <div className="text-sm text-stashaway-darkGrey font-akkurat">
          © 2018 Asia Wealth Platform Pte Ltd
        </div>
        <div className="text-sm text-stashaway-darkGrey font-akkurat">
          Licensed by the Monetary Authority of Singapore
        </div>
        <div className="text-stashaway-cyan flex font-sans text-sm space-x-2">
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
