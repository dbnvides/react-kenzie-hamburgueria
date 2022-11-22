import React from "react";
import { StyledMenu } from "./styled";

export const Menu = () => {
  return (
    <StyledMenu>
      <div>
        <h2>
          Burguer <span>Kenzie</span>
        </h2>
      </div>
      <form>
        <input type="text" placeholder="Digite seu lanche aqui..." />
        <button type="submit">Pesquisar</button>
      </form>
    </StyledMenu>
  );
};
