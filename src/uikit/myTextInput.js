import { useField } from "formik";

export const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <label className="form__label" htmlFor={props.name}>{label}</label>
        <input className="form__input"{...props} {...field} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };