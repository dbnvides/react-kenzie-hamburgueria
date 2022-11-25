import React from "react";
import { CardCart } from "./CardCart";
import { StyledBoxEmpty, StyledCart, StyledMainCart } from "./styled";

const Cart = ({ list, setList }) => {
  const emptyList = () => {
    setList([]);
  };

  const totalPrice = () => {
    if (list.length > 0) {
      let filterPrice = list.map((item) => item.price);
      let totalValue = filterPrice.reduce((el, elv) => (el += elv));
      return totalValue;
    }
  };

  let totalCash = totalPrice();

  return (
    <StyledMainCart>
      <div className="boxTitle">
        <h3>Carrinho de compras</h3>
      </div>
      {list.length === 0 ? (
        <StyledBoxEmpty>
          <h3>Sua sacola está vazia</h3>
          <p>Adicione itens</p>
        </StyledBoxEmpty>
      ) : (
        <StyledCart>
          <ul>
            {list.map((item) => (
              <CardCart
                setList={setList}
                list={list}
                obj={item}
                key={item.id}
                id={item.id}
                name={item.name}
                category={item.category}
                img={item.img}
              />
            ))}
          </ul>
          <div className="allValue">
            <p>Total</p>
            <span>
              {totalCash.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
          <button className="btnRemoveAll" onClick={() => emptyList()}>
            Remover todos
          </button>
        </StyledCart>
      )}
    </StyledMainCart>
  );
};

export default Cart;
