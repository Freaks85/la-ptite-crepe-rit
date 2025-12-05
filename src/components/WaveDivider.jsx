const WaveDivider = ({ from = 'cream', to = 'cream-warm', flip = false, className = '' }) => {
  const colorMap = {
    'cream': '#F5F0E8',
    'cream-warm': '#EDE6DB',
    'cream-light': '#FAF8F5',
    'sage': '#6B7F5E',
  };

  const fillColor = colorMap[to] || to;

  return (
    <div className={`relative w-full overflow-hidden ${flip ? 'rotate-180' : ''} ${className}`}>
      <svg
        viewBox="0 0 1440 80"
        className="w-full h-auto block"
        preserveAspectRatio="none"
        style={{ display: 'block', marginBottom: '-1px' }}
      >
        <path
          d="M0,80 L0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
