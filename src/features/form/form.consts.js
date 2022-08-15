import * as Yup from "yup";


export const VALIDATION_SCHEMA = Yup.object({
    email: Yup.string()
      .email('Email format should be "example@mailbox.com"')
      .required("this field is required"),
    phone: Yup.string()
      .matches(/^[0-9\+/]+$/g, "Phone number must contain digits only")
      .test("country-validation", "Russian Federation and Mongolia only", function (value = '+7') {
        return (
          value.indexOf("+976") === 0 ||
          value.indexOf("976") === 0 ||
          value.indexOf("8") === 0 ||
          value.indexOf("+7") === 0
        );
      })
      .min(11, "Please check the phone number")
      .required("this field is required"),
    password: Yup.string()
      .min(4, "Min 4 symbols")
      .matches(/^[a-zA-Z0-9А-Яа-я]*$/g, "Password should contain letters and digits only")
      .required("this field is required"),
  })