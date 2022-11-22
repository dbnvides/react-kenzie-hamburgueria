import React, { useEffect, useState } from "react";
import { MainDashboard } from "./styled.js";
import GlobalStyle from "../../styles/global";
import { Menu } from "../Menu";
import { ProductList } from "../ProductList";

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
  }, []);

  return (
    <MainDashboard>
      <GlobalStyle />
      <Menu />
      <ProductList list={products} />
    </MainDashboard>
  );
};

export default Dashboard;
