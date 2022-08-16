import axios from "axios";

export const BASE_API = "http://localhost:3000";

export const login = async (formValues) => {
  try {
    return await axios.post("/api/v1/login", formValues);
  } catch (error) {
    alert("Sorry, you are not registered");
  }
};

export const getUserData = async () => {
  return await axios.get("/api/v1/profile");
};

export const logout = () => {
  axios.post("/api/v1/logout");
};

export const getImgUrl = async () => {
  const res = await axios.get("/api/v1/kitty");
  return res.data.data.src;
};
