//1:1관계가 아니라 1:n도가능
import React from "react";
import AddNumber from "../components/AddNumber";
import store from "../store";

export default () => {
  const onClick = (size: any) => {
    store.dispatch({ type: "INCREMENT", size: size });
  };
  return <AddNumber onClick={onClick} />;
};
