import type { Meta, StoryObj } from "@storybook/react";
import Drawer from "./Drawer";
import DrawerBody from "./DrawerBody";
import DrawerCloseButton from "./DrawerCloseButton";
import DrawerContent from "./DrawerContent";
import DrawerFooter from "./DrawerFooter";
import DrawerHeader from "./DrawerHeader";
import DrawerOverlay from "./DrawerOverlay";
import useDisclosure from "@/hooks/useDisclosure";
import { Button } from "@/components/Form";

const meta = {
  title: "Component/Overlay/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    componentSubtitle: "Drawer 컴포넌트입니다.",
    docs: {
      description: {
        component: "placement props를 통해 열리는 위치를 지정할 수 있습니다.",
      },
    },
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Left: Story = {
  args: {
    placement: "left",
    children: <></>,
  },
  render: function Render(args) {
    const { isOpen, onClose, onOpen } = useDisclosure();

    return (
      <>
        <Button onClick={onOpen}>Drawer 나와라!</Button>
        <Drawer {...args} isOpen={isOpen} onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Header</DrawerHeader>
            <DrawerBody>Body</DrawerBody>
            <DrawerFooter>Footer</DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    );
  },
};
