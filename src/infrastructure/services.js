import axios from "axios";

// const instance = axios.create({
//   withCredentials: true,
//   baseURL: "http://51.250.65.73/api/v1",
// });

export const login = (formValues) => {
  try {
    axios.post("http://51.250.65.73/api/v1/login", formValues).then(async (res) => {
      if (res.status === 200) {
        console.log(res.status);

        const profile = await axios.get(
          "http://51.250.65.73/api/v1/profile"
        );
        console.log(profile.data);
        return profile.data;
      }
    });
  } catch (error) {
    alert("Sorry, you are not registered");
  }
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
