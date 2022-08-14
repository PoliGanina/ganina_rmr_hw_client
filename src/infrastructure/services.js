import axios from "axios"

export const login = async ({email, phone, password}) => {
    axios.post('/login', {
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
