import Head from "next/head";

interface Props {
  title: string;
  description: string;
}

const HeaderMeta = ({ title, description }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="author" content="Johnny Chai" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    </>
  );
};

export default HeaderMeta;
