'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import Draggable, { DraggableEventHandler } from 'react-draggable';

// 떨어지는 위치와 회전 조절
const getRandomPosition = () => ({
  x: Math.random() * 200 - 300,
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
  const [isDragging, setIsDragging] = useState<boolean>(false);

  useEffect(() => {
    setPosition(getRandomPosition());
  }, []);

  const handleStart: DraggableEventHandler = () => {
    setIsDragging(true);
  };

  const handleStop: DraggableEventHandler = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="absolute"
      style={{
        top: `${-100}px`,
        left: '70%',
        transform: `translateX(-50%)`,
        animation: `fall-${index} 2s forwards`,
        animationDelay: `${index * 0.5}s`,
        cursor: 'pointer',
      }}
    >
      <Draggable onStart={handleStart} onStop={handleStop}>
        {child}
      </Draggable>
      {/* 기울기가 설정되어 있으면 드래그 시 이동에 불편함이 있음 */}
      <style jsx>{`
        @keyframes fall-${index} {
          to {
            top: ${position.y}px;
            left: calc(70% + ${position.x}px);
            transform: translateX(-50%)
              ${isDragging ? '' : `rotate(${position.rotate}deg)`};
          }
        }
      `}</style>
    </div>
  );
};

const FallingAnimation = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {React.Children.map(children, (child, index) => (
        <FallingChip child={child} index={index} />
      ))}
    </div>
  );
};

export default FallingAnimation;
