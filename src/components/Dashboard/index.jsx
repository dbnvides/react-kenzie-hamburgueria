import React, { useEffect, useState } from "react";
import {
  InputName,
  MainDashboard,
  Menu,
  ResultSearch,
  SectionDashboard,
  StyledMenu,
} from "./styled.js";
import GlobalStyle from "../../styles/global";
import { ProductList } from "../ProductList";
import { Button } from "../Button/index.jsx";
import Cart from "../Cart/index.jsx";
import { api } from "../../services/api.js";
import Container from "../Container/index.jsx";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [nameSearch, setNameSearch] = useState("");
  const [currentSale, setCurrentSale] = useState([]);

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
  }, []);

  const validation = (e) => {
    let prodName = products.map((e) => e.name);
    let prodCategory = products.map((e) => e.category);
    let prodValidation = prodName.includes(e);
    let prodValidationCategory = prodCategory.includes(e);
    if (!prodValidation || !prodValidationCategory) {
      if (e.length === 0) {
        setFilteredProducts([]);
      }
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
    } else {
      toast.error("Produto ja adicionado");
    }
  };

  const showProducts = (e) => {
    e.preventDefault();
    let findItem = e.target.elements.nameProduct.value;
    setNameSearch(findItem);
    let nameProd = products.filter((prod) => prod.name === findItem);
    let nameCategory = products.filter((prod) => prod.category === findItem);
    if (nameProd.length > 0) {
      return setFilteredProducts(nameProd);
    }
    if (nameCategory.length > 0) {
      return setFilteredProducts(nameCategory);
    }
    return toast.error("Produto não encontrado");
  };

  return (
    <MainDashboard>
      <GlobalStyle />
      <Menu>
        <Container>
          <StyledMenu>
            <div>
              <h2>
                Burguer <span className="titleLogo">Kenzie</span>
              </h2>
            </div>
            <form onSubmit={(e) => showProducts(e)}>
              <input
                type="text"
                name="nameProduct"
                placeholder="Digite seu produto aqui..."
                onChange={(e) => validation(e.target.value)}
              />
              <Button type={"submit"}>Pesquisar</Button>
            </form>
          </StyledMenu>
        </Container>
      </Menu>
      <Container>
        <SectionDashboard>
          {filteredProducts.length === 0 ? (
            <ProductList list={products} handleClick={handleClick} />
          ) : (
            <ResultSearch>
              <div className="boxItem">
                <h2 className="titleSearch">
                  Resultados para: <InputName>{nameSearch}</InputName>
                </h2>
                <Button
                  className={"btnClearList"}
                  onClick={() => setFilteredProducts([])}
                >
                  Limpar busca
                </Button>
              </div>
              <ProductList list={filteredProducts} handleClick={handleClick} />
            </ResultSearch>
          )}

          <Cart list={currentSale} setList={setCurrentSale} />
        </SectionDashboard>
      </Container>
    </MainDashboard>
  );
};

export default Dashboard;
