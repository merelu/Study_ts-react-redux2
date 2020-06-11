import React, { useState, MouseEvent } from "react";
//store에 종속성을 가지고 있기 때문에 다른 프로젝트에서 재사용하기 곤란하다.
//방법읜 랩핑하는것 addNumber를 감싸는 새로운 컴포넌트(container////store을 handling한다)를 만들고 addNumber는 redux를 모르는 컴포넌트로 만듬
//화면에 표시하는것에 집중하는 컴포넌트로 만들어줌(redux와 종속성제거)
type AddNumberProps = {
  onClick: (num: any) => void;
};

const AddNumber: React.FC<AddNumberProps> = ({ onClick }) => {
  const [size, setSize] = useState(1);

  return (
    <div>
      <h1>Add Number</h1>
      <input
        type="button"
        value="+"
        onClick={() => {
          onClick(size);
        }}
      ></input>
      <input
        type="text"
        value={size}
        onChange={(e) => {
          setSize(Number(e.target.value));
        }}
      ></input>
    </div>
  );
};

export default AddNumber;
