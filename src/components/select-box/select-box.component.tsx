import React, { useState } from "react";

interface Props {
  options: string[];
}

function SelectBox({ options }: Props) {
  const [currentOption, setCurrentOption] = useState<string>("");
  const changeOption = (option: string) => {
    setCurrentOption(option);
  };

  const optionsList = options.map((opt) => (
    <option key={opt} value={opt}>
      {opt}
    </option>
  ));

  return (
    <select
      value={currentOption}
      onChange={(event) => changeOption(event.target.value)}
    >
      {optionsList}
    </select>
  );
}

export default SelectBox;
