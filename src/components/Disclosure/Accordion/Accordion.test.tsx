import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Accordion, { AccordionProps } from "./Accordion";
import AccordionItem from "./AccordionItem";
import AccordionButton from "./AccordionButton";
import AccordionPanel from "./AccordionPanel";

describe("Accordion 컴포넌트 테스트", () => {
  const Component = (args: AccordionProps) => {
    return (
      <Accordion {...args}>
        <AccordionItem>
          <AccordionButton>1번 제목</AccordionButton>
          <AccordionPanel>1번 내용</AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>2번 제목</AccordionButton>
          <AccordionPanel>2번 내용</AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
  };

  test("defaultIndex가 적용된다.", () => {
    render(<Component defaultIndex={0} />);

    const firstPanel = screen.getByText("1번 내용");

    expect(firstPanel).toBeVisible();
  });

  test("Button 컴포넌트를 클릭할 때 onChange callback이 실행된다.", () => {
    const fn = jest.fn();
    render(<Component onChange={fn} />);

    fireEvent.click(screen.getByText("1번 제목"));
    expect(fn).toHaveBeenCalled();
  });

  test("기본: Button 컴포넌트를 클릭하면 해당하는 Panel 컴포넌트가 열린다.", async () => {
    render(<Component />);

    const firstButton = screen.getByText("1번 제목");
    const firstPanel = screen.getByText("1번 내용");
    const secondButton = screen.getByText("2번 제목");
    const secondPanel = screen.getByText("2번 내용");

    expect(firstPanel).not.toBeVisible();
    expect(secondPanel).not.toBeVisible();

    fireEvent.click(firstButton);

    await waitFor(() => expect(firstPanel).toBeVisible());
    await waitFor(() => expect(secondPanel).not.toBeVisible());

    fireEvent.click(secondButton);

    await waitFor(() => expect(secondPanel).toBeVisible());
    await waitFor(() => expect(firstPanel).not.toBeVisible());
  });

  test("allowToggle: Button 컴포넌트를 클릭하면 Panel 컴포넌트가 Toggle된다.", async () => {
    render(<Component allowToggle />);

    const firstButton = screen.getByText("1번 제목");
    const firstPanel = screen.getByText("1번 내용");

    expect(firstPanel).not.toBeVisible();

    fireEvent.click(firstButton);

    await waitFor(() => expect(firstPanel).toBeVisible());

    fireEvent.click(firstButton);

    await waitFor(() => expect(firstPanel).not.toBeVisible());
  });
  test("allowMultiple: Button 컴포넌트를 클릭하면 해당하는 Panel 컴포넌트가 Toggle되고 여러개의 Panel을 열 수 있다.", async () => {
    render(<Component allowMultiple />);

    const firstButton = screen.getByText("1번 제목");
    const firstPanel = screen.getByText("1번 내용");
    const secondButton = screen.getByText("2번 제목");
    const secondPanel = screen.getByText("2번 내용");

    expect(firstPanel).not.toBeVisible();
    expect(secondPanel).not.toBeVisible();

    fireEvent.click(firstButton);

    await waitFor(() => expect(firstPanel).toBeVisible());
    await waitFor(() => expect(secondPanel).not.toBeVisible());

    fireEvent.click(secondButton);

    await waitFor(() => expect(secondPanel).toBeVisible());
    await waitFor(() => expect(firstPanel).toBeVisible());

    fireEvent.click(secondButton);
    await waitFor(() => expect(secondPanel).not.toBeVisible());
  });
});
