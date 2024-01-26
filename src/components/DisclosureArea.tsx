import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "./Disclosure/Accordion";

const DisclosureArea = () => {
  return (
    <div>
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
    </div>
  );
};

export default DisclosureArea;
