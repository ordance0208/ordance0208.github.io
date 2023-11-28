interface Props {
  children: any;
  variant?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

const Typograpghy = ({ children, variant = 'p', className }: Props) => {
  const themeModeClasses = 'text-dark dark:text-light';

  const renderElement = () => {
    switch (variant) {
      case 'p':
        return <p className={`${themeModeClasses} ${className}`}>{children}</p>;
      case 'h1':
        return <h1 className={`${themeModeClasses} ${className}`}>{children}</h1>;
      case 'h2':
        return <h2 className={`${themeModeClasses} ${className}`}>{children}</h2>;
      case 'h3':
        return <h3 className={`${themeModeClasses} ${className}`}>{children}</h3>;
      case 'h4':
        return <h4 className={`${themeModeClasses} ${className}`}>{children}</h4>;
      case 'h5':
        return <h5 className={`${themeModeClasses} ${className}`}>{children}</h5>;
      case 'h6':
        return <h6 className={`${themeModeClasses} ${className}`}>{children}</h6>;
    }
  };

  return <>{renderElement()}</>;
};

export default Typograpghy;
