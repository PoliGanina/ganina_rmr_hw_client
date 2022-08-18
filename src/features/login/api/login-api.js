import axios from "axios";


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

