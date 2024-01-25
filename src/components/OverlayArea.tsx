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
const OverlayArea = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Button onClick={onOpen}>Drawer 나와라!</Button>
      <div>
        <Button onClick={onOpen}>Drawer 나와라!</Button>
        <Button onClick={onOpen}>Drawer 나와라!</Button>
        <Tooltip label="Hover me">
          <Button>Tooltip 나와라!</Button>
        </Tooltip>
      </div>
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
