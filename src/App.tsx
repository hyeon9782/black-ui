import Button from "./components/Button";
import Input from "./components/Input";
import Select from "./components/Select";
import Checkbox from "./components/Checkbox";
import { Radio, RadioGroup } from "./components/Radio";
import Textarea from "./components/Textarea";
import React, { useState } from "react";
import { container, formBox } from "./app.css";

const options = ["딸기", "사과", "포도"];

function App() {
  const [radioValue, setRadioValue] = useState("");

  const changeRadio = (value: string) => {
    setRadioValue(value);
  };
  return (
    <div className={formBox}>
      <fieldset className={container}>
        <legend>Button</legend>
        <Button
          size="lg"
          variant="solid"
          color="black"
          onClick={() => alert("블랙 클릭")}
          disabled
        >
          블랙 버튼
        </Button>
        <Button
          size="lg"
          variant="outline"
          color="red"
          onClick={() => alert("레드 클릭")}
        >
          레드 버튼
        </Button>
      </fieldset>
      <fieldset className={container}>
        <legend>Input</legend>
        <Input placeholder="아이디를 입력해라" size="xs" />
        <Input placeholder="아이디를 입력해라" size="sm" />
        <Input placeholder="아이디를 입력해라" size="md" />
        <Input placeholder="아이디를 입력해라" size="lg" />
      </fieldset>
      <fieldset className={container}>
        <legend>Checkbox</legend>
        <Checkbox color="black" size="xs">
          XS Checkbox
        </Checkbox>
        <Checkbox color="red" size="sm" disabled>
          SM Checkbox
        </Checkbox>
        <Checkbox color="red" size="md">
          MD Checkbox
        </Checkbox>
        <Checkbox color="red" size="lg">
          LG Checkbox
        </Checkbox>
      </fieldset>
      <fieldset className={container}>
        <legend>Radio</legend>
        <RadioGroup onChange={changeRadio}>
          <Radio color="black" size="xs" value={1}>
            XS Radio
          </Radio>
          <Radio color="black" size="sm" value={2}>
            SM Radio
          </Radio>
          <Radio color="black" size="md" value={3}>
            MD Radio
          </Radio>
          <Radio color="red" size="lg" value={4}>
            LG Radio
          </Radio>
        </RadioGroup>
        <div>{radioValue}</div>
      </fieldset>
      <fieldset className={container}>
        <legend>Textarea</legend>
        <Textarea placeholder="Here is a sample placeholder" size="xs" />
        <Textarea placeholder="Here is a sample placeholder" size="sm" />
        <Textarea
          placeholder="Here is a sample placeholder"
          disabled
          size="md"
        />
        <Textarea placeholder="Here is a sample placeholder" size="lg" />
      </fieldset>
      <fieldset className={container}>
        <legend>Select</legend>
        <Select
          options={options}
          label="과일을 선택해주세요!"
          size="xs"
          variant="outline"
        />
        <Select
          options={options}
          label="과일을 선택해주세요!"
          size="sm"
          variant="unstyled"
        />
        <Select
          options={options}
          label="과일을 선택해주세요!"
          size="md"
          variant="flushed"
        />
        <Select
          options={options}
          label="과일을 선택해주세요!"
          size="lg"
          variant="filled"
        />
      </fieldset>
    </div>
  );
}

export default App;
