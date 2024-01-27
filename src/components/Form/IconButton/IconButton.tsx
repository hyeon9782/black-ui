import { ButtonHTMLAttributes, ReactElement } from "react";
import { IconButtonVariants, iconButton } from "./IconButton.css";
import { Spinner } from "@/components/Feedback/Spinner";
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
    <button {...props} className={iconButton({})}>
      {!isLoading ? icon : <Spinner />}
    </button>
  );
};

export default IconButton;
