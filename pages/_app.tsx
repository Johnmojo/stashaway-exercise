import "../styles/globals.css";
import type { AppProps } from "next/app";
import Template from "../components/Layout/Template";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Template>
      <Component {...pageProps} />
    </Template>
  );
};

export default App;
