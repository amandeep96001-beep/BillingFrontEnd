import React, { ReactNode } from 'react';
import './Button.css';

interface ButtonProps {
  variant?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  children?: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  size?: 'sm' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      icon,
      iconPosition = 'left',
      children,
      onClick,
      disabled = false,
      size,
      className,
      type = 'button',
    },
    ref
  ) => {
    const classNames = [
      'btn',
      `btn-${variant}`,
      size ? `btn-${size}` : '',
      className || ''
    ].filter(Boolean).join(' ');

    return (
      <button
        ref={ref}
        onClick={onClick}
        disabled={disabled}
        className={classNames}
        type={type}
      >
        {icon && iconPosition === 'left' && (
          <span className="button-icon button-icon-left">{icon}</span>
        )}
        <span className="button-text">{children}</span>
        {icon && iconPosition === 'right' && (
          <span className="button-icon button-icon-right">{icon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
