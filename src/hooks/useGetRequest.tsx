import { useState, useEffect } from "react";
import axios from "axios";

function useGetRequest(url: string) {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, [url]);

  return [data];
}

export default useGetRequest;
