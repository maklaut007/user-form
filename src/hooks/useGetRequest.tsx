import { useState, useEffect } from "react";
import axios from "axios";
interface reqData {
  occupations: string[];
  states: state[];
}
interface state {
  name: string;
  abbreviation: string;
}
function useGetRequest(url: string) {
  const [data, setData] = useState<reqData | null>(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, [url]);

  return [data];
}

export default useGetRequest;
