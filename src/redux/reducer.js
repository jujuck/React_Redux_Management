import { createReducer } from "@reduxjs/toolkit";
import { quantity, status, addProduct } from "./actions";
import shoppingList from "../assets/shop";

let id = 8;

const shopsReducer = createReducer(shoppingList, (builder) => {
  builder
    .addCase(quantity, (state, { payload }) => {
      // "mutate" the object by overwriting a field
      state[payload.index].quantity = payload.quantity;
    })
    .addCase(status, (state, { payload }) => {
      // "mutate" the object by overwriting a field
      state[payload.index].status = payload.status;
    })
    .addCase(addProduct, (state, { payload }) => {
      id++;
      state.push({ ...payload, id });
    });
});

export const reducer = {
  shops: shopsReducer,
};
