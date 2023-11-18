import React, { useState } from "react";
import TextField from "./component/TextField";
import Form from "./component/Form";
import CheckboxField from "./component/CheckboxField";

export interface Info{
   name:string;
   confirm: boolean;
}

function App() {
  const [info, setInfo] = useState<Info>({
    name: "",
    confirm: false,
  });

  const onSubmit = () => {
    if (info.confirm) {
      alert(`name: ${info.name}`);
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <TextField
        value={info}
        setValue={(v) => setInfo({ ...info })}
        label="이름"
        source = "name"
      />
      <CheckboxField
        value={info}
        setValue={(v) => setInfo({ ...info })}
        label="위 내용이 제출됩니다 동의하십니까?"
        source = "confirm"
      />
    </Form>
  );
}

export default App;
