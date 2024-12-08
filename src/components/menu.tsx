import { ButtonType } from "../settings";
import Button from "./button";

function Menu() {
  return (
    <>
      <nav className="menu">
        <Button text="Discover" type={ButtonType.Tertiary} />
        <Button text="Saved" type={ButtonType.Tertiary} />
        <Button text="Profile" type={ButtonType.Tertiary} />
      </nav>
    </>
  );
}

export default Menu;
