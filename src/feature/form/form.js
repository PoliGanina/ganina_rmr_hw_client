import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import './form.scss';

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input {...props} {...field} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const FormComponent = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        phone: "",
        password: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string().email('Email format should be "example@mailbox.com"').required("this field is required"),
        phone: Yup.string().required("this field is required"),
        password: Yup.string()
          .min(4, "Min 4 symbols")
          .matches(/[^A-Za-z0-9А-Яа-я]+/g)
          .required("this field is required"),
      })}
      onSubmit={(values) => console.log(JSON.stringify(values, null, 2))}
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
