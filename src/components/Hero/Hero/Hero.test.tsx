import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Hero, { IHeroProps } from './Hero';

const defaultProps: IHeroProps = {
  buttonLabel: 'Click Me',
  buttonOnClick: jest.fn(),
  subtitle: 'This is a subtitle',
  title: 'This is a title',
};

describe('Hero Component', () => {
  it('renders the title and subtitle', () => {
    render(<Hero {...defaultProps} />);
    expect(screen.getByText('This is a title')).toBeInTheDocument();
    expect(screen.getByText('This is a subtitle')).toBeInTheDocument();
  });

  it('renders the button with the correct label', () => {
    render(<Hero {...defaultProps} />);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('calls the button onClick handler when clicked', () => {
    render(<Hero {...defaultProps} />);
    fireEvent.click(screen.getByText('Click Me'));
    expect(defaultProps.buttonOnClick).toHaveBeenCalled();
  });

  it('applies custom class names', () => {
    const customProps: IHeroProps = {
      ...defaultProps,
      className: 'custom-class',
      contentClassName: 'custom-content-class',
      buttonClassName: 'custom-button-class',
    };
    const { container } = render(<Hero {...customProps} />);
    expect(container.firstChild).toHaveClass('custom-class');
    expect(screen.getByText('This is a title').parentElement).toHaveClass(
      'custom-content-class',
    );
    expect(screen.getByText('Click Me')).toHaveClass('custom-button-class');
  });

  it('applies background position and transition styles', () => {
    const customProps: IHeroProps = {
      ...defaultProps,
      backgroundPosition: 'center',
      transition: 'all 0.3s ease',
    };
    const { container } = render(<Hero {...customProps} />);
    expect(container.firstChild).toHaveStyle('background-position: center');
    expect(container.firstChild).toHaveStyle('transition: all 0.3s ease');
  });
});
