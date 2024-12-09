import classNames from "classnames";
import { useState } from "react";

type InputProps = {
  placeholder: string;
  onInput?: (value: string) => void;
};

function Input({ placeholder, onInput = () => {} }: InputProps) {
  const [value, setValue] = useState<string>("");

  const inputClasses = classNames({
    input: true,
    input__active: value,
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
    onInput(event.target.value);
  }

  return <input className={inputClasses} placeholder={placeholder} value={value} onChange={handleChange} />;
}

export default Input;
