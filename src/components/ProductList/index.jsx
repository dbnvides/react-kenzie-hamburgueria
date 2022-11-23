import Card from "./Card";
import { StyledProduct } from "./styled";

export const ProductList = ({ list }) => {
  return (
    <StyledProduct>
      {list.map(
        ({ name, category, price, img }, id) =>
          name && (
            <Card
              key={id}
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
