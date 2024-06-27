'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import Draggable from 'react-draggable';

// 떨어지는 위치와 회전 조절
const getRandomPosition = () => ({
  x: Math.random() * 200 - 100,
  y: Math.random() * 200 + 300,
  rotate: Math.random() * 60 - 30,
});

const FallingChip = ({ child, index }: { child: ReactNode; index: number }) => {
  const [position, setPosition] = useState<{
    x: number;
    y: number;
    rotate: number;
  }>({
    x: 0,
    y: 0,
    rotate: 0,
  });

  useEffect(() => {
    setPosition(getRandomPosition());
  }, []);

  return (
    <div
      className="absolute"
      style={{
        top: `${-100}px`,
        left: '50%',
        transform: `translateX(-50%)`,
        animation: `fall-${index} 2s forwards`,
        animationDelay: `${index * 0.5}s`,
      }}
    >
      <Draggable>{child}</Draggable>
      <style jsx>{`
        @keyframes fall-${index} {
          to {
            top: ${position.y}px;
            left: calc(50% + ${position.x}px);
            transform: translateX(-50%) rotate(${position.rotate}deg);
          }
        }
      `}</style>
    </div>
  );
};

const FallingAnimation = ({ children }: { children: ReactNode }) => {
  return (
    <div className="overflow-hidden">
      {React.Children.map(children, (child, index) => (
        <FallingChip child={child} index={index} />
      ))}
    </div>
  );
};

export default FallingAnimation;
