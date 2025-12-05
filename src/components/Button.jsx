const Button = ({
  children,
  variant = 'primary',
  onClick,
  type = 'button',
  className = '',
  ...props
}) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer';

  const variants = {
    primary: 'bg-sage text-white hover:bg-sage-dark',
    secondary: 'bg-wood text-white hover:bg-wood-dark',
    outline: 'border-2 border-sage text-sage hover:bg-sage hover:text-white bg-transparent shadow-none',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
