import { useNavigate } from "react-router";
import Block from "../components/block";
import Button from "../components/button";
import LoginIcon from "../icons/login-icon";
import { AuthStatus, ButtonType, CURRENT_AUTH_STATUS, Path } from "../settings";

function HomePage() {
  const currentAuthStatus = CURRENT_AUTH_STATUS;

  const navigate = useNavigate();

  return (
    <>
      <h1 className="text_h1">Hello, it's Placelists!</h1>
      <Block header="Why?">
        <p className="text_p">Here you can do a lot of stuff!</p>
      </Block>
      {currentAuthStatus !== AuthStatus.Authorized && (
        <Button
          text="Login"
          type={ButtonType.Primary}
          icon={<LoginIcon />}
          onClick={() => navigate(Path.Login)}
        />
      )}
    </>
  );
}

export default HomePage;
