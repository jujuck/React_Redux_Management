import { createReducer } from "@reduxjs/toolkit";
import { quantity, status, addProduct } from "./actions";

const shoppingList = [
  {
    id: 1,
    product: "Lait",
    brand: "Lactel",
    quantity: 2,
    store: "Carrefour",
    status: "to buy",
  },
  {
    id: 2,
    product: "Pain",
    brand: "Boulangerie Paul",
    quantity: 3,
    store: "Auchan",
    status: "done",
  },
  {
    id: 3,
    product: "Pâtes",
    brand: "Barilla",
    quantity: 5,
    store: "Leclerc",
    status: "to buy",
  },
  {
    id: 4,
    product: "Yaourt",
    brand: "Yoplait",
    quantity: 6,
    store: "Carrefour",
    status: "cancelled",
  },
  {
    id: 5,
    product: "Beurre",
    brand: "Président",
    quantity: 1,
    store: "Auchan",
    status: "done",
  },
  {
    id: 6,
    product: "Eau",
    brand: "Evian",
    quantity: 4,
    store: "Leclerc",
    status: "to buy",
  },
  {
    id: 7,
    product: "Jus d'orange",
    brand: "Tropicana",
    quantity: 2,
    store: "Carrefour",
    status: "done",
  },
  {
    id: 8,
    product: "Fromage",
    brand: "Babybel",
    quantity: 10,
    store: "Auchan",
    status: "to buy",
  },
];
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
