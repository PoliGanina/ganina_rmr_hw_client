import axios from "axios";

export const login = ({ email, phone, password }) => {
  axios
    .post("http://51.250.65.73/api/v1/login", {
      email,
      password,
      phone,
    })
    .then((res) => {
      console.log(res.status);
    })
    .catch(function (error) {
      throw new Error (error)
    });
};

export const logout = () => {
  axios
    .post("http://51.250.65.73/api/v1/logout")
    .then((res) => {
      console.log(res);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const profile = () => {
  return axios.get("http://51.250.65.73/api/v1/login");
};
