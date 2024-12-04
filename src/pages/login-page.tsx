import { Formik } from "formik";
import { useNavigate } from "react-router";
import Button from "../components/button";
import FormInput from "../components/form-input";
import LoginIcon from "../icons/login-icon";
import { ButtonClass, ButtonType, InputType, Path } from "../settings";
import { UserLogin } from "../types/user";

function LoginPage() {
  const navigate = useNavigate();

  const initialUserValues: UserLogin = {
    username: "",
    password: "",
  };

  return (
    <>
      <h1 className="text_h1">Login</h1>
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
            <FormInput
              id="username"
              placeholder="Username"
              type={InputType.Text}
              {...formik.getFieldProps("username")}
            />

            <FormInput
              id="password"
              placeholder="Password"
              type={InputType.Password}
              {...formik.getFieldProps("password")}
            />

            <Button
              text="Continue"
              buttonClass={ButtonClass.Primary}
              icon={<LoginIcon />}
              type={ButtonType.Submit}
            />

            <Button
              text="Register"
              buttonClass={ButtonClass.Tertiary}
              onClick={() => navigate(Path.Register)}
            />
          </form>
        )}
      </Formik>
    </>
  );
}

export default LoginPage;
