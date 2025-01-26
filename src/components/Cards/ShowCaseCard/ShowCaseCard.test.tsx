import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ShowCaseCard from './ShowCaseCard';

describe('ShowCaseCard', () => {
  const defaultProps = {
    title: 'Test Title',
    description: 'Test Description',
    image: 'test-image.jpg',
    linkContent: 'https://example.com',
    onClick: jest.fn(),
  };

  it('should renders correctly with default props', () => {
    render(<ShowCaseCard {...defaultProps} />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', 'test-image.jpg');
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'https://example.com',
    );
  });

  it('should renders as a button when asButton is true', () => {
    render(<ShowCaseCard {...defaultProps} asButton />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should calls onClick when clicked', () => {
    render(<ShowCaseCard {...defaultProps} />);
    fireEvent.click(screen.getByRole('link'));
    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  it('should applies the correct theme', () => {
    render(<ShowCaseCard {...defaultProps} theme="dark" />);
    expect(screen.getByRole('link')).toHaveAttribute('data-theme', 'dark');
  });

  it('should align content to the middle', () => {
    render(<ShowCaseCard {...defaultProps} contentAlignment="middle" />);
    expect(screen.getByTestId('cardContent')).toHaveClass('middle');
  });
});
