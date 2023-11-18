import React from "react";
import { Info } from "../App";

const CheckboxField: React.FC<{
  value: Info;
  setValue: (info:Info) => void;
  label: string;
  source: keyof Info;
}> = ({ label, value, setValue,source }) => {
  return (
    <>
      {label}
      <input
        onChange={(e) => setValue({...value,[source]:e.target.checked})}
        value={value.toString()}
        type={"checkbox"}
      />
    </>
  );
};

export default CheckboxField;
