import type { NextPage } from "next";
import { HeaderMeta, General } from "@components/index";

const Index: NextPage = () => {
  return (
    <>
      <HeaderMeta title="StashAway Demo" description="Some Content" />
      <General />
    </>
  );
};

export default Index;
