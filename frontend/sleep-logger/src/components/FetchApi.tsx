"use client";

import React, { useEffect, useState } from "react";

const FetchApi = () => {
  const [apiRes, setApiRes] = useState();

  const fetchData = async () => {
    const response = await fetch("http://localhost:5206/getLogs");
    const data = await response.json();

    console.log(data);
    console.log(data.bsLine);
    setApiRes(data.bsLine);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>fetchApi {apiRes}</div>;
};

export default FetchApi;
