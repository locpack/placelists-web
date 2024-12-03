import { useNavigate } from "react-router";
import Block from "../components/block";
import Button from "../components/button";
import LoginIcon from "../icons/login-icon";
import { AUTH_STATUS, AuthStatus, ButtonClass, Path } from "../settings";

function HomePage() {
  const authStatus = AUTH_STATUS;

  const navigate = useNavigate();

  return (
    <>
      <h1 className="text_h1">Hello, it's Placelists!</h1>
      <Block header="Why?">
        <p className="text_p">Here you can do a lot of stuff!</p>
      </Block>
      {authStatus !== AuthStatus.Authorized && (
        <Button
          text="Login"
          buttonClass={ButtonClass.Primary}
          icon={<LoginIcon />}
          onClick={() => navigate(Path.Login)}
        />
      )}
    </>
  );
}

export default HomePage;
