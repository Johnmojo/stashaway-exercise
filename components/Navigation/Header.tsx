import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/future/image";
import Arrow from "../SVG/Arrow";

const Header: NextPage = () => {
  return (
    <header>
      <div className="z-50 w-full pt-8 pb-8 md:block">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between px-8">
          <div className="cursor-pointer">
            <Link href="/">
              <a aria-label="Homepage">
                <Image
                  src="/images/stashaway_logo.png"
                  width="250"
                  height="59"
                  className="w-auto h-full"
                  alt="StashAway logo"
                />
              </a>
            </Link>
          </div>
          <nav>
            <ul className="text-base space-x-10 flex">
              <li className="py-2 font-semibold">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li className="py-2 font-semibold">
                <Link href="/">
                  <a>Manage deposits</a>
                </Link>
              </li>
              <li className="py-2 font-semibold">
                <Link href="/">
                  <a>Refer a friend</a>
                </Link>
              </li>
              <li className="py-2 font-semibold">
                <Link href="/">
                  <a>Support</a>
                </Link>
              </li>
              <div className="py-2 font-semibold cursor-pointer flex space-x-1">
                <div className="">Oliver</div>
                <div className="pt-1">
                  <Arrow />
                </div>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
