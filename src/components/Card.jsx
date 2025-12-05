const Card = ({
  children,
  className = '',
  hoverable = false,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        bg-cream-light rounded-2xl shadow-lg p-6 md:p-8
        ${hoverable ? 'cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
