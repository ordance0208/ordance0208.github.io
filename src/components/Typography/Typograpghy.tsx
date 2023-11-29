interface Props {
  children: any;
  variant?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  textColor?: string;
}

const Typograpghy = ({ children, variant = 'p', className, textColor }: Props) => {
  const themeModeClasses = `${textColor ? textColor : 'text-dark dark:text-light'} ${className}`;

  const renderElement = () => {
    switch (variant) {
      case 'p':
        return <p className={themeModeClasses}>{children}</p>;
      case 'h1':
        return <h1 className={themeModeClasses}>{children}</h1>;
      case 'h2':
        return <h2 className={themeModeClasses}>{children}</h2>;
      case 'h3':
        return <h3 className={themeModeClasses}>{children}</h3>;
      case 'h4':
        return <h4 className={themeModeClasses}>{children}</h4>;
      case 'h5':
        return <h5 className={themeModeClasses}>{children}</h5>;
      case 'h6':
        return <h6 className={themeModeClasses}>{children}</h6>;
    }
  };

  return <>{renderElement()}</>;
};

export default Typograpghy;
