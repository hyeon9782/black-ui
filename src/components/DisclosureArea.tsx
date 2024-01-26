import { container, overlayContainer } from "@/app.css";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "./Disclosure/Accordion";

const DisclosureArea = () => {
  return (
    <div className={overlayContainer}>
      <fieldset className={container}>
        <legend>Accordion</legend>
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
      </fieldset>
    </div>
  );
};

export default DisclosureArea;
