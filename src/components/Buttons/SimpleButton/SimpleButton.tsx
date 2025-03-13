import React from 'react';
import IButtonProps from '../typings';
import styles from './SimpleButton.scss';
import cx from 'classnames';

export interface ISimpleButtonProps extends IButtonProps {
  fill?: boolean;
  isActive?: boolean;
}

const SimpleButton = ({
  onClick,
  label,
  buttonTag = 'button',
  isDisabled = false,
  className,
  buttonLink,
  fill,
  isActive,
  theme = 'light',
}: ISimpleButtonProps) => {
  const As = buttonTag;
  return (
    <As
      data-theme={theme}
      className={cx(
        styles.button,
        { [styles.disabled]: isDisabled },
        className,
        { [styles.fill]: fill || isActive },
      )}
      href={buttonTag !== 'button' ? buttonLink : undefined}
      onClick={onClick}>
      {label}
    </As>
  );
};

export default SimpleButton;
