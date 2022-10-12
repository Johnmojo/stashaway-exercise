/**
 * Main layout wrapper
 * @date 6th September 2022
 */

import Header from "../Navigation/Header";
import Footer from "../Navigation/Footer";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Template = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Template;
