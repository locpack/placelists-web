import classNames from "classnames";
import { InputType } from "../settings";
import { useRef, useState } from "react";
import IconText from "../icons/text-icon";
import IconSearch from "../icons/search-icon";
import IconEmail from "../icons/email-icon";
import IconPassword from "../icons/password-icon";

type InputProps = {
  name: string;
  type: InputType;
  placeholder: string;
  onInput?: (value: string) => void;
};

function Input({ name, type, placeholder, onInput = () => {} }: InputProps) {
  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const inputClasses = classNames({
    input: true,
    input__active: value,
  });

  const icons = {
    number: <IconText />,
    search: <IconSearch />,
    text: <IconText />,
    email: <IconEmail />,
    password: <IconPassword />,
  };

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
    onInput(event.target.value);
  }

  return (
    <label htmlFor={name} className={inputClasses} onClick={() => inputRef.current!.focus()}>
      {icons[type]}
      <input
        id="planet"
        className="input_field"
        type={type}
        name={name}
        placeholder={placeholder}
        ref={inputRef}
        value={value}
        onChange={handleChange}
      />
    </label>
  );
}

export default Input;
