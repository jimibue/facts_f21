import React, { useEffect } from "react";
import axios from "axios";

const Facts = (props) => {
  // empty array will make use effect run only on mount (intial render)
  useEffect(() => {
    getFacts();
  }, []);

  const getFacts = async () => {
    try {
      let res = await axios.get("/api/facts");
      console.log(res);
      console.log("facts here in res.data:", res.data);
    } catch (error) {
      alert("err occured getting fact check conosle/server");
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Facts</h1>
    </div>
  );
};

export default Facts;
