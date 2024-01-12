import Button from "./components/Button";
import Input from "./components/Input";
import Select from "./components/Select";
import Checkbox from "./components/Checkbox";
import { Radio, RadioGroup } from "./components/Radio";
import Textarea from "./components/Textarea";
import React, { useState } from "react";

const options = ["딸기", "사과", "포도"];

function App() {
  const [radioValue, setRadioValue] = useState("");

  const changeRadio = (value: string) => {
    setRadioValue(value);
  };
  return (
    <div>
      <div>
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
      </div>
      <div>
        <Input placeholder="아이디를 입력해라" size="xs" />
        <Input placeholder="아이디를 입력해라" size="sm" />
        <Input placeholder="아이디를 입력해라" size="md" />
        <Input placeholder="아이디를 입력해라" size="lg" />
      </div>
      <div>
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
      </div>
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
      <div>
        <Textarea placeholder="Here is a sample placeholder" size="xs" />
        <Textarea placeholder="Here is a sample placeholder" size="sm" />
        <Textarea
          placeholder="Here is a sample placeholder"
          disabled
          size="md"
        />
        <Textarea placeholder="Here is a sample placeholder" size="lg" />
      </div>
      <div>
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
      </div>
    </div>
  );
}

export default App;
