import type { Meta, StoryObj } from "@storybook/react";
import Toast from "./Toast";
import useToast from "@/hooks/useToast";
import { Button } from "@/components/Form";
import ToastProvider from "./ToastProvider";

const meta = {
  title: "Component/Feedback/Toast",
  component: Toast,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ToastProvider>
        <div style={{ height: "500px" }}>{<Story />}</div>
      </ToastProvider>
    ),
  ],
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    title: "Toast입니다!",
    description: "Toast 설명입니다!",
    status: "success",
  },
  render: function Render(args) {
    const { openToast } = useToast();

    return (
      <Button
        onClick={() =>
          openToast({
            ...args,
          })
        }
      >
        Toast 나와라!
      </Button>
    );
  },
};

export const Error: Story = {
  args: {
    title: "Toast입니다!",
    description: "Toast 설명입니다!",
    status: "error",
  },
  render: function Render(args) {
    const { openToast } = useToast();

    return (
      <div>
        <Button
          onClick={() =>
            openToast({
              ...args,
            })
          }
        >
          Toast 나와라!
        </Button>
      </div>
    );
  },
};

export const Loading: Story = {
  args: {
    title: "Toast입니다!",
    description: "Toast 설명입니다!",
    status: "loading",
  },
  render: function Render(args) {
    const { openToast } = useToast();

    return (
      <Button
        onClick={() =>
          openToast({
            ...args,
          })
        }
      >
        Toast 나와라!
      </Button>
    );
  },
};
