import classNames from "classnames";
import { useLocation, useNavigate } from "react-router";
import { Path } from "../settings";

type MenuButtonProps = {
  text: string;
  path: Path;
  icon: React.ReactElement;
};

function MenuButton({ text, path, icon }: MenuButtonProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const active = path === location.pathname;

  const buttonClasses = classNames({
    menu_button: true,
    text_p: true,
    menu_button__active: active,
  });

  return (
    <button className={buttonClasses} onClick={() => navigate(path)}>
      {icon}
      {active && text}
    </button>
  );
}

export default MenuButton;
