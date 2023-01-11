import React, { ChangeEvent } from "react";
import "./style.css";

interface Props {
  type?: string;
  value?: string;
  isRequred?: boolean;
  onInput: (value: string) => void;
  id?: string;
}
function FormInput({ type, value, isRequred, onInput, id }: Props) {
  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onInput(event.target.value);
  };

  return (
    <input
      id={id}
      className="input"
      value={value}
      type={type || "text"}
      onChange={inputChangeHandler}
      required={isRequred}
    />
  );
}

export default FormInput;
