import { ReactNode, useContext } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { AccordionContext } from "./Accordion";
import { button } from "./Accordion.css";
type Props = {
  children: ReactNode;
  index?: number;
};
const AccordionButton = ({ children, index = 0 }: Props) => {
  const { changeIndex, allowMultiple, toggleIndex, checkIndex } =
    useContext(AccordionContext);

  const handleButtonClick = (index: number) => {
    if (allowMultiple) {
      toggleIndex(index);
    }
    changeIndex(index);
  };
  return (
    <div onClick={() => handleButtonClick(index)} className={button}>
      {children}
      {checkIndex(index) ? <IoIosArrowUp /> : <IoIosArrowDown />}
    </div>
  );
};

export default AccordionButton;
