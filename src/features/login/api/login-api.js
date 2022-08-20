import axios from "axios";

export const login = async (formValues) => {
  try {
    let res = await axios.post("/api/v1/login", formValues);

    return res.status;
  } catch (error) {
    let errorMessage =
      "User not found. Please double-check entry data and try again.";

    return errorMessage;
  }
};

export const getUserData = async () => {
  try {
    let res = await axios.get("/api/v1/profile");

    return res.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const logout = () => {
  axios.post("/api/v1/logout");
};
