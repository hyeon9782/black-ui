import {
  Accordion,
  AccordionButton,
  AccordionPanel,
  AccordionItem,
} from "@/components/Disclosure/Accordion";
import Card from "@/components/DataDisplay/Card";
import { Avatar } from "./DataDisplay/Avatar";
import { container, overlayContainer } from "@/app.css";

const DataDisplayArea = () => {
  return (
    <div className={overlayContainer}>
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
      <fieldset className={container}>
        <legend>Avatar</legend>
        <Avatar name="jeongho" src="/이력서 사진.jpg" size="xs" />
        <Avatar name="jeongho" src="/이력서 사진.jpg" size="sm" />
        <Avatar name="jeongho" src="/이력서 사진.jpg" size="md" />
        <Avatar name="jeongho" src="/이력서 사진.jpg" size="lg" />
        <Avatar name="jeongho" src="/이력서 사진.jpg" size="xl" />
        <Avatar name="jeongho" src="/이력서 사진!!.jpg" size="2xl" />
      </fieldset>
      <fieldset className={container}>
        <legend>Card</legend>
        <Card>Card</Card>
      </fieldset>
      <fieldset className={container}>
        <legend>List</legend>
      </fieldset>
      <fieldset className={container}>
        <legend>Badge</legend>
      </fieldset>
      <fieldset className={container}>
        <legend>Tag</legend>
      </fieldset>
      <fieldset className={container}>
        <legend>Table</legend>
      </fieldset>
    </div>
  );
};

export default DataDisplayArea;
