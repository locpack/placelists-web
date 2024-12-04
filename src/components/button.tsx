import classNames from "classnames";
import { ButtonClass, ButtonType } from "../settings";

type ButtonProps = {
  text: string;
  buttonClass: ButtonClass;
  icon?: React.ReactElement;
  type?: ButtonType;
  onClick?: () => void;
};

function Button({ text, buttonClass, icon, type = ButtonType.Default, onClick = () => {} }: ButtonProps) {
  const buttonClasses = classNames({
    button: true,
    button__primary: buttonClass === ButtonClass.Primary,
    button__secondary: buttonClass === ButtonClass.Secondary,
    button__tertiary: buttonClass === ButtonClass.Tertiary,
    button__destructive: buttonClass === ButtonClass.Destructive,
  });

  return (
    <button className={buttonClasses} onClick={onClick} type={type}>
      {icon}
      {text}
    </button>
  );
}

export default Button;
