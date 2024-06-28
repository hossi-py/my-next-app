'use client';

import ArrowIcon from '../icons/ArrowIcon';

const rotateDegreeMap = {
  up: 'rotate-180',
  down: 'rotate-0',
  left: 'rotate-90',
  right: '-rotate-90',
};

const ArrowIndicator = ({
  direction,
}: {
  direction: 'up' | 'down' | 'left' | 'right';
}) => {
  return (
    <div className={`relative ${rotateDegreeMap[direction]} h-[60px] w-[30px]`}>
      <style jsx>{`
        @keyframes arrowMove {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
        // 해당 컴포넌트 svg 파일에 전역적으로 애니메이션 적용하기 위해 global 속성 사용
        .arrow-animation :global(svg) {
          position: absolute;
          animation: arrowMove 1s ease-in-out infinite;
        }
        .arrow-animation :global(svg:nth-child(1)) {
          top: 0;
          animation-delay: 0.22s;
        }
        .arrow-animation :global(svg:nth-child(2)) {
          top: 13px;
          animation-delay: 0.25s;
        }
        .arrow-animation :global(svg:nth-child(3)) {
          top: 26px;
          animation-delay: 0.28s;
        }
      `}</style>
      {/* svg 요소를 화면에 렌더링 시키지 않지만 def 하기 위해 설정 */}
      <svg width="0" height="0">
        <defs>
          {/* 수평 그라데이션 적용 (x: 0 ~ 100) */}
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            {/* 시작 */}
            <stop
              offset="0%"
              style={{ stopColor: '#6b5b95', stopOpacity: 1 }}
            />
            {/* 끝 */}
            <stop
              offset="100%"
              style={{ stopColor: '#b565a7', stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
      </svg>
      <div className="arrow-animation">
        <ArrowIcon color="url(#grad)" />
        <ArrowIcon color="url(#grad)" />
        <ArrowIcon color="url(#grad)" />
      </div>
    </div>
  );
};

export default ArrowIndicator;
