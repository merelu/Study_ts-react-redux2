import DisplayNumber from "../components/DisplayNumber";
import React, { useState } from "react";
import store from "../store";

export default () => {
  const [number, setNumber] = useState(store.getState().number);
  const subNum = () => {
    setNumber(store.getState().number);
  };
  store.subscribe(subNum);
  return <DisplayNumber number={number} />;
};
