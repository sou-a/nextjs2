import { useEffect, useState } from "react";

export const useFetchData = () => {
  const [data, setData] = useState({
    subscribers: 0,
    stars: 0,
  });

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://api.github.com/repos/facebook/react");
      const resJson = await res.json();
      setData({ stars: resJson.stargazers_count, subscribers: 0 });
      console.log(resJson.stargazers_count);
    }
    fetchData();
  }, []);

  return { data };
};
