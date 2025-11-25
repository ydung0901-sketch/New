import React from 'react';
import { FeatureProps } from '../types';

const FeatureSection: React.FC<FeatureProps> = ({
  id,
  badge,
  title,
  description,
  points,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt,
  reversed = false
}) => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-10 w-full scroll-mt-20" id={id}>
      <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 bg-white rounded-xl overflow-hidden shadow-lg border border-slate-200 p-6 sm:p-10`}>
        <div className="lg:w-1/2">
          <img 
            className="w-full h-80 object-cover rounded-lg shadow-md" 
            alt={imageAlt} 
            src={imageSrc} 
          />
        </div>
        <div className="lg:w-1/2 flex flex-col gap-5 text-left">
          <span className="text-primary text-sm font-semibold tracking-wide uppercase">{badge}</span>
          <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold leading-tight">
            {title}
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            {description}
          </p>
          
          {points.map((point, index) => (
            <div key={index} className="flex items-center gap-3 text-slate-900 text-base font-semibold">
              <span className="material-symbols-outlined text-primary text-2xl">{point.icon}</span>
              {point.text}
            </div>
          ))}

          <a 
            className="flex min-w-[84px] self-start cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold hover:bg-primary/90 transition-colors mt-4" 
            href={buttonLink}
          >
            <span className="truncate">{buttonText}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;