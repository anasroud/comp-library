import DefaultProps from '../../shared/typings/DefaultProps';

export default interface IButtonProps extends DefaultProps {
  onClick: () => void;
  label: string;
  buttonTag?: 'button' | 'a';
  isDisabled?: boolean;
}
