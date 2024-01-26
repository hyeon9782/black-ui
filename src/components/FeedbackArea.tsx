import Button from "./Form/Button";
import useToast from "@/hooks/useToast";
const FeedbackArea = () => {
  const { openToast } = useToast();
  return (
    <div>
      <Button onClick={() => openToast()}>Toast 나와라!</Button>
    </div>
  );
};

export default FeedbackArea;
