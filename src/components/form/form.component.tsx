import React from "react";
import SelectBox from "../select-box/select-box.component";

function Form() {
  return (
    <form>
      <input type="text" name="name" />
      <input type="email" name="email" />
      <input type="password" name="password" />
      <SelectBox />
      <SelectBox />
    </form>
  );
}

export default Form;
