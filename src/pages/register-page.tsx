import { Formik } from "formik";
import { useNavigate } from "react-router";
import Button from "../components/button";
import FormInput from "../components/form-input";
import LoginIcon from "../icons/login-icon";
import { ButtonClass, ButtonType, InputType, Path } from "../settings";
import { UserRegisterForm } from "../types/user";

function RegisterPage() {
  const navigate = useNavigate();

  const initialUserValues: UserRegisterForm = {
    name: "",
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };

  return (
    <>
      <h1 className="text_h1">Register</h1>
      <Formik
        initialValues={initialUserValues}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {(formik) => (
          <form className="form" onSubmit={formik.handleSubmit}>
            <FormInput id="name" placeholder="Name" type={InputType.Text} {...formik.getFieldProps("name")} />

            <FormInput
              id="username"
              placeholder="Username"
              type={InputType.Text}
              {...formik.getFieldProps("username")}
            />

            <FormInput
              id="email"
              placeholder="Email"
              type={InputType.Email}
              {...formik.getFieldProps("email")}
            />

            <FormInput
              id="password"
              placeholder="Password"
              type={InputType.Password}
              {...formik.getFieldProps("password")}
            />

            <FormInput
              id="passwordConfirm"
              placeholder="Confirm password"
              type={InputType.Password}
              {...formik.getFieldProps("passwordConfirm")}
            />

            <Button
              text="Continue"
              buttonClass={ButtonClass.Primary}
              icon={<LoginIcon />}
              type={ButtonType.Submit}
            />

            <Button text="Login" buttonClass={ButtonClass.Tertiary} onClick={() => navigate(Path.Login)} />
          </form>
        )}
      </Formik>
    </>
  );
}

export default RegisterPage;
