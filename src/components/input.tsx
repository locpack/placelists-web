import classNames from "classnames";
import { InputType } from "../settings";
import { useRef, useState } from "react";
import IconText from "../icons/icon-text";
import IconSearch from "../icons/icon-search";
import IconEmail from "../icons/icon-email";
import IconPassword from "../icons/icon-password";

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
