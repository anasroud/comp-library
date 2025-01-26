import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ShowCaseCard, { ShowCaseCardProps } from './ShowCaseCard';

export default {
  title: 'Components/Cards/ShowCaseCard',
  component: ShowCaseCard,
} as Meta;

const Template: StoryFn<ShowCaseCardProps> = (args) => (
    <div
        style={{
            margin: '0 auto',
            padding: '2rem',
         }}>
      <ShowCaseCard {...args} />
    </div>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Default Title',
  description: 'This is a default description for the ShowCaseCard.',
  image: 'https://placehold.co/200x200',
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  title: 'Dark Theme',
  description: 'This is a dark themed ShowCaseCard.',
  image: 'https://placehold.co/200x200',
  theme: 'dark',
};

export const AsButton = Template.bind({});
AsButton.args = {
  title: 'As Button',
  description: 'This ShowCaseCard is rendered as a button.',
  image: 'https://placehold.co/200x200',
  asButton: true,
  onClick: () => alert('Card clicked!'),
};

const customHeight: StoryFn<ShowCaseCardProps> = (args: ShowCaseCardProps) => {
  return (
    <div
        style={{
            '--img-height': '450px',
            margin: '0 auto',
            padding: '2rem',
         } as React.CSSProperties}>
      <ShowCaseCard {...args} />
    </div>
  );
};

export const CustomHeight = customHeight.bind({});
CustomHeight.args = {
  title: 'With custom Height',
  description: 'This ShowCaseCard has limitedHeight.',
  image: 'https://placehold.co/450x450',
};
