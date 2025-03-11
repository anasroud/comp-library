import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ShowCaseCard, { ShowCaseCardProps } from './ShowCaseCard';
import styles from './ShowCaseCard.stories.scss';

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
      style={
        {
          '--img-height': '450px',
          margin: '0 auto',
          padding: '2rem',
        } as React.CSSProperties
      }>
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

const customWithMultipleInAContainer: StoryFn<{
  args: (ShowCaseCardProps & { style?: React.CSSProperties })[];
}> = (args) => {
  return (
    <div className={styles.story}>
      {args.args.map((card, index) => (
        <div className={card.className} key={index}>
          <ShowCaseCard key={index} {...card} />
        </div>
      ))}
    </div>
  );
};

export const Custom = customWithMultipleInAContainer.bind({});
Custom.args = {
  args: [
    {
      title: 'Multiple Cards',
      description: 'Multiple ShowCaseCards in a container.',
      theme: 'dark',
      className: styles.imageContainer,
      linkContent: 'https://google.com',
      image:
        'https://incubator.ucf.edu/wp-content/uploads/2023/07/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1-2048x1366.jpg',
    },
    {
      title: 'Multiple Cards',
      description: 'Multiple ShowCaseCards in a container.',
      theme: 'dark',
      className: styles.imageContainerSecond,
      image:
        'https://www.elegantthemes.com/blog/wp-content/uploads/2023/06/What-is-AI-1.jpg',
      asButton: false,
      linkContent: 'https://google.com',
    },
    {
      title: 'Multiple Cards',
      description: 'Multiple ShowCaseCards in a container.',
      theme: 'dark',
      className: styles.imageContainerThird,
      linkContent: 'https://google.com',
      image:
        'https://cubehr.co.uk/wp-content/uploads/2024/11/11.4-What-role-does-AI-play-in-HR.png',
    },
  ],
};
