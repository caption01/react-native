import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export const useResults = () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    searchApi("pizza");
  }, []);

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          term: searchTerm,
          location: "san jose",
          limit: 50,
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      console.log(err.message);
      setErrorMessage("Something went wrong");
    }
  };

  return [searchApi, results, errorMessage];
};
