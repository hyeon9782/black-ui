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

import Tooltip from "./Overlay/Tooltip/Tooltip";
import {
  Popover,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
} from "./Overlay/Popover";
import { container, overlayContainer } from "@/app.css";
import { Menu, MenuButton, MenuItem, MenuList } from "./Overlay/Menu";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "./Overlay/Modal";
import { Button } from "./Form";
const OverlayArea = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();

  return (
    <div className={overlayContainer}>
      <fieldset className={container}>
        <legend>Drawer</legend>
        <Button onClick={onOpen}>Drawer 나와라!</Button>
        <Drawer isOpen={isOpen} onClose={onClose} placement="left">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Header</DrawerHeader>
            <DrawerBody>Body</DrawerBody>
            <DrawerFooter>Footer</DrawerFooter>
          </DrawerContent>
        </Drawer>
      </fieldset>

      <fieldset className={container}>
        <legend>Modal</legend>
        <Button onClick={onModalOpen}>Modal 나와라!</Button>
        <Modal isOpen={isModalOpen} onClose={onModalClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div>Modal 입니다!</div>
            </ModalBody>
            <ModalFooter>
              <Button>취소</Button>
              <Button>확인</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </fieldset>

      <fieldset className={container}>
        <legend>Menu</legend>
        <Menu>
          <MenuButton>Menu 나와라!</MenuButton>
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
      </fieldset>

      <fieldset className={container}>
        <legend>Popover</legend>
        <Popover>
          <PopoverTrigger>
            <Button>Popover 나와라!</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverCloseButton />
            <div>Popover입니다!!</div>
          </PopoverContent>
        </Popover>
      </fieldset>

      <fieldset className={container}>
        <legend>Tooltip</legend>
        <Tooltip label="Hover me">
          <Button>Tooltip 나와라!</Button>
        </Tooltip>
      </fieldset>
    </div>
  );
};

export default OverlayArea;
