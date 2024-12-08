import { useNavigate } from "react-router";
import { ButtonType, Path } from "../settings";
import Button from "./button";

function Menu() {
  const navigate = useNavigate();

  return (
    <>
      <nav className="menu">
        <Button text="Discover" type={ButtonType.Tertiary} onClick={() => navigate(Path.Discover)} />
        <Button text="Saved" type={ButtonType.Tertiary} onClick={() => navigate(Path.Saved)} />
        <Button text="Profile" type={ButtonType.Tertiary} onClick={() => navigate(Path.Profile)} />
      </nav>
    </>
  );
}

export default Menu;
