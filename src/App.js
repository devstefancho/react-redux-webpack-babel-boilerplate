import React from "react";
import Count from "./components/Count";
import Fetch from "./components/Fetch";
import { useSelector } from "react-redux";

export const App = () => {
  const { load, data } = useSelector((state) => state.ExampleFetchReducer);
  return (
    <>
      <h1>Hello World!</h1>
      <Count />
      <Fetch load={load} data={data} />
    </>
  );
};
