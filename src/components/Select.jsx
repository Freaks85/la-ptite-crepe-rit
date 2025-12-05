const Select = ({
  label,
  name,
  options,
  placeholder,
  required = false,
  className = '',
  ...props
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label htmlFor={name} className="text-wood-dark font-medium">
          {label}
          {required && <span className="text-sage ml-1">*</span>}
        </label>
      )}
      <select
        id={name}
        name={name}
        required={required}
        className="
          w-full px-4 py-3 rounded-lg
          bg-white border-2 border-cream-warm
          focus:border-sage focus:outline-none
          text-wood-dark
          transition-colors duration-300
          cursor-pointer
        "
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
