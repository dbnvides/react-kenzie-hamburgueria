import React from "react";
import { CardCart } from "./CardCart";
import { StyledMainCart } from "./styled";

const Cart = ({ list }) => {
  return (
    <StyledMainCart>
      <div className="boxTitle">
        <h3>Carrinho de compras</h3>
      </div>
      <ul>
        {list.map((item) => (
          <CardCart
            key={item.id}
            id={item.id}
            name={item.name}
            category={item.category}
            img={item.img}
          />
        ))}
      </ul>
    </StyledMainCart>
  );
};

export default Cart;
