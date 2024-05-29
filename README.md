![header](https://capsule-render.vercel.app/api?type=waving&height=500&color=gradient&text=Black%20UI&desc=Design%20System%20built%20on%20Vanilla%20Extract&textBg=false&descSize=24)

Vanilla Extract 기반 디자인 시스템으로 성능 저하 없이 멋진 디자인을 구현하세요!

미완성 프로젝트입니다. 개선할 부분이 있다면 언제든지 Issues 남겨주세요!

## Table of Contents

- 📦 [Getting Started](#getting-started)
- 🛠️ [Stack](#stack-배경이-궁금하다면)
- 📒 [Storybook](#storybook---docs)
- 🔮 [Todo](#todo)
- 💻 Components
  - DataDisplay
    - [Avatar](#avatar---source)
    - [Card](#card---source)
    - [List](#list---source)
    - [Table](#table---source)
    - [Tag](#tag---source)
  - Disclosure
    - [Accordion](#accordion---source)
    - [Tabs](#tabs---source)
    - [VisuallyHidden](#visuallyhidden---source)
  - Feedback
    - [Progress](#progress---source)
    - [Skeleton](#skeleton---source)
    - [Spinner](#spinner---source)
    - [Toast](#toast---source)
  - Form
    - [Button](#button---source)
    - [Checkbox](#checkbox---source)
    - [FormControl](#formcontrol---source)
    - [Input](#input---source)
    - [PinInput](#pininput---source)
    - [Radio](#radio---source)
    - [CustomSelect](#customselect---source)
    - [Slider](#slider---source)
    - [Switch](#switch---source)
    - [Textarea](#textarea---source)
  - Overlay
    - [Drawer](#drawer---source)
    - [Menu](#nenu---source)
    - [Modal](#modal---source)
    - [Popover](#popover---source)
    - [Tooltip](#tooltip---source)
  - Other
    - [CloseButton](#closebutton---source)
    - [Portal](#portal---source)
    - [Theme](#theme---source)
    - [Pagination]

- Hooks
  - [useClipboard](#useclipboard---source)
  - [useDisclosure](#usedisclosure---source)
  - [useOutsideClick](#useoutsideclick---source)

## Stack ([배경이 궁금하다면](https://velog.io/@hyeon9782/%EB%82%98%EB%A7%8C%EC%9D%98-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C%EC%9D%84-%EB%A7%8C%EB%93%A4%EC%96%B4%EB%B3%B4%EC%9E%90-%EA%B8%B0%EC%88%A0-%EC%8A%A4%ED%83%9D-%EC%84%A0%EC%A0%95))

| 기술            | 설명                                        |
| --------------- | ------------------------------------------- |
| TypeScript      | JavaScript의 확장 언어                      |
| React           | JavaScript 프레임워크                       |
| Vite            | React 개발을 위한 빌드 도구                 |
| Vanilla Extract | Zero-runtime Stylesheets in TypeScript.     |
| Storybook       | React 컴포넌트를 테스트하고 문서화하는 도구 |
| Jest            | JavaScript 테스트 프레임워크                |

## Getting Started

### Introduction

black-ui는 react + typescript + vanilla-extract 조합으로 개발한 디자인
시스템입니다.

기존의 유명 디자인 시스템들은 emotion 같은 css-in-js 라이브러리로 개발된
라이브러리들이 많았습니다.

하지만 일반적인 css-in-js 라이브러리들은 js가 css로 변환되는 과정이 런타임
단계에서 일어나기 때문에 성능적인 이슈가 발생할 수 있습니다.

black-ui는 이러한 점을 보완하기 위해 vanilla-extract 라는 스타일링 라이브러리를
선택했습니다.

vanilla-extract도 css-in-js 라이브러리 이지만 css 변환 과정이 런타임이 아니라
컴파일 타임 때 일어나기 때문에 성능적인 이점을 가질 수 있습니다.

기존 디자인 시스템보다 빠르고 완벽한 타입 추론을 지원하는 black-ui를
사용해보세요!

### Installation

```
npm i @black-ui/react
```

### Theming

black-ui를 사용하기 위해서는 반드시 최상위 컴포넌트를 ThemePovider 컴포넌트로
감싸야합니다.

기본 테마는 light이지만 defaultMode props로 기본 테마를 변경할 수 있습니다.

```jsx
<ThemeProvider defaultMode="light">
  <App />
</ThemeProvider>
```

또한 ThemeSwitcher 컴포넌트를 통해 테마를 자유롭게 변경할 수 있습니다.

```jsx
<ThemeSwitcher></ThemeSwitcher>
```

## Storybook - [Docs](https://65b7157bc6ef4fa60075271e-pvxmmgjkal.chromatic.com/)

Storybook으로 배포한 Black UI 컴포넌트들을 직접 사용해볼 수 있어요!

## Todo

- 스타일 가이드 작성하기
- 테스트 코드 보완하기
- SSR 대응하기
- 반응형 디자인 구현
- 웹 접근성 높이기 [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/)
- Headless 컴포넌트 추가
- Context API 최적화
- 번들 사이즈 최적화
- 컴포넌트 단위로 패키지 분할
- Figma 연동
- 공통 로직 분리하기
- 컴포넌트 추가 구현하기
  - Carousel
  - Calendar
  - Date Picker

## Components

### DataDisplay

#### Avatar - [Source](https://github.com/hyeon9782/black-ui/tree/main/src/components/DataDisplay/Avatar)

##### Import

```js
import { Avatar } from "@black-ui/react";
```

##### Usage

```js
export const Example = () => {
  return <Avatar src="/images/profile.jpg" alt="Name" size="sm" />;
};
```

#### Card - [Source](https://github.com/hyeon9782/black-ui/tree/main/src/components/DataDisplay/Card)

##### Import

```js
import { Card, CardHeader, CardBody, CardFooter } from "@black-ui/react";
```

##### Usage

```js
export const Example = () => {
  return (
    <Card variant="elevated">
      <CardHeader>Header</CardHeader>
      <CardBody>Body</CardBody>
      <CardFooter>Footer</CardFooter>
    </Card>
  );
};
```

#### List - [Source](https://github.com/hyeon9782/black-ui/tree/main/src/components/DataDisplay/List)

##### Import

```js
import { List, ListItem, ListIcon } from "@black-ui/react";
```

##### Usage

```js
export const Example = () => {
  return (
    <List>
      <ListItem>
        <ListIcon as={<IoMdSettings />} color="green" />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
      </ListItem>
      <ListItem>
        <ListIcon as={<IoMdSettings />} color="green" />
        Assumenda, quia temporibus eveniet a libero incidunt suscipit
      </ListItem>
      <ListItem>
        <ListIcon as={<IoMdSettings />} color="green" />
        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
      </ListItem>
      <ListItem>
        <ListIcon as={<IoMdSettings />} color="green" />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
      </ListItem>
    </List>
  );
};
```

#### Table - [Source](https://github.com/hyeon9782/black-ui/tree/main/src/components/DataDisplay/Table)

##### Import

```js
import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@black-ui/react";
```

##### Usage

```js
export const Example = () => {
  return (
    <TableContainer>
      <Table variant="filled">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th>multiply by</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td>25.4</Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td>0.91444</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};
```

#### Tag - [Source](https://github.com/hyeon9782/black-ui/tree/main/src/components/DataDisplay/Tag)

##### Import

```js
import { Tag, TagIcon, TagLabel } from "@black-ui/react";
```

##### Usage

```js
export const Example = () => {
  return (
    <>
      <Tag>Sample Tag</Tag>
      <Tag color="red" variant="solid">
        <TagIcon as={<IoMdSettings />} />
        <TagLabel>Left Icon</TagLabel>
      </Tag>
      <Tag color="blue" variant="subtle">
        <TagLabel>Right Icon</TagLabel>
        <TagIcon as={<IoMdSettings />} />
      </Tag>
      <Tag>
        <TagLabel>Close Tag</TagLabel>
      </Tag>
    </>
  );
};
```

### Disclosure

#### Accordion - [Source](https://github.com/hyeon9782/black-ui/tree/main/src/components/Disclosure/Accordion)

##### Import

```js
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@black-ui/react";
```

##### Usage

```js
export const Example = () => {
  return (
    <Accordion>
      <AccordionItem>
        <AccordionButton>First Title</AccordionButton>
        <AccordionPanel>First Contents</AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>Second Title</AccordionButton>
        <AccordionPanel>Second Contents</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
```

#### Tabs - [Source](https://github.com/hyeon9782/black-ui/tree/main/src/components/Disclosure/Tabs)

##### Import

```js
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@black-ui/react";
```

##### Usage

```js
export const Example = () => {
  return (
    <Tabs variant="soft-rounded">
      <TabList>
        <Tab>First Tab</Tab>
        <Tab>Second Tab</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>First Panel</TabPanel>
        <TabPanel>Second Panel</TabPanel>
      </TabPanels>
    </Tabs>
  );
};
```

#### VisuallyHidden - [Source](https://github.com/hyeon9782/black-ui/tree/main/src/components/Disclosure/VisuallyHidden)

##### Import

```js
import { VisuallyHidden, VisuallyHiddenInput } from "@black-ui/react";
```

##### Usage

```js
export const Example = () => {
  return (
    <>
      <VisuallyHidden>Hello</VisuallyHidden>
      <VisuallyHiddenInput />
    </>
  );
};
```

### Feedback

#### Progress - [Source](https://github.com/hyeon9782/black-ui/tree/main/src/components/Feedback/Progress)

##### Import

```js
import { Progress } from "@black-ui/react";
```

##### Usage

```js
export const Example = () => {
  const [value, setValue] = useState(0);
  return <Progress value={value} />;
};
```

#### Skeleton - [Source](https://github.com/hyeon9782/black-ui/tree/main/src/components/Feedback/Skeleton)

##### Import

```js
import { Skeleton } from "@black-ui/react";
```

##### Usage

```js
export const Example = () => {
  return (
    <Skeleton width="150px" height="150px" radius="15px" background="gray" />
  );
};
```

#### Spinner - [Source](https://github.com/hyeon9782/black-ui/tree/main/src/components/Feedback/Spinner)

##### Import

```js
import { Spinner } from "@black-ui/react";
```

##### Usage

```js
export const Example = () => {
  return <Spinner size="sm" />;
};
```

#### Toast - [Source](https://github.com/hyeon9782/black-ui/tree/main/src/components/Feedback/Toast)

##### Import

```js
import { ToastProvider, useToast, Button } from "@black-ui/react";
```

##### Usage

```js
export const Example = () => {
  const { openToast } = useToast();
  return (
    <ToastProvider>
      <Button
        onClick={() =>
          openToast({
            title: "Title",
            description: "Description",
            status: "success",
          })
        }
      >
        Toast
      </Button>
    </ToastProvider>
  );
};
```

### Form

#### Button - [Source](https://github.com/hyeon9782/black-ui/tree/main/src/components/Form/Button)

##### Import

```js
import { Button, IconButton } from "@black-ui/react";
```

##### Usage

```js
export const Example = () => {
  return (
    <>
      <Button size="lg" variant="solid" color="black" leftIcon={<IoMdClose />}>
        Button
      </Button>
      <Button size="lg" variant="outline" color="red" rightIcon={<IoMdClose />}>
        Button
      </Button>
      <Button
        size="lg"
        variant="solid"
        color="black"
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
        color="black"
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
      <IconButton icon={<IoMdStar />} aria-label="Star" isLoading />
    </>
  );
};
```

#### Checkbox - [Source](https://github.com/hyeon9782/black-ui/tree/main/src/components/Form/Checkbox)

##### Import

```js
import { Checkbox } from "@black-ui/react";
```

##### Usage

```js
export const Example = () => {
  return (
    <>
      <Checkbox color="black" size="xs">
        XS Checkbox
      </Checkbox>
      <Checkbox color="red" size="sm" disabled>
        SM Checkbox
      </Checkbox>
      <Checkbox color="red" size="md" defaultChecked>
        MD Checkbox
      </Checkbox>
      <Checkbox color="red" size="lg" readOnly>
        LG Checkbox
      </Checkbox>
    </>
  );
};
```

#### FormControl - [Source](https://github.com/hyeon9782/black-ui/tree/main/src/components/Form/FormControl)

##### Import

```js
import {
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Input,
} from "@black-ui/react";
```

##### Usage

```js
export const Example = () => {
  return (
    <FormControl>
      <FormLabel>Email</FormLabel>
      <Input />
      <FormHelperText>
        Enter the email you'd like to receive the newsletter on.
      </FormHelperText>
      <FormErrorMessage>Email is required.</FormErrorMessage>
    </FormControl>
  );
};
```

#### Input - [Source](https://github.com/hyeon9782/black-ui/tree/main/src/components/Form/Input)

##### Import

```js
import { Input } from "@black-ui/react";
```

##### Usage

```js
export const Example = () => {
  return (
    <>
      <Input placeholder="아이디를 입력해라" size="xs" variant="outline" />
      <Input placeholder="아이디를 입력해라" size="xs" variant="filled" />
      <Input placeholder="아이디를 입력해라" size="xs" variant="flushed" />
      <Input placeholder="아이디를 입력해라" size="xs" variant="unstyled" />
    </>
  );
};
```

#### PinInput - [Source](https://github.com/hyeon9782/black-ui/tree/main/src/components/Form/PinInput)

##### Import

```js
import { PinInput, PinInputField } from "@black-ui/react";
```

##### Usage

```js
export const Example = () => {
  return (
    <PinInput size="lg" mask>
      <PinInputField />
      <PinInputField />
      <PinInputField />
      <PinInputField />
    </PinInput>
  );
};
```

#### Radio - [Source](https://github.com/hyeon9782/black-ui/tree/main/src/components/Form/Radio)

##### Import

```js
import { RadioGroup, Radio } from "@black-ui/react";
```

##### Usage

```js
export const Example = () => {

  const [radioValue, setRadioValue] = useState("");

  const changeRadio = (value: string) => {
    setRadioValue(value);
  };

  return (
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
  );
};
```

#### CustomSelect - [Source](https://github.com/hyeon9782/black-ui/tree/main/src/components/Form/CustomSelect)

##### Import

```js
import {
  CustomSelect,
  CustomSelectTrigger,
  CustomSelectContent,
  CustomSelectGroup,
  CustomSelectLabel,
  CustomSelectItem,
} from "@black-ui/react";
```

##### Usage

```js
export const Example = () => {
  return (
    <CustomSelect size="md" variant="outline" label="과일을 선택해주세요.">
      <CustomSelectTrigger></CustomSelectTrigger>
      <CustomSelectContent>
        <CustomSelectGroup>
          <CustomSelectLabel>Fruits</CustomSelectLabel>
          <CustomSelectItem value="apple">Apple</CustomSelectItem>
          <CustomSelectItem value="banana">Banana</CustomSelectItem>
          <CustomSelectItem value="blueberry">Blueberry</CustomSelectItem>
        </CustomSelectGroup>
      </CustomSelectContent>
    </CustomSelect>
  );
};
```

#### Slider - [Source](https://github.com/hyeon9782/black-ui/tree/main/src/components/Form/Slider)

##### Import

```js
import { Slider } from "@black-ui/react";
```

##### Usage

```js
export const Example = () => {
  const [value, setValue] = useState(0);
  return (
    <Slider
      color="red"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
```

#### Switch - [Source](https://github.com/hyeon9782/black-ui/tree/main/src/components/Form/Switch)

##### Import

```js
import { Switch } from "@black-ui/react";
```

##### Usage

```js
export const Example = () => {
  const [value, setValue] = useState("");
  return (
    <Switch
      size="xs"
      color="red"
      value={value}
      onChage={(e) => value(e.target.value)}
    >
      Red
    </Switch>
  );
};
```

#### Textarea - [Source](https://github.com/hyeon9782/black-ui/tree/main/src/components/Form/Textarea)

##### Import

```js
import { Textarea } from "@black-ui/react";
```

##### Usage

```js
export const Example = () => {
  const [value, setValue] = useState("");
  return (
    <Textarea
      placeholder="Here is a sample placeholder"
      size="sm"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
```

### Overlay

#### Drawer - [Source](https://github.com/hyeon9782/black-ui/tree/main/src/components/Overlay/Drawer)

##### Import

```js
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
} from "@black-ui/react";
```

##### Usage

```js
export const Example = () => {
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();
  return (
    <Drawer isOpen={isDrawerOpen} onClose={onDrawerClose} placement={placement}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Header</DrawerHeader>
        <DrawerBody>Body</DrawerBody>
        <DrawerFooter>Footer</DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
```

#### Menu - [Source](https://github.com/hyeon9782/black-ui/tree/main/src/components/Overlay/Menu)

##### Import

```js
import { Menu, MenuButton, MenuList, MenuItem } from "@black-ui/react";
```

##### Usage

```js
export const Example = () => {
  return (
    <Menu>
      <MenuButton>Menu 나와라!</MenuButton>
      <MenuList>
        <MenuItem
          onClick={() => {
            alert("다운로드!");
          }}
        >
          Download
        </MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  );
};
```

#### Modal - [Source](https://github.com/hyeon9782/black-ui/tree/main/src/components/Overlay/Modal)

##### Import

```js
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@black-ui/react";
```

##### Usage

```js
export const Example = () => {
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();
  return (
    <>
      <Button onClick={onModalOpen}>Modal 나와라!</Button>
      <Modal isOpen={isModalOpen} onClose={onModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>Modal 입니다!</div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => onModalClose()}>취소</Button>
            <Button onClick={() => onModalClose()}>확인</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
```

#### Popover - [Source](https://github.com/hyeon9782/black-ui/tree/main/src/components/Overlay/Popover)

##### Import

```js
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton,
  Button,
} from "@black-ui/react";
```

##### Usage

```js
export const Example = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button>Popover 나와라!</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <div>Popover입니다!!</div>
      </PopoverContent>
    </Popover>
  );
};
```

#### Tooltip - [Source](https://github.com/hyeon9782/black-ui/tree/main/src/components/Overlay/Tooltip)

##### Import

```js
import { Tooltip } from "@black-ui/react";
```

##### Usage

```js
export const Example = () => {
  return (
    <Tooltip label="Hover me">
      <Button>Tooltip 나와라!</Button>
    </Tooltip>
  );
};
```

### Other

#### CloseButton - [Source](https://github.com/hyeon9782/black-ui/tree/main/src/components/Other/CloseButton)

##### Import

```js
import { CloseButton } from "@black-ui/react";
```

##### Usage

```js
export const Example = () => {
  return <CloseButton size="sm" />;
};
```

#### Portal - [Source](https://github.com/hyeon9782/black-ui/tree/main/src/components/Other/Portal)

##### Import

```js
import { Portal } from "@black-ui/react";
```

##### Usage

```js
export const Example = () => {
  return (
    <Portal>
      <div>This text is portaled at the end of document.body!</div>
    </Portal>
  );
};
```

#### Theme - [Source](https://github.com/hyeon9782/black-ui/tree/main/src/components/Other/Theme)

##### Import

```js
import { ThemeProvider, ThemeSwitcher } from "@black-ui/react";
```

##### Usage

```js
export const Example = () => {
  return (
    <ThemeProvider defaultMode="light">
      <ThemeSwitcher></ThemeSwitcher>
    </ThemeProvider>
  );
};
```

## Hooks

### useDisclosure - [Source](https://github.com/hyeon9782/black-ui/blob/main/src/hooks/useDisclosure.ts)

#### Import

```js
import { useDisclosure } from "@black-ui/react";
```

#### Usage

```js
export const Example = () => {
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();
  return (
    <>
      <Button onClick={onModalOpen}>Modal 나와라!</Button>
      <Modal isOpen={isModalOpen} onClose={onModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>Modal 입니다!</div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => onModalClose()}>취소</Button>
            <Button onClick={() => onModalClose()}>확인</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
```

### useClipboard - [Source](https://github.com/hyeon9782/black-ui/blob/main/src/hooks/useClipboard.ts)

#### Import

```js
import { useClipboard } from "@black-ui/react";
```

#### Usage

```js
export const Example = () => {
  const { onCopy, value, setValue, hasCopied } = useClipboard("");
  return (
    <>
      <Input
        placeholder={"내용이 복사됩니다."}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <Button onClick={onCopy}>{hasCopied ? "Copied!" : "Copy"}</Button>
    </>
  );
};
```

### useOutsideClick - [Source](https://github.com/hyeon9782/black-ui/blob/main/src/hooks/useOutsideClick.ts)

#### Import

```js
import { useOutsideClick } from "@black-ui/react";
```

#### Usage

```js
function Example() {
  const ref = React.useRef();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  useOutsideClick({
    ref: ref,
    handler: () => setIsModalOpen(false),
  });

  return (
    <>
      {isModalOpen ? (
        <div ref={ref}>
          👋 Hey, I'm a modal. Click anywhere outside of me to close.
        </div>
      ) : (
        <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      )}
    </>
  );
}
```
