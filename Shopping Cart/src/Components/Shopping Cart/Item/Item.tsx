import React from "react";

//? --- Components ---
import { Button } from "@mui/material";

//?  ---Style ---
import { Wrapper } from "./Item.styles";

//? --- Types ---
import { CartItemType } from "../Shop";

type ItemProps = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item = (props: ItemProps) => {
  const { item, handleAddToCart } = props;
  return (
    <Wrapper>
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
      </div>
      <Button variant="contained" onClick={() => handleAddToCart(item)}>Add To Cart</Button>
    </Wrapper>
  );
};

export default Item;
