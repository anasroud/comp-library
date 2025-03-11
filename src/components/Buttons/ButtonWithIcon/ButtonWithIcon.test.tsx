import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ButtonWithIcon, { IButtonWithIconProps } from './ButtonWithIcon';

const defaultProps: IButtonWithIconProps = {
  onClick: jest.fn(),
  label: 'Click Me',
  icon: <span>Icon</span>,
};

describe('ButtonWithIcon', () => {
  it('renders the button with label and icon', () => {
    render(<ButtonWithIcon {...defaultProps} />);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
    expect(screen.getByText('Icon')).toBeInTheDocument();
  });

  it('calls onClick when button is clicked', () => {
    render(<ButtonWithIcon {...defaultProps} />);
    fireEvent.click(screen.getByText('Click Me'));
    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  it('applies the correct theme', () => {
    render(<ButtonWithIcon {...defaultProps} theme="dark" />);
    expect(screen.getByRole('button')).toHaveAttribute('data-theme', 'dark');
  });

  it('disables the button when isDisabled is true', () => {
    render(<ButtonWithIcon {...defaultProps} isDisabled />);
    expect(screen.getByRole('button')).toHaveClass('disabled');
    fireEvent.click(screen.getByText('Click Me'));
    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  it('renders with the correct button tag', () => {
    render(<ButtonWithIcon {...defaultProps} buttonTag="a" />);
    expect(screen.getByRole('a')).toBeDefined();
  });
});
