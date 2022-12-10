import { useState, useEffect } from "react";

export default function useFetchData(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(`error:{err}`));
  }, [url]);
  return { data };
}
