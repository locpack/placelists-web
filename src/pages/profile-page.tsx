import { Formik } from "formik";
import { useNavigate } from "react-router";
import Button from "../components/button";
import FormInput from "../components/form-input";
import LogoutIcon from "../icons/logout-icon";
import SaveIcon from "../icons/save-icon";
import { ButtonClass, ButtonType, InputType, Path, USER } from "../settings";
import {
  UserChangeEmailForm,
  UserChangeNameForm,
  UserChangePasswordForm,
  UserChangeUsernameForm,
} from "../types/user";

function ProfilePage() {
  const user = USER;

  const navigate = useNavigate();

  const initialUserChangeNameForm: UserChangeNameForm = { name: "" };
  const initialUserChangeUsernameForm: UserChangeUsernameForm = { username: "" };
  const initialUserChangeEmailForm: UserChangeEmailForm = { email: "", password: "" };
  const initialUserChangePasswordForm: UserChangePasswordForm = { newPassword: "", password: "" };

  function handleUserChangeName(values: UserChangeNameForm) {
    console.log("handleUserChangeName");
  }

  function handleUserChangeUsername(values: UserChangeUsernameForm) {
    console.log("handleUserChangeUsername");
  }

  function handleUserChangeEmail(values: UserChangeEmailForm) {
    console.log("handleUserChangeEmail");
  }

  function handleUserChangePassword(values: UserChangePasswordForm) {
    console.log("handleUserChangePassword");
  }

  function handleLogout() {
    navigate(Path.Login);
  }

  return (
    <>
      <header className="header">
        <h1 className="text_h1">{user.name}</h1>
        <h2 className="username text_h2">{user.username}</h2>
      </header>

      <Formik initialValues={initialUserChangeNameForm} onSubmit={(values) => handleUserChangeName(values)}>
        {(formik) => (
          <form className="form" onSubmit={formik.handleSubmit}>
            <FormInput id="name" placeholder="Name" type={InputType.Text} {...formik.getFieldProps("name")} />
            <Button
              text="Save"
              buttonClass={ButtonClass.Primary}
              icon={<SaveIcon />}
              type={ButtonType.Submit}
            />
          </form>
        )}
      </Formik>

      <Formik
        initialValues={initialUserChangeUsernameForm}
        onSubmit={(values) => handleUserChangeUsername(values)}
      >
        {(formik) => (
          <form className="form" onSubmit={formik.handleSubmit}>
            <FormInput
              id="username"
              placeholder="Username"
              type={InputType.Text}
              {...formik.getFieldProps("username")}
            />
            <Button
              text="Save"
              buttonClass={ButtonClass.Primary}
              icon={<SaveIcon />}
              type={ButtonType.Submit}
            />
          </form>
        )}
      </Formik>

      <Formik initialValues={initialUserChangeEmailForm} onSubmit={(values) => handleUserChangeEmail(values)}>
        {(formik) => (
          <form className="form" onSubmit={formik.handleSubmit}>
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
            <Button
              text="Save"
              buttonClass={ButtonClass.Primary}
              icon={<SaveIcon />}
              type={ButtonType.Submit}
            />
          </form>
        )}
      </Formik>

      <Formik
        initialValues={initialUserChangePasswordForm}
        onSubmit={(values) => handleUserChangePassword(values)}
      >
        {(formik) => (
          <form className="form" onSubmit={formik.handleSubmit}>
            <FormInput
              id="newPassword"
              placeholder="New password"
              type={InputType.Password}
              {...formik.getFieldProps("newPassword")}
            />
            <FormInput
              id="password"
              placeholder="Password"
              type={InputType.Password}
              {...formik.getFieldProps("password")}
            />
            <Button
              text="Save"
              buttonClass={ButtonClass.Primary}
              icon={<SaveIcon />}
              type={ButtonType.Submit}
            />
          </form>
        )}
      </Formik>

      <Button
        text="Logout"
        buttonClass={ButtonClass.Destructive}
        icon={<LogoutIcon />}
        onClick={handleLogout}
      />
    </>
  );
}

export default ProfilePage;
