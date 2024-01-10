import { withActions } from "@storybook/addon-actions/decorator";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    parameters: {
      actions: {
        argTypesRegex: "^on.*",
        handles: ["mouseover", "click .btn"],
      },
      decorators: [withActions],
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["solid", "outline", "ghost"],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    variant: "solid",
    children: "Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Button",
  },
};

export const Accessible = () => <button>Accessible button</button>;

export const Inaccessible = () => (
  <button style={{ backgroundColor: "red", color: "darkRed" }}>
    Inaccessible button
  </button>
);
