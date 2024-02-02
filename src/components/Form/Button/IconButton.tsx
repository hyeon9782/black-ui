import { ButtonHTMLAttributes, ReactElement } from "react";
import { IconButtonVariants, iconButton } from "./IconButton.css";
import { Spinner } from "@/components/Feedback/Spinner";
import { Button } from ".";
type IconButtonProps = IconButtonVariants &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    icon: ReactElement;
    isLoading?: boolean;
    isActive?: boolean;
    isDisabled?: boolean;
    spinner?: ReactElement;
  };
const IconButton = ({ icon, isLoading, ...props }: IconButtonProps) => {
  return (
    <Button {...props} isLoading className={iconButton({})}>
      {!isLoading ? icon : <Spinner />}
    </Button>
  );
};

export default IconButton;
