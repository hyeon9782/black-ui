import { container, overlayContainer } from "@/app.css";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "./Disclosure/Accordion";
import { VisuallyHidden } from "./Disclosure/VisuallyHidden";

const DisclosureArea = () => {
  return (
    <div className={overlayContainer}>
      <VisuallyHidden>안녕</VisuallyHidden>
      <fieldset className={container}>
        <legend>Accordion</legend>
        <Accordion>
          <AccordionItem value="Item 1" isDisabled>
            <AccordionButton>1번 제목</AccordionButton>
            <AccordionPanel>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="Item 2">
            <AccordionButton>2번 제목</AccordionButton>
            <AccordionPanel>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="Item 3">
            <AccordionButton>3번 제목</AccordionButton>
            <AccordionPanel>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion allowToggle>
          <AccordionItem value="Item 3">
            <AccordionButton>1번 제목</AccordionButton>
            <AccordionPanel>1번 내용</AccordionPanel>
          </AccordionItem>
          <AccordionItem value="Item 4">
            <AccordionButton>2번 제목</AccordionButton>
            <AccordionPanel>2번 내용</AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion allowMultiple>
          <AccordionItem value="Item 5">
            <AccordionButton>1번 제목</AccordionButton>
            <AccordionPanel>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="Item 6">
            <AccordionButton>2번 제목</AccordionButton>
            <AccordionPanel>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </fieldset>
    </div>
  );
};

export default DisclosureArea;
