import React from 'react';

interface CircleProps {
  children?: React.ReactNode;
}

const Circle = ({ children }: CircleProps) => {
  return (
    <div className="relative rounded-full bg-white min-w-[130px] min-h-[130px] max-w-[300px] size-auto inline-flex items-center justify-center">
      <div className="aspect-square circle bg-circle-gradient">
        <p className="max-w-[230px] text-xl p-4 items-center justify-center text-black drop-shadow-md text-center break-keep [text-shadow:_0px_0px_3px_rgb(255,255,255)]">
          {children}
        </p>
      </div>
      <div className="circle-layer-container animate-spin-first">
        <div className="bg-circle-gradient circle-layer skew-4 scale-109 animate-pulse-second" />
      </div>
      <div className="circle-layer-container animate-spin-second">
        <div className="bg-circle-gradient circle-layer animate-pulse scale-107 skew-3" />
      </div>
      <div className="circle-layer-container animate-spin-third">
        <div className="bg-circle-gradient circle-layer scale-105 skew-2" />
      </div>
    </div>
  );
};

export default Circle;
