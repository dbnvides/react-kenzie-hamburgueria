import Card from "./Card";
import { StyledProduct } from "./styled";

export const ProductList = ({ list, handleClick }) => {
  return (
    <StyledProduct>
      {list.map(
        ({ name, category, price, img, id }) =>
          name && (
            <Card
              handleClick={handleClick}
              key={id}
              id={id}
              name={name}
              category={category}
              price={price}
              img={img}
            ></Card>
          )
      )}
    </StyledProduct>
  );
};
