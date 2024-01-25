import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerCloseButton,
} from "@/components/Overlay/Drawer";
import useDisclosure from "@/hooks/useDisclosure";
import Button from "./Form/Button";
import Tooltip from "./Overlay/Tooltip/Tooltip";
import {
  Popover,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
} from "./Overlay/Popover";
import { overlayContainer } from "@/app.css";
const OverlayArea = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className={overlayContainer}>
      <Button onClick={onOpen}>Drawer 나와라!</Button>
      <Button>Menu 나와라!</Button>
      <Popover>
        <PopoverTrigger>
          <Button>Popover 나와라!</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverCloseButton />
        </PopoverContent>
      </Popover>
      <Tooltip label="Hover me">
        <Button>Tooltip 나와라!</Button>
      </Tooltip>
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Header</DrawerHeader>
          <DrawerBody>Body</DrawerBody>
          <DrawerFooter>Footer</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default OverlayArea;
