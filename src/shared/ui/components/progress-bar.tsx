'use client';

import { Progress } from '@nextui-org/react';
import { useEffect, useState } from 'react';

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const handleScroll = () => {
    const totalScroll = window.scrollY || document.documentElement.scrollTop;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scroll = (totalScroll / windowHeight) * 100;

    setScrollProgress(parseFloat(scroll.toFixed(2)));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // useEffect의 return => 초기화
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-4 z-50">
      <Progress aria-label="progress-bar" value={scrollProgress} />
    </div>
  );
};

export default ProgressBar;
