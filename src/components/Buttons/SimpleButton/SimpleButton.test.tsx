import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SimpleButton from './SimpleButton';

describe('SimpleButton', () => {
  let onClick: jest.Mock;

  beforeEach(() => {
    jest.resetModules();
    onClick = jest.fn();
  });
  it('should renders the button with the correct label', () => {
    const { getByText } = render(
      <SimpleButton label="Click me" onClick={onClick} />,
    );
    expect(getByText('Click me')).toBeInTheDocument();
  });

  it('should calls the onClick handler when clicked', () => {
    const { getByText } = render(
      <SimpleButton label="Click me" onClick={onClick} />,
    );
    fireEvent.click(getByText('Click me'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should applies the disabled class when isDisabled is true', () => {
    const { getByText } = render(
      <SimpleButton label="Click me" onClick={onClick} isDisabled />,
    );
    expect(getByText('Click me')).toHaveClass('disabled');
  });

  it('should renders the button with the correct theme', () => {
    const { getByText } = render(
      <SimpleButton onClick={onClick} label="Click me" theme="dark" />,
    );
    expect(getByText('Click me')).toHaveAttribute('data-theme', 'dark');
  });

  it('should renders the button with the correct tag', () => {
    const { getByText } = render(
      <SimpleButton onClick={onClick} label="Click me" buttonTag="a" />,
    );
    expect(getByText('Click me').tagName).toBe('A');
  });
});
