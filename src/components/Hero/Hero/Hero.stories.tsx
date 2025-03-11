import React, { useRef, useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Hero, { IHeroProps } from './Hero';
import styles from './Hero.stories.scss';

export default {
  title: 'Components/Hero/Hero',
  component: Hero,
} as Meta;

const Template: StoryFn<IHeroProps> = (args) => {
  const [bgPosition, setBgPosition] = useState('center');
  const [transition, setTransition] = useState('none');
  const centerPoint = useRef<{ x: number; width: number } | null>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - left;

    // Store mouse enter position as the new center point
    centerPoint.current = { x: mouseX, width };

    // Set initial background position based on mouse enter position
    const percentage = (mouseX / width) * 50 + 25;
    setBgPosition(`${percentage}% center`);

    setTransition('background-position 0.4s ease-out');
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!centerPoint.current) return;

    const { left } = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const deltaX = mouseX - centerPoint.current.x;

    // Calculate percentage relative to the initial center point
    const percentage =
      ((centerPoint.current.x + deltaX) / centerPoint.current.width) * 50 + 25;

    setBgPosition(`${percentage}% center`);
    setTransition('none'); // Remove transition while tracking
  };

  const handleMouseLeave = () => {
    setTransition('background-position 0.6s ease-out'); // Smooth return to center
    setBgPosition('center');
  };

  return (
    <Hero
      {...args}
      className={styles.heroClippedContainer}
      contentClassName={styles.heroClippedInnerContainer}
      backgroundPosition={bgPosition}
      transition={transition}
      buttonClassName={styles.heroButton}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Default Title',
  subtitle: 'This is a default subtitle for the HeroClipped.',
  buttonLabel: 'Hero Button',
  buttonOnClick: () => console.log('Button clicked!'),
};
