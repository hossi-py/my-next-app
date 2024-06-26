import FallingAnimation from '@/shared/ui/falling-animation';
import { Chip } from '@nextui-org/react';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-[90%] md:w-[70%] h-[600px] bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
        <FallingAnimation>
          <Chip color="default">Default</Chip>
          <Chip color="primary">Primary</Chip>
          <Chip color="secondary">Secondary</Chip>
          <Chip color="success">Success</Chip>
          <Chip color="warning">Warning</Chip>
          <Chip color="danger">Danger</Chip>
        </FallingAnimation>

        {/* Card Skeleton */}
        <div className="flex-grow flex items-center justify-center">
          <div className="w-full max-w-md h-full max-h-96 space-y-5 p-4 bg-white rounded-lg shadow-lg">
            <div className="rounded-lg bg-default-300 h-24"></div>
            <div className="space-y-3">
              <div className="w-3/5 rounded-lg bg-default-200 h-10"></div>
              <div className="w-4/5 rounded-lg bg-default-200 h-10"></div>
              <div className="w-2/5 rounded-lg bg-default-300 h-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
