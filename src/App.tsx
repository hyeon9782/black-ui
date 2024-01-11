import Button from "./components/Button";
import Input from "./components/Input";
import Checkbox from "./components/Checkbox";
import React from "react";

function App() {
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
      <div></div>
    </div>
  );
}

export default App;
