import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/future/image";
import { ArrowDropdown } from "@components/index";

const Header: NextPage = () => {
  return (
    <header className="bg-stashaway-blue">
      <div className="z-50 w-full px-8 pt-8 pb-8 mx-auto max-w-screen-2xl md:block">
        <div className="flex items-center place-content-between">
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
            <ul className="flex space-x-10 text-base font-akkurat">
              <li className="py-2 text-stashaway-cyan">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li className="py-2 text-stashaway-white">
                <Link href="/">
                  <a>Manage deposits</a>
                </Link>
              </li>
              <li className="py-2 text-stashaway-white">
                <Link href="/">
                  <a>Refer a friend</a>
                </Link>
              </li>
              <li className="py-2 text-stashaway-white">
                <Link href="/">
                  <a>Support</a>
                </Link>
              </li>
              <div className="flex py-2 space-x-1 cursor-pointer text-stashaway-white">
                <div className="">Oliver</div>
                <div className="w-5 h-5 pt-1 fill-stashaway-white">
                  <ArrowDropdown />
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
