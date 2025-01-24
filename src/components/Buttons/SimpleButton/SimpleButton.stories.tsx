import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SimpleButton from './SimpleButton';
import SimpleButtonProps from '../typings';

export default {
    title: 'Components/Buttons/SimpleButton',
    component: SimpleButton,
} as Meta;

const Template: StoryFn<SimpleButtonProps> = (args) => <SimpleButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Click Me',
    onClick: () => alert('Button clicked!'),
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Disabled Button',
    isDisabled: true,
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
    label: 'Dark Theme Button',
    theme: 'dark',
};
