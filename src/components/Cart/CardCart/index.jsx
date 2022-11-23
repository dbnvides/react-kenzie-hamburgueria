import React from "react";
import { BoxImgCartCard, StyledCartCard } from "./styled";

export const CardCart = ({ name, category, img, id }) => {
  return (
    <StyledCartCard key={id}>
      <BoxImgCartCard>
        <img src={img} alt={name} />
      </BoxImgCartCard>
      <div className="boxContent">
        <h3>{name}</h3>
        <p>{category}</p>
      </div>
      <button>Remover</button>
    </StyledCartCard>
  );
};
