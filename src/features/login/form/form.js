import PropTypes from 'prop-types';
import { Formik, Form } from "formik";

import { MyTextInput } from "../../../uikit/myTextInput";
import { useLogin } from "../context/useLogin";
import { VALIDATION_SCHEMA } from "./form.consts";
import "./form.scss";

const FormComponent = () => {
  const { errorMessage, logging, handleLogin,  } = useLogin();
  return (
    <Formik
      initialValues={{
        email: "masha@gmail.com",
        phone: "+79853453322",
        password: "lolkekkkk",
      }}
      validationSchema={VALIDATION_SCHEMA}
      onSubmit={handleLogin}
    >
      <Form className="form">
        <h1 className="form__header">login</h1>
        {
          errorMessage && <h2 className='error__login'>{errorMessage}</h2>
        }
        <MyTextInput label="Email" id="email" name="email" type="email" />
        <MyTextInput
          label="Phone number"
          id="phone"
          name="phone"
          type="phone"
        />
        <MyTextInput
          label="Password"
          id="password"
          name="password"
          type="password"
        />
        <button className="form__button" disabled={logging? true : false} type="submit">Login</button>
      </Form>
    </Formik>
  );
};

FormComponent.propTypes = {
  errorMessage: PropTypes.string,
  logging: PropTypes.bool,
  handleLogin: PropTypes.func
}
export default FormComponent;
