import React, { MouseEventHandler } from 'react';

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  children?: string | React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  disabled?: boolean;
}

const Button = ({
  children,
  variant = 'primary',
  className,
  disabled,
  onClick,
}: Props) => {
  return (
    <button
      className={`px-5 py-2 rounded-[11px] font-semibold text-dark hover:opacity-90 transition-colors ${
        variant === 'primary'
          ? 'bg-accent text-light'
          : 'border-2 border-accent dark:text-light'
      } ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
