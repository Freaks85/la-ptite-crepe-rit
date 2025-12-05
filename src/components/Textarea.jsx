const Textarea = ({
  label,
  name,
  placeholder,
  rows = 4,
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
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        rows={rows}
        required={required}
        className="
          w-full px-4 py-3 rounded-lg
          bg-white border-2 border-cream-warm
          focus:border-sage focus:outline-none
          text-wood-dark placeholder:text-wood/40
          transition-colors duration-300
          resize-none
        "
        {...props}
      />
    </div>
  );
};

export default Textarea;
