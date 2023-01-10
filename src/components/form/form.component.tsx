import React from "react";
import SelectBox from "../select-box/select-box.component";

function Form() {
  return (
    <form>
      <input type="text" name="name" />
      <input type="email" name="email" />
      <input type="password" name="password" />
      <SelectBox options={["1", "2"]} />
      <SelectBox options={["3", "4"]} />
    </form>
  );
}

export default Form;
