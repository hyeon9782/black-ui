import Button from "./components/Form/Button";
import IconButton from "./components/Form/IconButton";
import Input from "./components/Form/Input";
import Select from "./components/Form/Select";
import Checkbox from "./components/Form/Checkbox";
import Switch from "./components/Form/Switch";
import FormControl from "./components/Form/FormControl";
import { Radio, RadioGroup } from "./components/Form/Radio";
import Textarea from "./components/Form/Textarea";
import {
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
} from "./components/Disclosure/Tabs";

import {
  Accordion,
  AccordionButton,
  AccordionPanel,
  AccordionItem,
} from "./components/Disclosure/Accordion";
import Card from "./components/DataDisplay/Card";
import React, { useState } from "react";
import { container, formBox } from "./app.css";
import { IoMdStar } from "react-icons/io";

const options = ["딸기", "사과", "포도"];

function App() {
  const [radioValue, setRadioValue] = useState("");

  const changeRadio = (value: string) => {
    setRadioValue(value);
  };
  return (
    <div className={formBox}>
      <Tabs>
        <TabList>
          <Tab>Form</Tab>
          <Tab>Overlay</Tab>
          <Tab>Feedback</Tab>
          <Tab>DataDisplay</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <fieldset className={container}>
              <legend>Button</legend>
              <Button
                size="xs"
                variant="solid"
                color="black"
                onClick={() => alert("블랙 클릭")}
                disabled
              >
                블랙 버튼
              </Button>
              <Button
                size="sm"
                variant="outline"
                color="red"
                onClick={() => alert("레드 클릭")}
              >
                레드 버튼
              </Button>
              <Button
                size="md"
                variant="outline"
                color="red"
                onClick={() => alert("레드 클릭")}
              >
                레드 버튼
              </Button>
              <Button
                size="lg"
                variant="outline"
                color="red"
                onClick={() => alert("레드 클릭")}
              >
                레드 버튼
              </Button>
              <IconButton icon={<IoMdStar />} aria-label="Star" isLoading />
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
            <fieldset className={container}>
              <legend>Switch</legend>
              <Switch size="xs" color="green">
                빨강
              </Switch>
              <Switch size="sm" color="blue">
                파랑
              </Switch>
              <Switch size="md" color="green">
                빨강
              </Switch>
              <Switch size="lg" color="blue">
                파랑
              </Switch>
            </fieldset>
            <fieldset className={container}>
              <legend>Form Control</legend>
              <FormControl>
                <FormControl.Label>Email</FormControl.Label>
                <Input />
                <FormControl.HelperText>
                  Enter the email you'd like to receive the newsletter on.
                </FormControl.HelperText>
                <FormControl.ErrorMessage>
                  Email is required.
                </FormControl.ErrorMessage>
              </FormControl>
            </fieldset>
          </TabPanel>
          <TabPanel>
            <div></div>
          </TabPanel>
          <TabPanel>
            <div></div>
          </TabPanel>
          <TabPanel>
            <div>
              <Accordion>
                <AccordionItem>
                  <AccordionButton>1번 제목</AccordionButton>
                  <AccordionPanel>1번 내용</AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionButton>2번 제목</AccordionButton>
                  <AccordionPanel>2번 내용</AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default App;
