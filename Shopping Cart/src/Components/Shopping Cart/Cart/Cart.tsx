import React from "react";
import { CartItemType } from "../Shop";
import CartItem from "../CartItem/CartItem";
import { Wrapper } from "./Cart.styles";

type CartProps = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart = ({ cartItems, addToCart, removeFromCart }: CartProps) => {
  const calculateTotalAmt = (items: CartItemType[]) => {
    return items.reduce((acc: number, item) => acc + item.amount * item.price, 0)

  }
  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No Items In the Cart</p> : null}
      {cartItems.map((item: CartItemType) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total Amount: ${calculateTotalAmt(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
};

export default Cart;
