import axios from "axios";
import React, { useState } from "react";
import useGetRequest from "../../hooks/useGetRequest";
import FormInput from "../form-input/form-input.component";
import FormSubmit from "../form-submit/form-submit.component";
import SelectBox from "../select-box/select-box.component";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState("Illinois");
  const [occupation, setOccupation] = useState("Head of Shrubbery");

  const [responseData, setResponseData] = useState<any>(null);

  const nameHandler = (value: string) => {
    setName(value);
  };
  const emailHandler = (value: string) => {
    setEmail(value);
  };
  const passwordHandler = (value: string) => {
    setPassword(value);
  };
  const stateHandler = (value: string) => {
    setState(value);
  };
  const occupationHandler = (value: string) => {
    setOccupation(value);
  };

  const [optionsData] = useGetRequest(
    "https://frontend-take-home.fetchrewards.com/form"
  );

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    console.log(name, email, password, occupation, state);
    event.preventDefault();

    axios
      .post("https://frontend-take-home.fetchrewards.com/form", {
        name,
        email,
        password,
        occupation,
        state,
      })
      .then((response) => {
        alert("Submit Success");
        console.log(response);
        setResponseData(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={onSubmitHandler}>
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
      <SelectBox
        onChange={occupationHandler}
        options={optionsData?.occupations || []}
      />
      <SelectBox
        onChange={stateHandler}
        options={optionsData?.states.map((st) => st.name) || []}
      />
      <FormSubmit />
    </form>
  );
}

export default Form;
