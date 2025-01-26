import DefaultProps from '../../shared/typings/DefaultProps';

export interface CardProps extends DefaultProps {
  title: string;
  description: string;
  image: string;
  linkContent?: string;
  imgHeight?: string;
  onClick?: () => void;
  contentAlignment?: 'middle' | 'left';
}
