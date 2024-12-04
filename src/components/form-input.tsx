import classNames from "classnames";
import { useRef } from "react";
import EmailIcon from "../icons/email-icon";
import PasswordIcon from "../icons/password-icon";
import SearchIcon from "../icons/search-icon";
import TextIcon from "../icons/text-icon";
import { InputType } from "../settings";

type FormInputProps = {
  id: string;
  type: InputType;
  placeholder: string;
  props?: any;
};

function FormInput({ id, type, placeholder, ...props }: FormInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const inputClasses = classNames({
    input: true,
    input__active: inputRef.current?.value,
  });

  const icons = {
    number: <TextIcon />,
    search: <SearchIcon />,
    text: <TextIcon />,
    email: <EmailIcon />,
    password: <PasswordIcon />,
  };

  return (
    <label className={inputClasses} onClick={() => inputRef.current!.focus()}>
      {icons[type]}
      <input
        id={id}
        className="input_field"
        type={type}
        placeholder={placeholder}
        ref={inputRef}
        {...props}
      />
    </label>
  );
}

export default FormInput;
