import React, { useEffect, useState } from "react";
import axios from "axios";
import Fact from "./Fact";

const Facts = (props) => {
  const [facts, setFacts] = useState([]);
  // empty array will make use effect run only on mount (intial render)
  useEffect(() => {
    console.log("Fact component mounting");
    getFacts();

    return () => {
      // eventlistners, timers we want to remove/stop
      console.log("Fact component unmounting");
    };
  }, []);

  const getFacts = async () => {
    try {
      let res = await axios.get("/api/facts");
      setFacts(res.data);
      // console.log(res);
      console.log("facts here in res.data:", res.data);
    } catch (error) {
      alert("err occured getting fact check conosle/server");
      console.log(error);
    }
  };

  const renderFacts = () => {
    return facts.map((f) => <Fact key={f.id} {...f} />);
  };
  return (
    <div>
      <h1>Facts</h1>
      {renderFacts()}
    </div>
  );
};

export default Facts;
