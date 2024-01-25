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
import { Menu, MenuButton, MenuItem, MenuList } from "./Overlay/Menu";
const OverlayArea = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className={overlayContainer}>
      <Button onClick={onOpen}>Drawer 나와라!</Button>

      <Button>Menu 나와라!</Button>
      <Menu>
        <MenuButton>Actions</MenuButton>
        <MenuList>
          <MenuItem
            onClick={() => {
              alert("다운로드!");
            }}
          >
            Download
          </MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
      <Popover>
        <PopoverTrigger>
          <Button>Popover 나와라!</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverCloseButton />
          <div>Popover입니다!!</div>
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
