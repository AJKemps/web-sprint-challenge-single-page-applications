import React from "react";
import { Card } from "./Styles";
import { AnimatePresence } from "framer-motion";

export default function Order(props) {
  const { details } = props;

  return (
    <AnimatePresence>
      <Card
        exit={{ opacity: 0, x: 100 }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        <div className="userCard">
          <h2>Order Confirmed!</h2>
          <h3>Name: {details.name}</h3>
          <p>Size: {details.size}</p>
          <h4>Toppings:</h4>
          <li>Pepperoni: {details.pepperoni.toString()}</li>
          <li>Pineapple: {details.pineapple.toString()}</li>
          <li>Banana Peppers: {details.bananaPeppers.toString()}</li>
          <li>Green Peppers: {details.greenPepper.toString()}</li>
          <p>Special instructions: {details.special.toString()}</p>
        </div>
      </Card>
    </AnimatePresence>
  );
}
