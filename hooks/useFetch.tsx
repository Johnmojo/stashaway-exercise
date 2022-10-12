import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState<Object | null>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      // Set it to true whenever it is fetching
      setLoading(true);

      try {
        // Fetch the endpoint
        const res = await fetch(url);
        const json = res.json();

        // Set the data from our JSON and toggle back
        setData(json);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
