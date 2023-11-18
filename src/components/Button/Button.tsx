import React, { MouseEventHandler } from 'react';

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  children?: string | React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button = ({
  children,
  variant = 'primary',
  className,
  onClick,
}: Props) => {
  return (
    <button
      className={
        `px-5 py-2 rounded-[11px] font-semibold text-[17px] text-[#FAFAFA] hover:opacity-90 transition-colors ${
          variant === 'primary' ? 'bg-accent' : 'border-2 border-accent'
        } ` + className
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
