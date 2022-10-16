import axios from "axios";
const base_url = "http://localhost:3000";

export const getAllUsers = () => {
  return axios.get(`${base_url}/users`);
};

export const getUserById = (id: number) => {
  return axios.get(`${base_url}/users/${id}`);
};

export const createUser = (user: any) => {
  return axios.post(`${base_url}/users`, user);
};

export const updateUser = (id: number, user: any) => {
  return axios.put(`${base_url}/users/${id}`, user);
};

export const deleteUser = (id: number) => {
  return axios.delete(`${base_url}/users/${id}`);
};
