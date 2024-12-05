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

export const Default: Story = {
  render: () => html`<web-button>Default</web-button>`,
};

export const Primary: Story = {
  render: () => html`<web-button color="primary">Primary</web-button>`,
};

export const Secondary: Story = {
  render: () => html`<web-button color="secondary">Secondary</web-button>`,
};

export const Size: Story = {
  render: () => html`
    <web-button size="small">Small</web-button>
    <web-button>Medium</web-button>
    <web-button size="large">Large</web-button>
  `,
};
