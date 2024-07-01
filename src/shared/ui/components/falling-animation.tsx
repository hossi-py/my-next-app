'use client';

import React, { ReactNode, useEffect, useRef, useState } from 'react';
import Draggable, { DraggableEventHandler } from 'react-draggable';

const FallingChip = ({
  child,
  index,
  browserWidth,
}: {
  child: ReactNode;
  index: number;
  browserWidth: number;
}) => {
  const [position, setPosition] = useState<{
    x: number;
    y: number;
    rotate: number;
  }>({ x: 0, y: 0, rotate: 0 });
  // draggable과 transform이 동시에 적용되었을 때 올바른 위치가 적용되지 않음
  const chipRef = useRef<HTMLDivElement>(null);
  const draggableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPosition({
      x:
        browserWidth > 768
          ? Math.random() * 300 - 200
          : Math.random() * 200 - 50,
      y: Math.random() * 300 + 100,
      rotate: Math.random() * 60 - 30,
    });
  }, []);

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

        // target-area로 들어왔을 때
        if (isInArea) {
          // setPosition({
          //   x: 556,
          //   y: 435,
          //   rotate: 0,
          // });
        }
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
        zIndex: 20,
        top: `${-110}px`,
        left: '20%',
        animation: `fall-${index} 2s forwards`,
        animationDelay: `${index * 0.5}s`,
        cursor: 'pointer',
        transform: `rotate(${position.rotate}deg)`,
      }}
    >
      <Draggable nodeRef={draggableRef} onStop={handleStop} onDrag={handleDrag}>
        <div ref={draggableRef}>
          <div ref={chipRef}>{child}</div>
        </div>
      </Draggable>
      <style jsx>{`
        @keyframes fall-${index} {
          to {
            top: ${position.y}px;
            left: calc(20% + ${position.x}px);
          }
        }
      `}</style>
    </div>
  );
};

const FallingAnimation = ({ children }: { children: ReactNode }) => {
  const [browserWidth, setBrowserWidth] = useState<number>(0);

  /**
   * window.innerWidth를 useEffect에서 정의하는 이유?
   *
   * Next.js는 SSR을 사용하므로 초기 페이지 로드 시 서버에서 실행되는 코드에서는 window, document 등이 정의되지 않았기 때문
   */
  useEffect(() => {
    const handleResize = () => {
      setBrowserWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="w-[300px] h-[400px]">
      {React.Children.map(children, (child, index) => (
        <FallingChip child={child} index={index} browserWidth={browserWidth} />
      ))}
    </div>
  );
};

export default FallingAnimation;
