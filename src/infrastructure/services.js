import axios from "axios"

export const Login = async ({email, phone, password}) => {
    axios.post('/api/v1/login', {
        email: {email},
        password: {password},
        phone: {phone},
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}
