import React from 'react';
import IButtonProps from '../typings';
import styles from './SimpleButton.scss';
import cx from 'classnames';

const SimpleButton = ({
  onClick,
  label,
  buttonTag = 'button',
  isDisabled = false,
  className,
  theme = 'light',
}: IButtonProps) => {
  const As = buttonTag;
  return (
    <As
      data-theme={theme}
      className={cx(
        styles.button,
        { [styles.disabled]: isDisabled },
        className,
      )}
      onClick={onClick}>
      {label}
    </As>
  );
};

export default SimpleButton;
