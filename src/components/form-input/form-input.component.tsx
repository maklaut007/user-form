import React, { ChangeEvent } from "react";

interface Props {
  type?: string;
  value?: string;
  placeholder?: string;
  isRequred?: boolean;
  onInput: (value: string) => void;
}
function FormInput({ type, value, placeholder, isRequred, onInput }: Props) {
  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onInput(event.target.value);
  };

  return (
    <input
      value={value}
      type={type || "text"}
      onChange={inputChangeHandler}
      placeholder={placeholder}
      required={isRequred}
    />
  );
}

export default FormInput;
