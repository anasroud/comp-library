import React from 'react';
import IButtonProps from '../typings';
import styles from './ButtonWIthIcon.scss';
import cx from 'classnames';

export interface IButtonWithIconProps extends IButtonProps {
  theme?: 'light' | 'dark';
  icon: React.ReactElement;
}

const ButtonWithIcon = ({
  onClick,
  label,
  buttonTag = 'button',
  isDisabled = false,
  theme = 'light',
  icon,
}: IButtonWithIconProps) => {
  const As = buttonTag;
  return (
    <As
      data-theme={theme}
      role={buttonTag}
      className={cx(styles.button, { [styles.disabled]: isDisabled })}
      onClick={!isDisabled ? onClick : undefined}>
      {icon && <div className={styles.iconWrapper}>{icon}</div>}
      {label}
    </As>
  );
};

export default ButtonWithIcon;
