import { Radio, RadioGroup } from "@/components/Form/Radio";

import { container, formBox } from "@/app.css";
import { useState } from "react";
import { PinInput, PinInputField } from "./Form/PinInput";

import { Button } from "./Form/Button";

import { Input } from "./Form/Input";
import { Checkbox } from "./Form/Checkbox";
import { Textarea } from "./Form/Textarea";
import { Select } from "./Form/Select";
import { Switch } from "./Form/Switch";
import { FormControl, FormErrorMessage, FormLabel } from "./Form/FormControl";
import FormHelperText from "./Form/FormControl/FormHelperText";
import useClipboard from "@/hooks/useClipboard";
import CustomSlider from "./Form/CustomSlider/CustomSlider";
const options = ["딸기", "사과", "포도"];

const FormArea = () => {
  const [radioValue, setRadioValue] = useState("");
  const [selectedItem, setSelectedItem] = useState("");

  const { onCopy, value, setValue, hasCopied } = useClipboard("");

  const onSelect = (value: string) => {
    setSelectedItem(value);
  };

  const changeRadio = (value: string) => {
    setRadioValue(value);
  };

  const [sliderValue, setSliderValue] = useState(0);

  return (
    <div className={formBox}>
      <fieldset className={container}>
        <legend>Select</legend>
        <Select
          options={options}
          label="과일을 선택해주세요!"
          size="xs"
          variant="flushed"
          selectedItem={selectedItem}
          onSelect={onSelect}
        />
        {/* <Select
          options={options}
          label="과일을 선택해주세요!"
          size="xs"
          variant="filled"
        />
        <Select
          options={options}
          label="과일을 선택해주세요!"
          size="xs"
          variant="flushed"
          
        /> */}
        {/* <Select
          options={options}
          label="과일을 선택해주세요!"
          size="xs"
          variant="unstyled"
        /> */}
      </fieldset>
      <fieldset className={container}>
        <legend>Clipboard</legend>
        <Input
          placeholder={"내용이 복사됩니다."}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <Button onClick={onCopy}>{hasCopied ? "Copied!" : "Copy"}</Button>
      </fieldset>
      <fieldset className={container}>
        <legend>Button</legend>
        <Button size="xs" variant="solid" color="red">
          Button
        </Button>
        <Button size="sm" variant="solid" color="red">
          Button
        </Button>
        <Button size="md" variant="solid" color="red">
          Button
        </Button>
        <Button size="lg" variant="solid" color="red">
          Button
        </Button>
        <Button size="xs" variant="outline" color="red">
          Button
        </Button>
        <Button size="sm" variant="outline" color="red">
          Button
        </Button>
        <Button size="md" variant="outline" color="red">
          Button
        </Button>
        <Button size="lg" variant="outline" color="red">
          Button
        </Button>
        <Button size="xs" variant="ghost" color="red">
          Button
        </Button>
        <Button size="sm" variant="ghost" color="red">
          Button
        </Button>
        <Button size="md" variant="ghost" color="red">
          Button
        </Button>
        <Button size="lg" variant="ghost" color="red">
          Button
        </Button>

        {/* <Button size="xs" variant="solid" color="gray" leftIcon={<IoMdClose />}>
          Button
        </Button> */}
        {/* <Button
          size="sm"
          variant="outline"
          color="red"
          rightIcon={<IoMdClose />}
        >
          Button
        </Button>
        <Button
          size="md"
          variant="solid"
          color="gray"
          onClick={() => alert("블랙 클릭")}
          leftIcon={<IoMdClose />}
          isLoading
          spinner={<IoIosArrowDown />}
        >
          Button
        </Button>
        <Button
          size="lg"
          variant="solid"
          color="gray"
          onClick={() => alert("블랙 클릭")}
          leftIcon={<IoMdClose />}
          isLoading
          loadingText="loading..."
          spinnerPlacement="right"
        >
          Button
        </Button>

        <Button
          size="lg"
          variant="outline"
          color="red"
          onClick={() => alert("레드 클릭")}
        >
          <IoMdClose />
          Button
        </Button>
        <Button
          size="lg"
          variant="outline"
          color="red"
          isDisabled
          onClick={() => alert("레드 클릭")}
        >
          Button
        </Button>
        <IconButton icon={<IoMdStar />} aria-label="Star" isLoading /> */}
      </fieldset>
      <fieldset className={container}>
        <legend>Input</legend>
        <Input placeholder="아이디를 입력해라" size="lg" variant="outline" />
        <Input placeholder="아이디를 입력해라" size="lg" variant="filled" />
        <Input placeholder="아이디를 입력해라" size="lg" variant="flushed" />
        <Input placeholder="아이디를 입력해라" size="lg" variant="unstyled" />
      </fieldset>
      <fieldset className={container}>
        <legend>Checkbox</legend>
        <Checkbox color="gray" size="xs">
          XS Checkbox
        </Checkbox>
        <Checkbox color="red" size="sm">
          SM Checkbox
        </Checkbox>
        <Checkbox color="green" size="md" defaultChecked>
          MD Checkbox
        </Checkbox>
        <Checkbox color="blue" size="lg">
          LG Checkbox
        </Checkbox>
        <Checkbox color="orange" size="lg" isDisabled>
          LG Checkbox
        </Checkbox>
      </fieldset>
      <fieldset className={container}>
        <legend>Radio</legend>
        <RadioGroup onChange={changeRadio} direction="row">
          <Radio color="black" size="xs" value={1}>
            XS Radio
          </Radio>
          <Radio color="black" size="sm" value={2}>
            SM Radio
          </Radio>
          <Radio color="black" size="md" value={3}>
            MD Radio
          </Radio>
          <Radio color="red" size="lg" value={4} disabled>
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
        <legend>Switch</legend>
        <Switch size="xs" color="red">
          빨강
        </Switch>
        <Switch size="sm" color="blue">
          파랑
        </Switch>
        <Switch size="md" color="green">
          초록
        </Switch>
        <Switch size="lg" color="red">
          빨강
        </Switch>
      </fieldset>
      <fieldset className={container}>
        <legend>Form Control</legend>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input />
          <FormHelperText>
            Enter the email you'd like to receive the newsletter on.
          </FormHelperText>
          <FormErrorMessage>Email is required.</FormErrorMessage>
        </FormControl>
      </fieldset>
      <fieldset className={container}>
        <legend>PinInput</legend>
        {/* <PinInput size="xs" data-testid="pin-input">
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>

        <PinInput size="sm">
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>

        <PinInput size="md">
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput> */}

        <PinInput size="lg">
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </fieldset>
      <fieldset className={container}>
        <legend>Slider</legend>
        <CustomSlider
          value={sliderValue}
          onChange={(e) => setSliderValue(Number(e.target.value))}
        />
      </fieldset>
    </div>
  );
};

export default FormArea;
