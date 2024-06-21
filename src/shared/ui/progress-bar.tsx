'use client';

import { Progress } from '@nextui-org/react';
import { useEffect, useState } from 'react';

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const handleScroll = () => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scroll = `${(totalScroll / windowHeight) * 100}`;

    setScrollProgress(parseFloat(scroll));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // useEffect의 return => 초기화
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full">
      <Progress value={scrollProgress} />
    </div>
  );
};

export default ProgressBar;
