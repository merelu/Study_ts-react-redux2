import React, { useState } from "react";
import store from "../store";
type DisplayNumberProbs = {
  number: number;
};
const DisplayNumber: React.FC<DisplayNumberProbs> = ({ number }) => {
  // store에 있는 state를 사용하기 위해 getState().xx사용
  return (
    <div>
      <h1>Display Number</h1>
      <input type="text" value={number} readOnly></input>
    </div>
  );
};

export default DisplayNumber;
