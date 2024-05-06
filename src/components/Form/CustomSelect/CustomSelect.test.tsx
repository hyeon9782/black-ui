import { fireEvent, render, screen } from "@testing-library/react";
import CustomSelect, { CustomSelectProps } from "./CustomSelect";
import CustomSelectContent from "./CustomSelectContent";
import CustomSelectGroup from "./CustomSelectGroup";
import CustomSelectItem from "./CustomSelectItem";
import CustomSelectLabel from "./CustomSelectLabel";
import CustomSelectTrigger from "./CustomSelectTrigger";

describe("CustomSelect 컴포넌트 테스트", () => {
  const Component = (args: CustomSelectProps) => {
    return (
      <CustomSelect {...args}>
        <CustomSelectTrigger data-testid="select-trigger" />
        <CustomSelectContent data-testid="select-content">
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

  test("CustomSelect 컴포넌트가 렌더링된다.", () => {
    render(<Component data-testid="custom-select" />);
    const customSelect = screen.getByTestId("custom-select");
    expect(customSelect).toBeInTheDocument();
  });

  test("CustomSelectTrigger 컴포넌트를 클릭하면 CustomSelectContent 컴포넌트가 보인다.", () => {
    render(<Component data-testid="custom-select" />);

    const trigger = screen.getByTestId("select-trigger");
    const content = screen.getByTestId("select-content");

    expect(content).not.toBeVisible();

    fireEvent.click(trigger);

    expect(content).toBeVisible();
  });
});
