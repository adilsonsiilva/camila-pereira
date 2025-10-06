import React, { ReactNode, useEffect, useRef, useState } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
  icon?: ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, className = '', titleClassName = '', icon }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id={id} 
      className={`py-20 md:py-28 container mx-auto px-6 md:px-10 max-w-5xl transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
    >
      <div className={`mb-12 flex items-center gap-4 ${titleClassName?.includes('text-center') ? 'justify-center' : ''} ${titleClassName}`}>
        {icon}
        <h2 className="text-4xl md:text-5xl font-bold text-brand-dark">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
};