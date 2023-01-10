import { useState, useEffect } from "react";
import axios from "axios";

function useGetRequest(url: string, body: string) {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .post(url, body)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url, body]);

  return [data];
}

export default useGetRequest;
