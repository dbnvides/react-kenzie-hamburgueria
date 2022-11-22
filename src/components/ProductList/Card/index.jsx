import React from "react";
import { Button } from "../../Button";
import { BoxContentCard, BoxImgCard, StyledCard } from "./styled";

const Card = ({ name, category, price, img, id }) => {
  return (
    <StyledCard key={id}>
      <BoxImgCard>
        <img src={img} alt={name} />
      </BoxImgCard>
      <BoxContentCard>
        <h2>{name}</h2>
        <p>{category}</p>
        <span>{price}</span>
        <Button>Adicionar</Button>
      </BoxContentCard>
    </StyledCard>
  );
};

export default Card;
