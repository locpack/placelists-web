import { ButtonType } from "../settings";

type ButtonProps = {
  text: string;
  type: ButtonType;
  icon?: React.ReactNode;
  onClick?: () => void;
};

function Button({ text, type, icon, onClick = () => {} }: ButtonProps) {
  return (
    <button className={`button ${type}`} onClick={onClick}>
      {icon}
      {text}
    </button>
  );
}

export default Button;
