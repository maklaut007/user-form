import React, { useState } from "react";

interface Props {
  options: string[];
  onChange: (value: string) => void;
}

function SelectBox({ options, onChange }: Props) {
  const [currentOption, setCurrentOption] = useState<string>("");
  const changeOption = (option: string) => {
    onChange(option);
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
