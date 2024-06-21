import React from "react";
import { action } from "@storybook/addon-actions";
import ButtonPrimary from "./ButtonPrimary";
import { ArrowRight } from "lucide-react";

export const ActionsData = {};

export default {
  title: "Components/ButtonPrimary",
  component: ButtonPrimary,
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
};

const Template = (args) => <ButtonPrimary {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Bouton",
  startIcon: null,
  endIcon: null,
  disabled: false,
};

export const WithStartIcon = Template.bind({});
WithStartIcon.args = {
  ...Default.args,
  startIcon: <ArrowRight />,
};

export const WithEndIcon = Template.bind({});
WithEndIcon.args = {
  ...Default.args,
  endIcon: <ArrowRight />,
};

export const WithStartAndEndIcons = Template.bind({});
WithStartAndEndIcons.args = {
  ...Default.args,
  startIcon: <ArrowRight />,
  endIcon: <ArrowRight />,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
