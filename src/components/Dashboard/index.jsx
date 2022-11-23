import React, { useEffect, useState } from "react";
import { MainDashboard, StyledMenu } from "./styled.js";
import GlobalStyle from "../../styles/global";
import { ProductList } from "../ProductList";
import { Button } from "../Button/index.jsx";
import Cart from "../Cart/index.jsx";
import { api } from "../../services/api.js";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await api.get("products");
        setProducts(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getProduct();
  }, [filteredProducts]);

  const validation = (e) => {
    let prodName = products.map((e) => e.name);
    let prodValidation = prodName.includes(e);
    if (!prodValidation && e.length === 0) {
      setFilteredProducts([]);
    }
  };

  const validationCurrent = (id) => {
    if (currentSale.length > 0) {
      let prodId = currentSale.map((item) => item.id);
      let prodValidation = prodId.includes(id);
      if (prodValidation) {
        return true;
      }
      return false;
    }

    return false;
  };

  const handleClick = (id) => {
    let prod = products.filter((item) => item.id === id && item);
    let test = validationCurrent(id);
    if (!test) {
      setCurrentSale([...currentSale, ...prod]);
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
        <ProductList list={products} handleClick={handleClick} />
      ) : (
        <ProductList list={filteredProducts} />
      )}
      <Cart list={currentSale} />
    </MainDashboard>
  );
};

export default Dashboard;
