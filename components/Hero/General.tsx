import Link from "next/link";
import Overview from "../Section/Overview";
import ArrowLeft from "../SVG/ArrowLeft";
import ArrowDropdown from "../SVG/ArrowDropdown";

// General Investing Hero
const General = () => {
  return (
    <>
      <section className="bg-stashaway-blue">
        <div className="w-full pt-4 mx-auto max-w-screen-2xl md:block">
          <div className="pb-12 space-y-4">
            <div>
              <Link href="/">
                <a className="flex items-center space-x-2 font-semibold text-stashaway-cyan font-metropolis">
                  <div>
                    <ArrowLeft />
                  </div>
                  <div>Overview</div>
                </a>
              </Link>
            </div>
            <div>
              <h1 className="text-4xl font-bold font-metropolis text-stashaway-white">
                General investing
              </h1>
            </div>
          </div>
          <div className="flex place-content-between">
            <ul className="flex space-x-12 text-stashaway-white font-akkurat">
              <li className="relative py-4 after:content-[''] after:block after:h-1 after:w-full after:bg-stashaway-cyan after:absolute after:bottom-0">
                <Link href="/">
                  <a className="text-stashaway-cyan">Overview</a>
                </Link>
              </li>
              <li className="relative py-4">
                <Link href="/">
                  <a className="">Assets</a>
                </Link>
              </li>
              <li className="relative py-4">
                <Link href="/">
                  <a className="">Projection</a>
                </Link>
              </li>
              <li className="relative py-4">
                <Link href="/">
                  <a className="">Benchmark</a>
                </Link>
              </li>
            </ul>
            <div className="relative py-4">
              <Link href="/">
                <a className="flex items-center space-x-1 text-stashaway-white">
                  <div>More actions</div>
                  <div className="w-4 h-4 pt-[0.75]">
                    <ArrowDropdown />
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Overview />
      </section>
    </>
  );
};

export default General;
