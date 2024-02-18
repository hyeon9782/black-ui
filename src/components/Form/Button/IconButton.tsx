import { ButtonHTMLAttributes, ReactElement } from "react";
import { Spinner } from "@/components/Feedback/Spinner";
import { Button } from ".";
import { ButtonVariants } from "./Button.css";
type IconButtonProps = ButtonVariants &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    icon: ReactElement;
    isLoading?: boolean;
    isActive?: boolean;
    isDisabled?: boolean;
    spinner?: ReactElement;
  };
const IconButton = ({ icon, isLoading, ...props }: IconButtonProps) => {
  return (
    <Button {...props} isLoading>
      {!isLoading ? icon : <Spinner />}
    </Button>
  );
};

export default IconButton;
