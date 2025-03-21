import React from 'react';

interface CircleProps {
  children?: React.ReactNode;
}

const Circle = ({ children }: CircleProps) => {
  return (
    <div className="relative inline-flex size-auto min-h-[130px] max-w-[300px] min-w-[130px] items-center justify-center rounded-full bg-white">
      <div className="circle bg-circle-gradient aspect-square">
        <p className="text-blur max-w-[230px] items-center justify-center p-4 text-center text-xl break-keep text-black drop-shadow-md">
          {children}
        </p>
      </div>
      <div className="circle-layer-container animate-spin-first">
        <div className="bg-circle-gradient circle-layer animate-pulse-second scale-109 skew-4" />
      </div>
      <div className="circle-layer-container animate-spin-second">
        <div className="bg-circle-gradient circle-layer scale-107 skew-3 animate-pulse" />
      </div>
      <div className="circle-layer-container animate-spin-third">
        <div className="bg-circle-gradient circle-layer scale-105 skew-2" />
      </div>
    </div>
  );
};

export default Circle;
