import axios from "axios";


const errorExpected = "User not found. Please double-check entry data and try again.";
const errorUnexpected = "Something went wrong. Please check your Internet connection or try again later.";

export const login = async (formValues) => {
  try {
    let res = await axios.post("/api/v1/login", formValues);

    return res.status;
  } catch (error) {
    if (error.response.status === 401) return errorExpected;
    return errorUnexpected;
  }
};

export const getUserData = async () => {
  try {
    let res = await axios.get("/api/v1/profile");

    return {data: res.data.data, hasCookie: true } ;
  } catch (error) {
    
    return {data: null, hasCookie: false };
  }
};

export const logout = () => {
  axios.post("/api/v1/logout");
};
