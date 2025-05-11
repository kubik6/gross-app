import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const registerCompany = async (data: {
  name: string;
  email: string;
  password: string;
  website?: string;
}) => {
  const response = await axios.post(`${API_URL}/register`, data);
  return response.data;
};

export const loginCompany = async (data: {
  email: string;
  password: string;
}) => {
  const response = await axios.post(`${API_URL}/login`, data);
  return response.data;
};