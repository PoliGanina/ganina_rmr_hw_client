import axios from "axios";

export const login = async (formValues) => {
  try {
    let res = await axios.post("/api/v1/login", formValues);

    return res.status;
  } catch (error) {
    if (error.response.status === 401) {
      let expectedError =
        "User not found. Please double-check entry data and try again.";

      return expectedError;
    }
    console.log(error.response.status);
    let unexpectedError = "Something went wrong. Please check your Internet connection or try again later.";

    return unexpectedError;
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
