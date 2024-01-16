import {
  Accordion,
  AccordionButton,
  AccordionPanel,
  AccordionItem,
} from "@/components/Disclosure/Accordion";
import Card from "@/components/DataDisplay/Card";

const DataDisplayArea = () => {
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
      <div>
        <Card>Card</Card>
      </div>
    </div>
  );
};

export default DataDisplayArea;
