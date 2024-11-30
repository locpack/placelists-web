import classNames from "classnames";
import { ButtonType } from "../settings";

type ButtonProps = {
  text: string;
  type: ButtonType;
  icon?: React.ReactElement;
  onClick?: () => void;
};

function Button({ text, type, icon, onClick = () => {} }: ButtonProps) {
  const buttonClasses = classNames({
    button: true,
    button__primary: type === ButtonType.Primary,
    button__secondary: type === ButtonType.Secondary,
    button__destructive: type === ButtonType.Destructive,
  });

  return (
    <button className={buttonClasses} onClick={onClick}>
      {icon}
      {text}
    </button>
  );
}

export default Button;
