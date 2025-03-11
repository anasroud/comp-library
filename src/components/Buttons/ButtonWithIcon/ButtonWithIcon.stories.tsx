import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ButtonWithIcon, { IButtonWithIconProps } from './ButtonWithIcon';

export default {
  title: 'Components/Buttons/ButtonWithIcon',
  component: ButtonWithIcon,
} as Meta;

const Template: StoryFn<IButtonWithIconProps> = (args) => (
  <ButtonWithIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15v-4h4v4h-4zm0-6V7h4v4h-4z" />
    </svg>
  ),
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15v-4h4v4h-4zm0-6V7h4v4h-4z" />
    </svg>
  ),
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15v-4h4v4h-4zm0-6V7h4v4h-4" />
    </svg>
  ),
  isDisabled: true,
};
