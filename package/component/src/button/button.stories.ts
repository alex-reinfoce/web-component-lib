import { html } from "lit";
import "./button.js";
import { Meta, StoryObj } from "@storybook/web-components";

const meta = {
  title: "component/button",
  tags: ["autodocs"],
  component: "web-button",
} satisfies Meta;

export default meta;
type Story = StoryObj<Meta>;

export const Primary: Story = {
  render: () => html`<web-button />`,
};
