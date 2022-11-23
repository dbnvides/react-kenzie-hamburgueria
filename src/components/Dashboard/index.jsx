import React, { useEffect, useState } from "react";
import { MainDashboard, StyledMenu } from "./styled.js";
import GlobalStyle from "../../styles/global";
import { ProductList } from "../ProductList";
import { Button } from "../Button/index.jsx";
import Cart from "../Cart/index.jsx";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((err) => console.log(err));
  }, [filteredProducts]);

  const validation = (e) => {
    let prodName = products.map((e) => e.name);
    let prodValidation = prodName.includes(e);
    if (!prodValidation && e.length === 0) {
      setFilteredProducts([]);
    }
  };

  const showProducts = (e) => {
    e.preventDefault();
    let findItem = e.target.elements.nameProduct.value;
    let nameProd = products.filter((prod) => prod.name === findItem);
    if (nameProd.length > 0) {
      setFilteredProducts(nameProd);
    }
  };

  return (
    <MainDashboard>
      <GlobalStyle />
      <StyledMenu>
        <div>
          <h2>
            Burguer <span>Kenzie</span>
          </h2>
        </div>
        <form onSubmit={(e) => showProducts(e)}>
          <input
            type="text"
            name="nameProduct"
            placeholder="Digite seu lanche aqui..."
            onChange={(e) => validation(e.target.value)}
          />
          <Button type={"submit"}>Pesquisar</Button>
        </form>
      </StyledMenu>

      {filteredProducts.length === 0 ? (
        <ProductList list={products} />
      ) : (
        <ProductList list={filteredProducts} />
      )}
      <Cart list={products} />
    </MainDashboard>
  );
};

export default Dashboard;
