import React from "react";
import AppointementStatusTag from "./AppointementStatusTag";

export default {
  title: "Components/AppointementStatusTag",
  component: AppointementStatusTag,
  tags: ["autodocs"],
};

const Template = (args) => <AppointementStatusTag {...args} />;

export const Confirmed = Template.bind({});
Confirmed.args = {
  status: "confirmed",
  variant: "default",
};

export const Pending = Template.bind({});
Pending.args = {
  status: "pending",
  variant: "default",
};

export const Available = Template.bind({});
Available.args = {
  status: "available",
  variant: "default",
};

export const Unavailable = Template.bind({});
Unavailable.args = {
  status: "unavailable",
  variant: "default",
};

export const Cancelled = Template.bind({});
Cancelled.args = {
  status: "cancelled",
  variant: "default",
};

export const Passed = Template.bind({});
Passed.args = {
  status: "passed",
  variant: "default",
};

export const RefusedStatus = Template.bind({});
RefusedStatus.args = {
  status: "refused",
  variant: "default",
};

export const ConfirmedBig = Template.bind({});
ConfirmedBig.args = {
  status: "confirmed",
  variant: "big",
};

export const PassedBig = Template.bind({});
PassedBig.args = {
  status: "passed",
  variant: "big",
};

export const CancelledBigVariant = Template.bind({});
CancelledBigVariant.args = {
  status: "cancelled",
  variant: "big",
};
