import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(url)
          .then((res) => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setData(result);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          );

          return () => console.log('cleanup')
      }, [url]);

      return { data, isLoaded, error }
}
export default useFetch