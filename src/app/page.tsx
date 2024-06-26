'use client';

import { Card, Chip, Skeleton } from '@nextui-org/react';
import { useEffect, useState } from 'react';

// 랜덤 위치 및 회전값 생성
const getRandomPosition = () => ({
  x: Math.random() * 200 - 100, // -100 to 100
  y: Math.random() * 200 + 300, // 300 to 500
  rotate: Math.random() * 60 - 30, // -30 to 30 degrees
});

export default function Home() {
  const [positions, setPositions] = useState<
    { x: number; y: number; rotate: number }[]
  >([]);

  useEffect(() => {
    const newPositions = Array(6)
      .fill(0)
      .map(() => getRandomPosition());

    setPositions(newPositions);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative w-[90%] md:w-[70%] h-[600px] bg-gray-200 rounded-lg flex">
        {/* Chip Component */}
        <div className="flex flex-col space-y-2 p-4">
          <Chip color="default">Default</Chip>
          <Chip color="primary">Primary</Chip>
          <Chip color="secondary">Secondary</Chip>
          <Chip color="success">Success</Chip>
          <Chip color="warning">Warning</Chip>
          <Chip color="danger">Danger</Chip>
        </div>

        {/* Card Skeleton */}
        <div className="flex-grow flex items-center justify-end pr-10">
          <Card
            className="w-full max-w-md h-full max-h-96 space-y-5 p-4"
            radius="lg"
          >
            <Skeleton className="rounded-lg">
              <div className="h-24 rounded-lg bg-default-300"></div>
            </Skeleton>
            <div className="space-y-3">
              <Skeleton className="w-3/5 rounded-lg">
                <div className="h-10 w-3/5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-4/5 rounded-lg">
                <div className="h-10 w-4/5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-2/5 rounded-lg">
                <div className="h-10 w-2/5 rounded-lg bg-default-300"></div>
              </Skeleton>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
