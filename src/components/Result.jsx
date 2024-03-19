import React, { useEffect, useState } from "react";
import { getDataFromFile } from "../api/api";
import { Link } from "react-router-dom";

const Result = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getDataFromFile();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Result of the BackEnd</h1>    
      <br></br>
      <Link 
       to ="/account"
      >Return</Link>

      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Result;
