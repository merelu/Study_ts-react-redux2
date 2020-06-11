import React, { MouseEvent } from "react";
import Container_AddNumber from "../containers/Container_AddNumber";

// type AddNumberRootProps = {
//   number: number;
//   setNumber: (num: number) => void;
// };

const AddNumberRoot: React.FC = () => {
  return (
    <div>
      <h1>Add Number Root</h1>
      <Container_AddNumber />
    </div>
  );
};

export default AddNumberRoot;
