import { Product } from "../models/product.model";

export const saveCartInLocalStorage = (cartProducts: Product[]) => {
  const cartJSON = JSON.stringify(cartProducts);

  localStorage.setItem("cartProducts", cartJSON);
};

export const loadCartFromLocalStorage = (): Product[] => {
  const cartJSON = localStorage.getItem("cartProducts");

  if (!cartJSON) return [];

  return JSON.parse(cartJSON);
};
