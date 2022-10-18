import type { NextPage } from "next";
import { General } from "../components";

import Head from "next/head";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>StashAway Demo</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Lorem Ipsum" />
        <meta name="author" content="Johnny Chai" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <General />
    </>
  );
};

export default Index;
