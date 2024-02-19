import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";
import ModalOverlay from "./ModalOverlay";
import ModalContent from "./ModalContent";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";
import ModalBody from "./ModalBody";
import useDisclosure from "@/hooks/useDisclosure";
import { Button } from "@/components/Form";
import ModalCloseButton from "./ModalCloseButton";

const meta = {
  title: "Component/Overlay/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    componentSubtitle: "Modal 컴포넌트입니다.",
    docs: {
      description: {
        component: "기존 UI를 차단하는 popup을 구현할 때 사용합니다.",
      },
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Left: Story = {
  args: {
    children: <></>,
  },
  render: function Render() {
    const { isOpen, onClose, onOpen } = useDisclosure();
    return (
      <>
        <Button onClick={onOpen}>Modal 나와라!</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div>Modal 입니다!</div>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>취소</Button>
              <Button onClick={onClose}>확인</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  },
};
