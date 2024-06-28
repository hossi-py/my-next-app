'use client';

import React, { ReactNode, useEffect, useRef, useState } from 'react';
import Draggable, { DraggableEventHandler } from 'react-draggable';

// 떨어지는 위치와 회전 조절
const getRandomPosition = () => ({
  x: Math.random() * 200 - 300,
  y: Math.random() * 200 + 300,
  rotate: Math.random() * 60 - 30,
});

const FallingChip = ({
  child,
  index,
  onDragInArea,
}: {
  child: ReactNode;
  index: number;
  onDragInArea: (isInArea: boolean, id: number) => void;
}) => {
  const [position, setPosition] = useState<{
    x: number;
    y: number;
    rotate: number;
  }>({
    x: 0,
    y: 0,
    rotate: 0,
  });
  // draggable과 transform이 동시에 적용되었을 때 올바른 위치가 적용되지 않음
  const chipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPosition(getRandomPosition());
  }, []);

  const handleStart: DraggableEventHandler = () => {};

  const handleStop: DraggableEventHandler = (e, data) => {
    if (chipRef.current) {
      // 최종 위치가 특정 영역 안에 있는 지 감지
      const chipRect = chipRef.current.getBoundingClientRect();
      const targetArea = document.getElementById('target-area');
      if (targetArea) {
        const targetRect = targetArea.getBoundingClientRect();

        const isInArea =
          chipRect.left >= targetRect.left &&
          chipRect.right <= targetRect.right &&
          chipRect.top >= targetRect.top &&
          chipRect.bottom <= targetRect.bottom;

        onDragInArea(isInArea, index);
      }
    }
  };

  const handleDrag: DraggableEventHandler = () => {
    // 드래그 시작 시 회전을 0으로 설정
    setPosition((prev) => ({ ...prev, rotate: 0 }));
  };

  return (
    <div
      className="absolute"
      style={{
        top: `${-100}px`,
        left: '70%',
        animation: `fall-${index} 2s forwards`,
        animationDelay: `${index * 0.5}s`,
        cursor: 'pointer',
        transform: `rotate(${position.rotate}deg)`,
      }}
    >
      <Draggable onStart={handleStart} onStop={handleStop} onDrag={handleDrag}>
        <div ref={chipRef}>{child}</div>
      </Draggable>
      <style jsx>{`
        @keyframes fall-${index} {
          to {
            top: ${position.y}px;
            left: calc(70% + ${position.x}px);
          }
        }
      `}</style>
    </div>
  );
};

const FallingAnimation = ({ children }: { children: ReactNode }) => {
  const handleDragInArea = (isInArea: boolean, id: number) => {
    console.log('들어왔다.', isInArea, id);
  };

  return (
    <div>
      {React.Children.map(children, (child, index) => (
        <FallingChip
          child={child}
          index={index}
          onDragInArea={handleDragInArea}
        />
      ))}
    </div>
  );
};

export default FallingAnimation;
