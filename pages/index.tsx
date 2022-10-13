import type { NextPage } from "next";
import useFetch from "../hooks/useFetch";
import GeneralInvesting from "../components/Hero/GeneralInvesting";

const Index: NextPage = () => {
  // Import a custom hook to fetch data
  const { loading, error, data } = useFetch(
    "https://jsonplaceholder.typicode.com/todos?&_limit=5"
  );

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>Error</h1>;

  return (
    <>
      <GeneralInvesting />
    </>
  );
};

export default Index;
