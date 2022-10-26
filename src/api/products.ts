import axios from "axios";
import { base_url } from "./base";

export const getAllProducts = () => {
  return axios.get(`${base_url}/products`);
};

export const getProductById = (id: number) => {
  return axios.get(`${base_url}/products/${id}`);
};

export const createProduct = (user: any) => {
  return axios.post(`${base_url}/products`, user);
};

export const updateProduct = (id: number, user: any) => {
  return axios.put(`${base_url}/products/${id}`, user);
};

export const deleteProduct = (id: number) => {
  return axios.delete(`${base_url}/products/${id}`);
};
