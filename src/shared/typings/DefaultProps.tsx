import { ReactNode, AllHTMLAttributes } from 'react';

export default interface DefaultProps extends AllHTMLAttributes<any> {
  _ref?: any;
  children?: ReactNode;
  className?: string;
  id?: string;
  restProps?: any;
  theme?: 'light' | 'dark';
}
