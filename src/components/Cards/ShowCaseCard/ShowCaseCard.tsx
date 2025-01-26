import React from 'react';
import { CardProps } from '../typings';
import styles from './ShowCaseCard.scss';
import cx from 'classnames';

export interface ShowCaseCardProps extends CardProps {
  asButton?: boolean;
}

const ShowCaseCard = ({
  asButton = false,
  title,
  theme = 'light',
  description,
  image,
  contentAlignment = 'left',
  linkContent,
  onClick,
}: ShowCaseCardProps) => {
  const As = asButton ? 'button' : 'a';
  return (
    <As
      data-theme={theme}
      className={styles.card}
      onClick={onClick}
      href={linkContent}
      target="_blank">
      <div className={styles.imageContainer}>
        <img className={styles.cardImage} src={image} alt={title} />
      </div>
      <div
        data-testid="cardContent"
        className={cx(styles.cardContent, {
          [styles.middle]: contentAlignment === 'middle',
        })}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </As>
  );
};

export default ShowCaseCard;
