import type { Meta, StoryObj } from "@storybook/react";
import Toast from "./Toast";

import { Button } from "@/components/Form";
import ToastProvider from "./ToastProvider";
import useToast from "./useToast";

const meta = {
  title: "Component/Feedback/Toast",
  component: Toast,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ToastProvider>
        <div
          style={{
            height: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {<Story />}
        </div>
      </ToastProvider>
    ),
  ],
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

const Component = (args: any) => {
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
};

export const Success: Story = {
  args: {
    title: "Scheduled: Catch up ",
    description: "Friday, February 10, 2023 at 5:57 PM",
    status: "success",
  },
  render: Component,
};

export const Warning: Story = {
  args: {
    title: "Scheduled: Catch up ",
    description: "Friday, February 10, 2023 at 5:57 PM",
    status: "warning",
  },
  render: Component,
};

export const Danger: Story = {
  args: {
    title: "Scheduled: Catch up ",
    description: "Friday, February 10, 2023 at 5:57 PM",
    status: "danger",
  },
  render: Component,
};

export const Info: Story = {
  args: {
    title: "Scheduled: Catch up ",
    description: "Friday, February 10, 2023 at 5:57 PM",
    status: "info",
  },
  render: Component,
};
