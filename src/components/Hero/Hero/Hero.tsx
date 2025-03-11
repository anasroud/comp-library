import React from 'react';
import styles from './Hero.scss';
import cx from 'classnames';
import DefaultProps from '../../../shared/typings/DefaultProps';
import { SimpleButton } from '../../Buttons';

export interface IHeroProps extends DefaultProps {
  backgroundPosition?: string;
  buttonClassName?: string;
  buttonLabel: string;
  buttonOnClick: () => void;
  contentClassName?: string;
  subtitle: string;
  title: string;
  transition?: string;
}

const Hero = ({
  backgroundPosition,
  buttonClassName,
  buttonLabel,
  buttonOnClick,
  className,
  contentClassName,
  subtitle,
  title,
  transition,
}: IHeroProps) => {
  return (
    <div
      style={{
        backgroundPosition: backgroundPosition,
        transition,
      }}
      className={cx(styles.heroContainer, className)}>
      <div className={cx(styles.heroContent, contentClassName)}>
        <h1 className={styles.heroTitle}>{title}</h1>
        <p className={styles.heroSubtitle}>{subtitle}</p>
        <SimpleButton
          className={cx(styles.buttonContainer, buttonClassName)}
          label={buttonLabel}
          onClick={buttonOnClick}
        />
      </div>
    </div>
  );
};

export default Hero;
