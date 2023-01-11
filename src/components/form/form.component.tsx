import React, { useState } from "react";
import useGetRequest from "../../hooks/useGetRequest";
import FormInput from "../form-input/form-input.component";
import FormSubmit from "../form-submit/form-submit.component";
import SelectBox from "../select-box/select-box.component";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameHandler = (value: string) => {
    setName(value);
  };
  const emailHandler = (value: string) => {
    setEmail(value);
  };
  const passwordHandler = (value: string) => {
    setPassword(value);
  };

  const [optionsData] = useGetRequest(
    "https://frontend-take-home.fetchrewards.com/form"
  );

  return (
    <form>
      <FormInput
        type="text"
        value={name}
        onInput={nameHandler}
        placeholder="name"
        isRequred={true}
      />
      <FormInput
        type="email"
        value={email}
        onInput={emailHandler}
        placeholder="email"
        isRequred={true}
      />
      <FormInput
        type="password"
        value={password}
        onInput={passwordHandler}
        placeholder="password"
        isRequred={true}
      />
      <SelectBox options={optionsData?.occupations || []} />
      <SelectBox options={optionsData?.states.map((st) => st.name) || []} />
      <FormSubmit />
    </form>
  );
}

export default Form;
