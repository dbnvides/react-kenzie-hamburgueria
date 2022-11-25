import React from "react";
import { BoxImgCartCard, StyledCartCard } from "./styled";

export const CardCart = ({ name, category, img, id, list, obj, setList }) => {
  const removeItem = (item) => {
    let newArr = list.filter((element) => element !== item);
    setList(newArr);
  };

  return (
    <StyledCartCard key={id} animate={{ y: [-50, 0, 0] }}>
      <BoxImgCartCard>
        <img src={img} alt={name} />
      </BoxImgCartCard>
      <div className="boxContent">
        <h3>{name}</h3>
        <p>{category}</p>
      </div>
      <button onClick={() => removeItem(obj)}>Remover</button>
    </StyledCartCard>
  );
};
