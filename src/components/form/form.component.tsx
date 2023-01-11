import axios from "axios";
import React, { useState } from "react";
import useGetRequest from "../../hooks/useGetRequest";
import FormInput from "../form-input/form-input.component";
import FormSubmit from "../form-submit/form-submit.component";
import SelectBox from "../select-box/select-box.component";
import "./style.css";

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
    <form onSubmit={onSubmitHandler} className="form">
      <label htmlFor="name" className="label">
        Name:
      </label>
      <FormInput
        id="name"
        type="text"
        value={name}
        onInput={nameHandler}
        isRequred={true}
      />
      <label htmlFor="email" className="label">
        Email:
      </label>
      <FormInput
        id="email"
        type="email"
        value={email}
        onInput={emailHandler}
        isRequred={true}
      />
      <label htmlFor="password" className="label">
        Password:
      </label>
      <FormInput
        id="password"
        type="password"
        value={password}
        onInput={passwordHandler}
        isRequred={true}
      />
      <label className="label">Occupation:</label>
      <SelectBox
        onChange={occupationHandler}
        options={optionsData?.occupations || []}
      />
      <label className="label">State:</label>
      <SelectBox
        onChange={stateHandler}
        options={optionsData?.states.map((st) => st.name) || []}
      />
      <FormSubmit />
    </form>
  );
}

export default Form;
