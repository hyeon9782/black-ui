import { fireEvent, render, screen } from "@testing-library/react";
import Accordion from "./Accordion";
import AccordionItem from "./AccordionItem";
import AccordionButton from "./AccordionButton";
import AccordionPanel from "./AccordionPanel";

describe("Accordion Tests", () => {
  test("제어 컴포넌트: 클릭하면 panel이 열리거나 닫혀라", () => {
    render(
      <Accordion>
        <AccordionItem>
          <AccordionButton>1번 제목</AccordionButton>
          <AccordionPanel>1번 내용</AccordionPanel>
        </AccordionItem>
      </Accordion>
    );

    const accordionButton = screen.getByText("1번 제목");

    fireEvent.click(accordionButton);

    const accordionPanel = screen.getByText("1번 내용");

    expect(accordionPanel).toBeVisible();

    // fireEvent.click(accordionButton);

    // expect(accordionPanel).not.toBeInTheDocument();
  });

  test("allowMultiple이 false면 2개 이상의 Panel이 열리지 않는다.", () => {
    render(
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
    );

    const button1 = screen.getByText("1번 제목");
    const button2 = screen.getByText("2번 제목");

    fireEvent.click(button1);

    const panel1 = screen.getByText("1번 내용");

    expect(panel1).toBeVisible();

    fireEvent.click(button2);

    const panel2 = screen.getByText("2번 내용");

    expect(panel2).toBeVisible();

    expect(panel1).not.toBeVisible();
  });

  test("allowMultiple이 true면 2개 이상의 Panel이 열린다.", () => {
    render(
      <Accordion allowMultiple>
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

    const button1 = screen.getByText("1번 제목");
    const button2 = screen.getByText("2번 제목");

    fireEvent.click(button1);

    const panel1 = screen.getByText("1번 내용");

    expect(panel1).toBeVisible();

    fireEvent.click(button2);

    const panel2 = screen.getByText("2번 내용");

    expect(panel2).toBeVisible();

    expect(panel1).toBeVisible();
  });
});
