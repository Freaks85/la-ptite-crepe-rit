import { useEffect, useRef, useState } from 'react';

const Section = ({
  id,
  children,
  className = '',
  bgColor = 'bg-cream',
  withTexture = false,
  centered = false,
  animate = true,
  waveColor = null,
}) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!animate) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [animate]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`
        relative py-16 md:py-24 px-4 md:px-8
        ${bgColor}
        ${withTexture ? 'bg-kraft-texture' : ''}
        ${className}
      `}
    >
      {/* Decorative leaves - left */}
      <div className="absolute top-0 left-0 w-32 h-64 opacity-10 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 100 200" className="w-full h-full text-sage animate-sway">
          <path
            d="M20 0 Q30 40 20 80 Q10 120 20 160 Q30 180 25 200"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <ellipse cx="15" cy="30" rx="12" ry="20" fill="currentColor" transform="rotate(-20 15 30)" />
          <ellipse cx="25" cy="70" rx="12" ry="20" fill="currentColor" transform="rotate(15 25 70)" />
          <ellipse cx="18" cy="110" rx="10" ry="16" fill="currentColor" transform="rotate(-10 18 110)" />
          <ellipse cx="22" cy="150" rx="10" ry="16" fill="currentColor" transform="rotate(20 22 150)" />
        </svg>
      </div>

      {/* Decorative leaves - right */}
      <div className="absolute top-20 right-0 w-32 h-64 opacity-10 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 100 200" className="w-full h-full text-sage animate-sway" style={{ animationDelay: '2s' }}>
          <path
            d="M80 0 Q70 40 80 80 Q90 120 80 160 Q70 180 75 200"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <ellipse cx="85" cy="30" rx="12" ry="20" fill="currentColor" transform="rotate(20 85 30)" />
          <ellipse cx="75" cy="70" rx="12" ry="20" fill="currentColor" transform="rotate(-15 75 70)" />
          <ellipse cx="82" cy="110" rx="10" ry="16" fill="currentColor" transform="rotate(10 82 110)" />
          <ellipse cx="78" cy="150" rx="10" ry="16" fill="currentColor" transform="rotate(-20 78 150)" />
        </svg>
      </div>

      <div
        className={`
          max-w-7xl mx-auto relative z-10
          ${centered ? 'text-center' : ''}
          transition-all duration-1000 ease-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
        `}
      >
        {children}
      </div>

      {/* Wave divider bottom */}
      {waveColor && (
        <div className="absolute -bottom-px left-0 right-0 z-20">
          <svg viewBox="0 0 1440 60" className={`w-full h-auto ${waveColor} block`} preserveAspectRatio="none">
            <path d="M0,60 L0,30 Q360,0 720,30 Q1080,60 1440,30 L1440,60 Z" />
          </svg>
        </div>
      )}
    </section>
  );
};

export default Section;
