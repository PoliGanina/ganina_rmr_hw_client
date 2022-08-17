import { Formik, Form } from "formik";
import { MyTextInput } from "../../uikit/myTextInput";
import { VALIDATION_SCHEMA } from "./form.consts";
import "./form.scss";

const FormComponent = ({onSubmit}) => {
  return (
    <Formik
      initialValues={{
        email: "masha@gmail.com",
        phone: "+79853453322",
        password: "lolkekkkk",
      }}
      validationSchema={ VALIDATION_SCHEMA }
      onSubmit={onSubmit}
    >
      <Form className="form">
        <h1>login</h1>
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
        <button type="submit">Отправить</button>
      </Form>
    </Formik>
  );
};
export default FormComponent;
